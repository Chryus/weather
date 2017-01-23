import express from 'express'
import path from 'path'
import compression from 'compression'
import React from 'react'
// use this to render app to html string
import { renderToString } from 'react-dom/server'
// use these to match url to routes and render matching components
import { match, RouterContext } from 'react-router'
import routes from './app/config/routes'

var app = express()

app.use(compression())

// serve our static stuff like index.css
app.use(express.static(path.resolve(__dirname, 'dist'), {index: false}))

// send all requests to index.html so browserHistory works
app.get('*', function (req, res) {

  //match the routes to the url
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    // RouterContext is what the Router renders. Router keeps these
    // props in its state as it listens to browserHistory. But our app
    // is stateless on the server so we need to use match to get these
    // props before rendering
    if (err) {
      // there was an error during route matching
      res.status(500).send(err.message)
    } else if (redirect) {
      // handle onEnter hooks
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      // got props? that's a match and we can render
      const appHtml = renderToString(<RouterContext {...props}/>)
      res.send(appHtml)
    } else {
      // no errors, no redirect, we just didn't match anything
      res.status(404).send('Not Found')
    }
  })
})

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
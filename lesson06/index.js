/**
 * RoutingとStatesCode
 */

//  httpのサーバーを立ち上げる
const http = require("http")
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log(`request path is "${req.url}"`)

  res.setHeader('content-type', 'text/html')
  let path = './lesson06/public/'
  switch (req.url) {
    case '/':
      path += 'index.html'
      res.statusCode = 200
      break;
    case '/about':
      console.log('About page now!!')
      path += 'about.html'
      res.statusCode = 200
      break;
    // Redirect
    case '/redirect-page':
      console.log('redirect now!!') // 実行されない
      res.statusCode = 301
      res.setHeader('Location', '/')
      res.end()
      // endが必要
      break;
    default:
      path += '404.html'
      res.statusCode = 404
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err)
      res.end()
    } else {
      res.write(data)
      res.end()
    }
  })
})

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000")
})

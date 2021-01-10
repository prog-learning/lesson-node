/**
 * サーバーとクライアント
 */

//  httpのサーバーを立ち上げる
const http = require("http")
const server = http.createServer((req, res) => {
  console.log("reqest made")
  // このURLにリクエストがあった場合reqで受け取れる
  // console.log(req)
  console.log(req.url) // '/contact'とか受け取る

  // console.log(res)
})

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000")
})

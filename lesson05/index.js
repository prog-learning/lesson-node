/**
 * サーバーとクライアント
 */

//  httpのサーバーを立ち上げる
const http = require("http")
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log("reqest made")
  // このURLにリクエストがあった場合reqで受け取れる
  // console.log(req)
  console.log(req.url, req.method) // pathとか受け取る

  // レスポンスする
  // res.setHeader('content-type', 'text/plain')
  // res.write('hello nob!!')

  // HTMLを返すことも（これでWebサイトを見せているというわけです）
  // res.setHeader('content-type', 'text/html')
  // res.write('<h1>hello nob!!</h1>')

  // res.end()

  // ファイルを返すことも
  res.setHeader('content-type', 'text/html')
  fs.readFile('./lesson05/public/index.html', (err, data) => {
    if (err) {
      console.log(err)
      res.end()
    } else {
      res.write(data)
      res.end()
    }
  })

  // 長くなりそうなので,続きは次回

})

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000")
})

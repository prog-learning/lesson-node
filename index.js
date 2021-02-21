/**
 * Lesson Node.js
 * 03. http server
 */

// requireメソッド
// module（外部ファイル）を読み込む
const http = require('http')
// const fs = require('fs')


const servser = http.createServer((request, response) => {
  // ここにサーバーで実行する処理を書く
  console.log('リクエストがありました！')
  console.log(request.url)
  console.log(request.method)
  console.log(request.body)
  // レスポンスする
  response.setHeader('Content-Type', 'text/html')
  // response.write('hello!!')
  // response.write('<h1>hello world</h1>')
  // response.end()

  // fsメソッドを使ってhtmlファイルを返す
  // fs.readFile('./index.html', (error, data) => {
  //   if (!error) {
  //     response.write(data)
  //     response.end()
  //     // response.end(data) //このように省略できる
  //   } else {
  //     console.log(error)
  //   }
  // })
})

servser.listen(3000, 'localhost', () => {
  console.log('localhost:3000において,リクエストを受け付けております！')
})

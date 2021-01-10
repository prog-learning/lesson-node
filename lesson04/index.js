/**
 * 4.ストリーム
 */

const fs = require("fs")

// 大きなファイルを読み込む
const readStream = fs.createReadStream("./lesson04/docs/bigdata.txt")

// エンコードを指定することで変換してくれる（チャンク化されない？）
// const readStream = fs.createReadStream("./lesson04/docs/bigdata.txt", {
//   encoding: "utf8"
// })

// 空のファイルを作成する
const writeStream = fs.createWriteStream("./lesson04/docs/empty.txt")

// チャンクごとに読み込んでいることがわかる.
readStream.on("data", (chunk) => {
  console.log("---- NEW CHUNK ----")
  console.log(chunk)
  // console.log(chunk.toString())

  // 書き込み
  writeStream.write("\nNEW CHUNK:\n")
  // チャンクごとに改行しながら書き込んでいく
  writeStream.write(chunk)
})

// piping（これで同じことができる）
// readStream.pipe(writeStream)

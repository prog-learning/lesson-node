/**
 * 3.ファイル操作系
 */

const fs = require("fs")
// こいつを使う

// 読み込み
fs.readFile("./lesson03/docs/data.txt", (err, data) => {
  if (err) {
    console.log(err)
  }
  console.log(data) //buffer
  console.log(data.toString())
})

console.log("=== line ===")

// 書き込み（読み込みよりも先に実行される）
fs.writeFile("./lesson03/docs/data.txt", "hello, world", () => {
  console.log("file was written")
})

// ないファイルは作成してくれる（フォルダは作ってくれない）
fs.writeFile("./lesson03/docs/data2.txt", "hello, again", () => {
  console.log("file was written")
})

// フォルダの作成
if (!fs.existsSync("./assets")) {
  // フォルダがなかったら作る
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err)
    }
    console.log("folder created")
  })
} else {
  // あったら消す
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err)
    }
    console.log("folder deleted")
  })
}

// ファイルの削除
if (fs.existsSync("./lesson03/docs/deleteme.txt")) {
  fs.unlink("./lesson03/docs/deleteme.txt", (err) => {
    // ファイルがあったら
    if (err) {
      console.log(err)
    }
    console.log("file deleted")
  })
} else {
  fs.writeFile("./lesson03/docs/deleteme.txt", "I'm delete.", () => {
    console.log("'deleteme.txt' was written")
  })
}

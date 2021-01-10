/**
 * Node.js
 */

// Node.js公式 https://nodejs.org/ja/
// バックエンドのJabaScript

console.log("Lets study!!")
// Terminalで`node ファイル名`で実行

// 現在のフォルダ名とファイル名を取得
console.log(__dirname)
console.log(__filename)

// documentは取得できない
// console.log(document.querySelector) //not defined

// OSの情報を取得する
const os = require("os")
// console.log(os)
console.log(os.platform(), os.homedir())

const { people } = require('../lesson02/data')
console.log(people)

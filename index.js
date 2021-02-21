/**
 * Lesson Node.js
 * 01. JavaScript
 */

// JavaScriptの確認
console.log('hello')

const name = 'taro'

const greeting = () => {
  console.log(`hello ${name}`)
}

greeting()

// 標準で搭載している変数や関数

console.log(__dirname)
console.log(__filename)

console.log(global)

// global.setTimeout(() => {
//   console.log('遅れました😅')
// }, 3000);

setTimeout(() => {
  console.log('遅れました😅')
}, 3000);

// documentは存在しない
// console.log(document)
// console.log(window)
console.log(console)

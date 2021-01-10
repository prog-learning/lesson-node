/**
 * module.export
 */

// data.jsでmoduleとしてexportされたデータをdataって名前で受け取る
const data = require('./data')
// 確認
console.log(data.people, data.ages)

// // 分割代入で受け取る
const { people, ages } = require("./data")
// ※module.exports時のプロパティと一致するように
console.log(people, ages)

/**
 * module.export
 */

// 定義したデータをmoduleとしてexport

// 定義
const people = ["yoshi", "ryu", "chun-li", "mario"]

// moduleとしてexport
module.exports = people


// 複数あるとき
const ages = [20, 25, 30, 35]

module.exports = {
  people,
  ages
}

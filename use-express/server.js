/* express モジュールのインスタンス作成 */
const express = require('express');
const app = express();

// パス指定用モジュール
const path = require('path');

// 4000番ポートで待ちうける
app.listen(4000, () => {
  console.log('Running at Port 4000...');
});

app.get('/hello', (req, res) => res.send('Hello!!!!'));

const todos = [
  { id: '11', content: 'Node.jsを勉強する', done: false },
  { id: '12', content: 'Web APIを作る', done: false },
  { id: '13', content: 'JavaScriptを勉強する', done: true },
];

app.get('/todo', (req, res) => res.json(todos));

// 静的ファイルのルーティング
// app.use(express.static(path.join(__dirname, 'public')));

// その他のリクエストに対する404エラー
app.use((req, res) => {
  res.sendStatus(404);
});

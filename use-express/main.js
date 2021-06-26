/* fetchを使用 */
const fetch = require('node-fetch');

fetch('http://localhost:4000/hello').then((a) => a.text().then((a) => console.log(a)));
fetch('http://localhost:4000/todo').then((a) => a.json().then((a) => console.log(a)));

/* Axiosを使用 */
const axios = require('axios');

axios.get('http://localhost:4000/hello').then((a) => console.log(a.data));
axios.get('http://localhost:4000/todo').then((a) => console.log(a.data));

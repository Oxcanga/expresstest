/* 
Bu proje express ile yapılacağı gibi static şekilde de yapılabilir.
Express ile yapılmasının sebebi ilerde daha fazla özellik eklenecektir.

*/


const express = require("express");
const app = express();
const axios = require('axios');

const router = express.Router()
const port = 8080;

app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda çalışıyor.`);
})
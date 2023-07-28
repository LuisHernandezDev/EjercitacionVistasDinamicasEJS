const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.set('views', [
    path.join(__dirname, './views'),
]);


const mainRouter = require('./routes/mainRouter');

app.use('/', mainRouter);



app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor funcionando ' + process.env.PORT || 3000);
});
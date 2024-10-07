const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"));
app.get('/', (req, res) => {    
    res.render('index');
});
app.post('/test', (req, res) => {
    console.log(req.body);
});
const port = process.env.port || 3000;
app.listen(port, () => {
    console.log('Server is running on port 3000');
});
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const mongoose = require('mongoose');
const methodOverride    = require('method-override');
const PORT = process.env.PORT || 8080;
const IP = process.env.IP || "127.0.0.1";
const app = express();

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))

app.get('/', (req,res) => {
    res.render('home')
})
//PASSPORT CONFIGURATION
/*


#### Todo later #####

*/

app.listen(PORT, IP)



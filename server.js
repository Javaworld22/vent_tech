/**
 * To install nodemon for development purposes
 * npm install -D nodemon
 */

 var express = require('express');
 const bodyParser = require ('body-parser')
 var app = express()
 var path = require('path')

 const port = process.env.PORT || 3030

 app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')



app.disable('etag');
app.use(express.static(path.join(__dirname,'public')))
//app.use('/assets',express.static(path.join(__dirname,'public/assets')))

app.get('/', function(req, res) {
    res.render('index');
  });

app.listen(port, ()=>{console.log('Starting the server at port ' +port)})

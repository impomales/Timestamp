var express = require('express')
var path = require('path')
var app = express()

app.use(express.static(path.join(__dirname + '/html')))

app.get('/', function(req, res) {
    res.render('index.html')
})

app.listen(8080, function() {
    console.log('the app is listening at port 8080!')
})
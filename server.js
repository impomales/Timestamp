var express = require('express')
var path = require('path')
var app = express()
var moment = require('moment')

app.use(express.static(path.join(__dirname + '/html')))

app.get('/', function(req, res) {
    res.render('index.html')
})

app.get('/:date', function(req, res) {
    var date = req.params.date;
    
    if (!isNaN(date))
        res.end(moment(date).valueOf().toString())
    else {
        var natural = moment(date, 'MMMM-DD-YYYY').format()
        
        if (natural === 'Invalid date')
            res.end('error!')
        else
            res.end(natural)
    }
})

app.listen(8080, function() {
    console.log('the app is listening at port 8080!')
})
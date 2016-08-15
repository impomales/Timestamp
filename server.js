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
    
    if (!isNaN(parseInt(date))) {
        res.json({
            unix: moment.unix(parseInt(date)).unix(),
            natural: moment.unix(parseInt(date)).format('MMMM-DD-YYYY')
        })
    }
    else {
        var natural = moment(date, 'MMMM-DD-YYYY').format()
        
        if (natural === 'Invalid date') {
            res.writeHead(406) 
            res.end('invalid date')
        }
        else {
            res.json({
                unix: moment(date, 'MMMM-DD-YYYY').unix(),
                natural: moment(date, 'MMMM-DD-YYYY').format('MMMM-DD-YYYY')
            })
        }
    }
})

app.listen(8080, function() {
    console.log('the app is listening at port 8080!')
})
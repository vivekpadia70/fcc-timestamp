var express = require('express');
var strftime = require('strftime');
var transformer = require('dat-transformer');
var moment = require('moment');
var timestamp = require('unix-timestamp');
var router = express.Router();

var app = express();

app.use(express.static(__dirname + '/'))

app.set('views', __dirname + '/views')
app.set('view engine', 'jade');
app.set('port', (process.env.PORT || 8000));


app.get('/', function(req, res, next){
  res.render('index', {title : 'express jade'});
})

app.get('/:date', function(req, res){
  var som = req.params.date;
  if(som>=0 && som<=2147452200){
    som = som*1000;
    var time = strftime('%B %d, %Y', new Date(Number(som)))
    som = som/1000;
  }
  else if(moment(som.toString(), 'MMMM DD, YYYY')){
    var time = moment(som.toString(), 'MMMM DD, YYYY').valueOf()/1000;
    tmp = time;
    time = som;
    som = tmp;
  }
  else{
    time = null;
  }
  var obj = {'unix timestamp' : som, 'natural date' : time}
  res.send(obj);
})

app.listen(app.get('port'), function(){
  console.log("listening to port ", app.get('port'));
});

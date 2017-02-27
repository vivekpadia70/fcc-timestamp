var express = require('express');

var app = express();

app.set('port', (process.env.PORT || 8000));

app.get('/', function(req, res){
  res.send("Hello World!!");
})

app.listen(app.get('port'), function(){
  console.log("listening to port ", app.get('port'));
});

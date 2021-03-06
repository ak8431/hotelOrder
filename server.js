var express = require('express');
var app = express();
var PORT=process.env.PORT || 1234;
var bodyParser = require('body-parser');
var jsonparser = require('json-parser');
//var mongoose = require('mongoose');


//mongoose.connect('mongodb://user_1234:user1234@ds163738.mlab.com:63738/queueless');

// var routes = require('./Routes/route');
// var routes = require('./Routes/route(main)');
// app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({extended:true})); 
// app.use('/api', routes)

app.use(express.static(__dirname + '/public'));
app.use(function(req, res) {
   res.sendFile(__dirname + '/public/index.html');
});


app.listen(PORT,function(err){
	if(err){
		console.log(err);
	}else{
		console.log('Server started at : '+PORT);
	}
});
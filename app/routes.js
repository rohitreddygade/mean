
var  Nerd = require('./models/nerd');

module.exports = function(app){


	// API route
	app.get('/api/nerds', function(){
	
		 Nerd.find(function(err,nerds){
		 	if(err)
		 		res.send(err);
		 	res.send(nerds);
		 };
	
	});
	
	// Index Route
	app.get('*',function(req,res){

		res.sendfile('./public/views/index.html');
	
	});
}
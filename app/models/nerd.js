var mongoose = require("mongoose");



module.exports = mongoose.model('Nerd',{
	name : {type : string , default : ''}
});
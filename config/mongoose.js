var mongoose = {
	umongoose:"hadesmm",
	pmongoose:"superfurie89",
	connect:function(umongoose, pmongoose){
		return (`mongodb://${ umongoose }:${ pmongoose }@ds015710.mlab.com:15710/christina`);
	}
}

module.exports = mongoose;
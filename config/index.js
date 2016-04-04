var mong = require('./mongoose');

var config = {
	mongoose: mong.connect(mong.umongoose, mong.pmongoose)
}

module.exports = config

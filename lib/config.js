var path = require('path');
var debug = require('debug')('node-cfg');
var filename = process.env.NODE_ENV;

if ( !filename ) {
	console.error('***ERROR*** you have to define the environment variable NODE_ENV to specify the running environment: "NODE_ENV=local node app"');
	return process.exit(1);
}

var config = {};

function loadConfigs (filenames) {

	var i, len, configPath, configJson;
	for (i = 0, len = filenames.length; i < len; i++) {
		configPath = path.join(process.cwd(), '/config/' + filenames[i] + '.json');
		configJson = require(configPath);
		addValuesToConfig(configJson)
		debug('Configuration loaded: "' + configPath + '"');
	}
}

function addValuesToConfig (newConfig) {
	for (var prop in newConfig) {
		config[prop] = newConfig[prop];
	}
}

loadConfigs(['default', filename]);

module.exports = config;

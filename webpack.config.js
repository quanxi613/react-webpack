var path = require('path');

module.exports = {
    entry: {
    	helloworld: [
	    	'webpack/hot/dev-server',
	    	'webpack-dev-server/client?http://localhost:8080',
	    	path.resolve(__dirname, 'app/main.js')
    	],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
	    loaders: [{
		    test: /\.jsx?$/, 
		    exclude: /node_modules/, 
		    loader: 'babel',
		    query: {
		        presets:['es2015','stage-0','react']
		    }
	    }]
	}
};
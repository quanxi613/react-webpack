var path = require('path');

module.exports = {
	//指定项目打包的入口文件，每个键值对就是一个入口文件
    entry: {
    	helloworld: [
	    	'webpack/hot/dev-server',
	    	'webpack-dev-server/client?http://localhost:8080',
	    	path.resolve(__dirname, 'app/main.js')
    	]
    },
    //打包后输出的文件位置，path为输出的文件夹，filename定义打包后的结果文件名
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    //用来指定模块后缀，引入模块时无需写后缀，比如Hello.jsx，引入时可直接require(./Hello)
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    //定义处理模块的逻辑，test表示匹配相应文件的正则，一旦匹配，便会用相应的loader进行处理
    module: {
	    loaders: [{
		    test: /\.jsx?$/, 
		    exclude: /node_modules/, 
		    loader: 'babel',
		    query: {
		        presets:['es2015','stage-0','react']
			}
		}, {
		    test: /\.less$/,
		    loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
	    }]
	}
};
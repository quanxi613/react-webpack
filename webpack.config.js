var webpack = require('webpack');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var path = require('path');

module.exports = {
    entry: {
        helloworld: [
            
            path.resolve(__dirname, 'app/main.js')
        ]
    },
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'babel-loader!jsx-loader?harmony'
        }, {
            test: /\.js?$/,
            loaders: ['react-hot', 'babel'],
            include: [path.join(__dirname, 'scripts')]
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
        }, { 
            test: /\.(png|jpg)$/, 
            loader: 'url-loader?limit=8192'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
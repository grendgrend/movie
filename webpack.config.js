webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry : './client/index.jsx',
    output : {
        path : './public',
        filename : 'app.js'
    },
    //devtool: 'eval',
    watch : true,
    watchOptions : {
        aggregateTimeout : 100
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module : {
        loaders : [{
            test : /\.jsx$/,
            loader : 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?resolve-url!sass-loader?sourceMap')
            },
        ],

    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ]
};
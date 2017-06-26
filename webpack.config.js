const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: [
            'react-hot-loader/patch',
            './src/index.js'
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin() // Enable HMR
    ],

    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/'
    },

    devServer: {
        hot: true, // Tell the dev-server we're using HMR
        contentBase: __dirname,
        publicPath: '/'
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },

    devtool: 'source-map'
};

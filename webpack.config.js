var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpackEntries = [
    './src/index.jsx',
    './src/styles/style.less'
];

if(process.env.NODE_ENV == "dev"){
    var appConfig = require('./appConfig')
    webpackEntries.push('webpack-dev-server/client?' + appConfig.serverUrl);
    webpackEntries.push('webpack/hot/only-dev-server');
}



module.exports = {
    entry: webpackEntries,
    devtool: 'eval',
    module: {
        loaders: [
            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel'},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
            {test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')},
            {test: /\.png$/, loader: 'url-loader?prefix=img/&limit=5000'},
            {test: /\.jpg$/, loader: 'url-loader?prefix=img/&limit=5000'},
            {test: /\.gif$/, loader: 'url-loader?prefix=img/&limit=5000'},
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('bundle.css', {allChunks: true})
    ]
};
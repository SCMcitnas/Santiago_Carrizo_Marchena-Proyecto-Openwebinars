const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = options => {[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
        title: options.pageTitle
    })
]}
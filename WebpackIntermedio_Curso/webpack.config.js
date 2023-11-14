const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    //Input
    entry: path.resolve(__dirname, 'src', 'index.js'),

    //Output
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    //Crear alias(objeto)
    resolve: {
        //alias, extensiones, modules

        alias: {
            //Marcamos toda su ruta
            config: path.resolve(__dirname, 'src', ' config', 'app', 'index.js')
        },

        extensions: ['.js', '.json', '.jsx'],

        modules: ['node_modules']
    }
}
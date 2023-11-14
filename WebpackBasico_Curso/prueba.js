//Definir modulos
//AMD
define('modulo', [
    'dep1',
    'dep2'
], (dep1,dep2)=>{
    return function() {}
});

//CommonJS
exports.calc = (a, b) => a+b;
const modulo = require('path/modulo');

//ES2015
export const calc = (a, b) => a+b;
import {calc} from 'path/modulo';

//Configuracion
const webpack = require('webpack');
module.exports = {
    entry: {
        app: './entry.js',
    },

    output: {
        path: __dirname,
        filename: 'prueba.js',
    },

    module: {
        rules: [
            {
                test: '/\.js$/',
                use: 'babel-loader',
                exclude: '/node_modules/',
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({}),
    ],
};

//Loader generico
module.exports = {
    module: {
        rules: [
            {
                test: '/\.css$/',
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    {loader: 'sass-loader'}
                ]
            }
        ]
    }
};
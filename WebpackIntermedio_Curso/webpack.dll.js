const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        vendor: [
            'react',
            'react-dom'
        ]
    },

    output: {
        filename: '[name].dll.js',
        path: path.resolve(__dirname,'dist'),
        library: '[name]',
    },

    plugins: [
        new webpack.DllPlugin({
            name: '[name]',
            path: path.resolve(__dirname,'dist', '[name]-manifest.json')
        })
    ]
}
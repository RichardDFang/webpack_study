const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const rowLoader = require('./src/row-loader');

module.exports = {
    entry: {
        'index': './src/index-loader.js'
        // 'large-number': './src/index.js',
        // 'large-number.min': './src/index.js'
    },
    // output: {
    //     path: path.join(__dirname, 'dist'),
    //     filename: '[name].js',
    //     library: 'largeNumber',
    //     libraryTarget: 'umd',
    //     libraryExport: 'default'
    // },
    mode: 'none',
    module: {
        rules: [
            {test: /\.js$/, use: path.resolve('./src/row-loader')}
        ]
    }
    // optimization: {
    //     minimize: true,
    //     minimizer: [
    //         new TerserPlugin({
    //             include: /\.min\.js$/
    //         })
    //     ]
    // }
}
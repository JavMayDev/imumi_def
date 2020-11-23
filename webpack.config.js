const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // entry: ['@babel/polyfill', './src/index.js'],
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            // sass
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
}

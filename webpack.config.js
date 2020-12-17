const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssEstractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssEstractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|gif|jpg)$/,
                use: [
                    {
                        'loader': 'file-loader',
                        options: {
                            name: 'assets/[hash].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssEstractPlugin({
            filename: 'assets/[name].css',
        }),
    ]
}
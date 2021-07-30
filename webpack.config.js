const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main.js',
    },
    resolve: {
        extensions:['.js','.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'src/public/index.html')
        }),
        new ForkTsCheckerWebpackPlugin()
    ],
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, 'dist'),
    },
    devtool: 'source-map'
}

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    // devtool: 'source-map',
    output: {

        path: path.resolve(__dirname, 'dist'),
        filename : 'bundler.js'

    },
    module : {

        rules: [

            {

                test: /\.(js|jsx)$/,
                exclude: /node_module/,
                use: {

                    loader: "babel-loader"

                }   
            }

        ]

    },
    resolve: { extensions: ['.js','.jsx'] },
    plugins: [

        new HtmlWebPackPlugin({

            template: './src/index.html',
            filename: './index.html'

        })

    ]
};
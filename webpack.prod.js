<<<<<<< HEAD
const path = require('path');
const webpack = require('webpack');
// const json = require('./file.json'); //I added this one in 1-3-2019
const HtmlWebPackPlugin = require('html-webpack-plugin');
/*"webpack --config ./src/client/webpack.config.js" was in build section of package.json*/
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const scssLoader = require('./src/client/styles/resets.scss');


module.exports = {
    mode: 'production',
    entry: './src/client/index.js', // path.join(__dirname, './index.js');
    module: {
        rules: [
                {
                    test: '/\.js$/',
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.scss$/,
                    use: [ 'style-loader', 'css-loader', 'sass-loader' ]
                }
            ]
    
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: './src/client/views/index.html',
                filename: './index.html',
            }),
            new CleanWebpackPlugin({
                // Simulate the removal of files
                dry: true,
                // Write Logs to Console
                verbose: true,
                // Automatically remove all unused webpack assets on rebuild
                cleanStaleWebpackAssets: true,
                protectWebpackAssets: false
        })
        ]    
    // module: {
    //     loaders: [
    //         {
    //         test: /\.json$/,
    //         loader: 'json-loader'
    //         }
    //     ]
    // }
}
    


    

=======
const path = require('path');
const webpack = require('webpack');
// const json = require('./file.json'); //I added this one in 1-3-2019
const HtmlWebPackPlugin = require('html-webpack-plugin');
/*"webpack --config ./src/client/webpack.config.js" was in build section of package.json*/
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode: 'production',
    entry: './src/client/index.js', // path.join(__dirname, './index.js');
    module: {
        rules: [
                {
                    test: '/\.js$/',
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }
            ]
    
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: './src/client/views/index.html',
                filename: './index.html',
            }),
            new CleanWebpackPlugin({
                // Simulate the removal of files
                dry: true,
                // Write Logs to Console
                verbose: true,
                // Automatically remove all unused webpack assets on rebuild
                cleanStaleWebpackAssets: true,
                protectWebpackAssets: false
        })
        ]    
    // module: {
    //     loaders: [
    //         {
    //         test: /\.json$/,
    //         loader: 'json-loader'
    //         }
    //     ]
    // }
}
    


    

>>>>>>> d68c4f3d5393dfe830a4fa3bd2d88b80f0a1ae62

const webpack = require('webpack');
const path = require('path');

module.exports = (env) => {
    const isProduction = env === 'production';
    console.log('env', env);
    return {
        entry: './src/app.js',
        output: {
            filename: 'bundle.js',
            path: path.join(__dirname, 'public')
        },
        module: {
            rules: [{
                loader: ["babel-loader"],
                test: /\.js$/, //regualr expression
                exclude: /node_modules/,
            }, {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }]
        }, 
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }
}


const path = require('path');
const PATHS = {};
const HtmlWebpackPlugin = require('html-webpack-plugin');

PATHS.root = path.resolve(__dirname);
PATHS.src = path.join(PATHS.root, 'src');
PATHS.dist = path.join(PATHS.root, 'dist');

module.exports = {
    entry: [
        path.join(PATHS.src, 'index.jsx')
    ],

    devtool: 'source-map',

    output: {
        path: PATHS.dist,
        filename: 'bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(PATHS.src, 'index.html')
        })
    ],

    module: {
        rules: [
            // Transform .jsx files with the babel loader
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },

            // Transform .css files with the css and style loaders
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },

            // Transform .less files with the css, style, and less loaders
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]_[local]'
                        }
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            }
        ]
    }
};

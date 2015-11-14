var autoprefixer = require('autoprefixer');

module.exports = {
    context: __dirname + "/app",
    entry: "./app.js",
    postcss: [
        autoprefixer({
            browsers: ['last 2 version']
        })
    ],

    output: {
        filename: "app.js",
        path: __dirname + "/dist",
    },

    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: ['react-hot'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {presets: ['es2015', 'react'] }
            },
            {
                // ASSET LOADER
                // Reference: https://github.com/webpack/file-loader
                // Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
                // Rename the file using the asset hash
                // Pass along the updated reference to your code
                // You can add here any file extension you want to get copied to your output
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file'
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            },
            {
                test: /\.(css|scss)/,
                loaders: ['style', 'css', 'postcss', 'sass']
            }

        ],

    },
    entry: {
        javascript: "./app.js",
        html: "./index.html",
    },
}
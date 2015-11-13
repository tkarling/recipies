module.exports = {
    context: __dirname + "/app",
    entry: "./app.js",

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
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            }

        ],

    },
    entry: {
        javascript: "./app.js",
        html: "./index.html",
    },
}
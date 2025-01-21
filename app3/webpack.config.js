const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
const MF = require("mf-webpack4")

module.exports = {
    mode: 'development', // Change to 'production' for production builds
    entry: './src/main.js', // Entry point
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js', // Use chunk names to differentiate files
        publicPath: '/'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'), // 'static' is replaced by 'contentBase'
        hot: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.vue'],
    },
    plugins: [
        new VueLoaderPlugin(),
        /*
        new MF({
            name: "app3",
            filename: "remoteEntry.js",
            remotes: {
                "app4": "app4@http://localhost:8081/remoteEntry.js"
            },
            exposes: {
                "./App": "./src/App"
            }
        })
        */
    ],
};

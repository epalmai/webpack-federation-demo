const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    mode: 'development', // Change to 'production' for production builds
    entry: './src/main.js', // Entry point
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        static: path.resolve(__dirname, 'public'),
        hot: true,
        port: 8080,
        headers: {
            'Access-Control-Allow-Origin': '*', // Allow cross-origin requests
        },
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
        new ModuleFederationPlugin({
            name: 'app',
            remotes: {
                app2: 'app2@http://localhost:8081/remoteEntry.js',
            }
        }),
    ],
};

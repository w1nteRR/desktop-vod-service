const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        mainFields: ["main", "module", "browser"],
    },
    entry: "./src/index.tsx",
    target: "electron-renderer",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader']
            }
        ],
    },
    devServer: {
        contentBase: '../bundle',
        hot: true,
        port: 3000,
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8000'
            },
            '/static': {
                target: 'http://localhost:8000'
            }
        }
    },
    output: {
        path: path.resolve(__dirname, "bundle"),
        filename: "a.js",
    },
    plugins: [new HtmlWebpackPlugin()],
};
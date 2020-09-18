const path = require('path')

module.exports = {
    devtool: 'source-map',
    target: "electron-main",
    entry: "./electron/main/index.ts",
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            { 
                test: /\.node$/, 
                use: {
                    loader: 'node-loader'
                } 
            }
        ]
    },
    node: {
        __dirname: false
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    output: {
        path: path.resolve(__dirname, "bundle"),
        filename: "[name].js"
    },
}
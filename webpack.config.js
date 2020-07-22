const path = require('path')

module.exports = {
    watch: true,
    devtool: 'source-map',
    target: "electron-main",
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "bundle")
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },  
        ]
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    devServer: {
        contentBase: './bundle',
        hot: true,
        port: 3000
    }
}

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
    mode:"development",
    entry: "./src/index.js",
    devServer: {
        port:3000
    },
    output:{
       path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        // new ModuleFederationPlugin({
        //     name: "host",
        //     remotes: {
        //         remote: "remote@http://localhost:3001/remoteEntry.js"
        //     }
        // })
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    }
}
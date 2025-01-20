const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode:"development",
    entry: "./src/index.js",
    devServer: {
        port:3000
    },
    output:{
        
    }
}
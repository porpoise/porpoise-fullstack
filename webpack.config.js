const path = require("path");

module.exports = {
    entry: {
        "bundle": path.join(__dirname, "app.js"),
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js"],
    },
    devtool: "source-map"
};
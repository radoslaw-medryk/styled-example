const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => {
    return {
        mode: "development",
        entry: "./src/index.tsx",
        output: {
            filename: "[name].js",
            path: __dirname + "/dist"
        },
        
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"]
        },

        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: [
                        "babel-loader"
                    ]
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: "src/index.html"
            })
        ]
    };
};

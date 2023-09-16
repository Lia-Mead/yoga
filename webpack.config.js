const webpack = require("webpack");

module.exports = {
    // ... other Webpack config options ...
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
        }),
    ],
    stats: {
        warningsFilter: [/source-map-loader/],
    },
    entry: "./src/index.js", // Your entry point
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        mode: "production",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader", // Example: Using Babel for JavaScript/JSX files
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192, // Convert images < 8kb to base64 strings (adjust as needed)
                            fallback: "file-loader", // Use file-loader for larger images
                            name: "[name].[ext]", // Output file name and extension
                            outputPath: "images", // Output directory for images (inside 'dist')
                        },
                    },
                ],
            },
        ],
    },
};

// webpack.config.js

// const path = require("path");

// module.exports = {
//     entry: "./src/index.js", // Your main entry file
//     output: {
//         filename: "bundle.js",
//         path: path.resolve(__dirname, "dist"), // Output directory
//     },
//     plugins: [
//         new webpack.DefinePlugin({
//             "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
//         }),
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: "babel-loader",
//                 },
//             },
//         ],
//     },
//     scripts: {
//         start: "webpack --mode development",
//         // ... other scripts ...
//     },
// };

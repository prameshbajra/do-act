const webpack = require("webpack");
const path = "path";

// process.env.NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
    entry: [
        "script-loader!jquery/dist/jquery.min.js",
        "script-loader!foundation-sites/dist/js/foundation.min.js",
        "./app/app.jsx"
    ],
    externals: {
        jquery: "jQuery"
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery"
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development")
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    resolve: {
        modules: [__dirname, "node_modules"],
        alias: {
            // Add key value pair for your imports ...
            TodoApp: "app/components/TodoApp.jsx",
            TodoList: "app/components/TodoList.jsx",
            TodoListItem: "app/components/TodoListItem.jsx",
            AddTodo: "app/components/AddTodo.jsx",
            TodoSearch: "app/components/TodoSearch.jsx",

            TodoApi: "app/apis/TodoApi.jsx",

            Firebase: "app/firebase/index.js",

            Actions: "app/actions/actions.jsx",
            Reducers: "app/reducers/reducers.jsx",
            ConfigureStore: "app/store/configureStore.jsx",

            ApplicationStyles: "app/styles/app.scss"
        },
        extensions: ["*", ".js", ".jsx"]
    },
    module: {
        rules: [{
            loader: "babel-loader",
            query: {
                presets: ["react", "env", "stage-0"]
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }]
    },
    devtool: process.env.NODE_ENV === "production" ? undefined : "cheap-module-eval-source-map"
}
const path = require('path');
const EsmWebpackPlugin = require('@purtuga/esm-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = (env, args) => ({
    resolve: { extensions: ['.ts', '.js'] },
    devtool: args.mode === 'development' ? 'source-map' : 'none',
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.ttf$/, use: ['file-loader'] },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    entry: { main: './main.ts' },
    output: {
        library: 'LIB',
        libraryTarget: 'var',
        path: path.join(__dirname, '..', 'wwwroot'),
        publicPath: '_content/MonacoRazor/',
        filename: '[name].js',
    },
    plugins: [
        new MonacoWebpackPlugin({
            // For some reason it seems to ignore this and bundle all the languages regardles
            // https://github.com/microsoft/monaco-editor-webpack-plugin/issues/125
            languages: ['javascript', 'csharp']
        }),
        new EsmWebpackPlugin({
            exclude: filename => filename !== 'main.js'
        }),
    ]
});

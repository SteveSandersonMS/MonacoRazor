const path = require('path');
const EsmWebpackPlugin = require('@purtuga/esm-webpack-plugin');

module.exports = (env, args) => ({
    resolve: { extensions: ['.ts', '.js'] },
    devtool: args.mode === 'development' ? 'source-map' : 'none',
    module: {
        rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    entry: { main: './main.ts' },
    output: {
        library: 'LIB',
        libraryTarget: 'var',
        path: path.join(__dirname, '..', 'wwwroot'),
        filename: '[name].js',
    },
    plugins: [
        new EsmWebpackPlugin()
    ]
});

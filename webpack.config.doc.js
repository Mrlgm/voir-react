const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, base, {
    mode: 'production',
    entry: {
        ...base.entry,
        example: './example.tsx'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "voir-react",
            template: "index.html"
        })
    ]
})
const path = require('path');

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    node: { global: true, fs: 'empty' },
    entry:  {
        index: './src/index.js'
    },
    module: {
        rules: [
            {
                // vue-loader config to load `.vue` files or single file components.
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles
                        css: ['vue-style-loader', {
                            loader: 'css-loader',
                        }],
                        js: [
                            'babel-loader',
                        ],
                    },
                    cacheBusting: true,
                },
            },
            {
                test: /\.svg$/,
                loader: 'vue-svg-loader', // `vue-svg` for webpack 1.x
            },
        ]
    },
    plugins: [
      new VueLoaderPlugin(),
    ],
    resolve: {
    	extensions: ['.js'],
    },
    output: {
        filename: './[name].js',
        path: path.resolve(__dirname, 'dist')
    }
};

const path = require('path');

module.exports = {
    mode: 'development',
    node: { global: true, fs: 'empty' },
    entry:  {
        index: './src/index.js'
    },
    resolve: {
    	extensions: ['.js'],
    },
    output: {
        filename: './[name].js',
        path: path.resolve(__dirname, 'dist')
    }
};

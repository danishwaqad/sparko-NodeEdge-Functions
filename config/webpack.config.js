const path = require('path');

module.exports = {
    entry: '../src/build.js', // Entry point of your Node.js API
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js' // Output filename
    },
    // Define rules for transpiling and bundling your code
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Example: Use Babel loader to transpile your code
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};

const path = require('path');

// Default values
// 
// module.exports = {
//     entry: './src/index.js',
//     output: {
//         filename: 'main.js',
//         path: path.resolve(__dirname, 'dist'),
//     }
// }

module.exports = {
    entry: {
        first: './src/one.js',
        second: './src/two.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
}
const {runLoaders} = require('loader-runner');
const fs = require('fs');
const path = require('path');

runLoaders({
    resource: path.join(__dirname, './src/index-loader.js'),
    loaders: [
        {
            loader: path.join(__dirname, './src/row-loader.js'),
            options: {
                name: 'test'
            }
        }
    ],
    context: {
        minimize: true
    },
    readResource: fs.readFile.bind(fs)
}, (err, result) => {
    if (err) {
        console.log(err)
    } else {
        console.log(result)
    }
})
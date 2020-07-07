const loadUtils = require('loader-utils');
const fs = require('fs');
const path = require('path');

module.exports = function(source) {
    const {name} = loadUtils.getOptions(this);
    const callback = this.async();
    const json = JSON.stringify(source).replace(/\u2028/g, '\\2028').replace(/\u2029/g, '\\2029');
    // return `export default ${json}`;
    // this.callback(null, json)
    fs.readFile(path.join(__dirname, './async.txt'), 'utf-8', (err, result) => {
        if (err) {
            callback(err, '')
        }
        callback(null, result)
    })
}
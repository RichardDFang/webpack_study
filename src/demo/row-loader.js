const loadUtils = require('loader-utils');
const fs = require('fs');
const path = require('path');

module.exports = function(source) {
    // console.log(loadUtils)
    // console.log(this)
    if (typeof source === 'string') {
        let url = loadUtils.interpolateName(this, '[name].[ext]', source);
        this.emitFile(url, source)
    }
    
    return source
}
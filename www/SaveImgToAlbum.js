var exec = require('cordova/exec');

exports.saveImgMothed = function (arg0, success, error) {
    exec(success, error, 'SaveImgToAlbum', 'saveImgMothed', [arg0]);
};


exports.min = function min (array) {
    Array.isArray(array)? array = array : array = [];
    return array.length <=0 ? 0 : array.reduce((val, current) => Math.min(val, current));
};

exports.max = function max (array) {
    Array.isArray(array)? array = array : array = [];
    return array.length <=0 ? 0 : array.reduce((val, current) => Math.max(val, current));
};

exports.avg = function avg (array) {
    Array.isArray(array)? array = array : array = [];
    let result;
    if (array.length <= 0) {
        result = 0;
    } else {
        result = (array.reduce((val, current) => val + current))/array.length;
    }
    return result
};

function reducer(accum, prop) {
    var pieces = prop.split('[');
    if (pieces.length > 1) {
        return accum && accum[pieces[0]] && accum[pieces[0]][parseInt(pieces[1])];
    }
    return accum && accum[prop];
}

function getPropSafe(object, path) {
    if (!object || !path) { return; }
    return path.split('.').reduce(reducer, object);
}

module.exports = getPropSafe;

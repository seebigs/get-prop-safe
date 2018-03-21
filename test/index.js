const getPropSafe = require('../index');

let passing = true;
let output = [];

function assert(a, b, desc) {
    if (a !== b) {
        passing = false;
        output.push('Failure: ' + desc + '\n    expected ' + a + ' to be ' + b);
    }
}

const obj = {
    one: {
        two: {
            three: 3,
        },
        four: [
            {
                five: 5,
            },
            {
                six: [6, 7, 8],
            },
        ],
    },
};

assert(getPropSafe(obj, 'one.two.three'), 3, 'gets a property when one is set');
assert(getPropSafe(obj, 'one.four[1].six[0]'), 6, 'even works with arrays');
assert(getPropSafe(obj, 'one.not.found'), void 0, 'fails gracefully when the path doesn\'t exist');
assert(getPropSafe(undefined, 'one.two.three'), void 0, 'fails gracefully when the object doesnt exist');

console.log();
if (passing) {
    console.log('All tests passed.');
} else {
    console.log(output.join('\n'));
    process.exit(1);
}

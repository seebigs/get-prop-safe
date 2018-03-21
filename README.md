# get-prop-safe
Safely get nested properties on an object if they exist

## Install
```
$ npm install get-prop-safe
```

## Use
```js
var getPropSafe = require('get-prop-safe');

var obj = {
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

getPropSafe(obj, 'one.two.three'); // 3
getPropSafe(obj, 'one.four[1].six[0]'); // 6
getPropSafe(obj, 'one.not.found'); // undefined
getPropSafe(undefined, 'one.two.three'); // undefined
```

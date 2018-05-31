# altered-base

Convert a number in string representation to another base.  There is no limit to the size of the number and no loss of precision.  The valid range for bases is limited only by the available character set, defined in consts.alphabet.

Positive integers only.

## install

```
npm i altered-base
```

## usage

```javascript
const ab = require('altered-base');
const say = console.log;

let num = ab.convert('abcdef', 16, 10);
say(num); // 11259375
```
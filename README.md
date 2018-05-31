# altered-base

Convert a number in string representation to another base.  There is no limit to the size of the number and no loss of precision.  The valid range for bases is limited by the available character set, defined in consts.alphabet.

Positive integers only.

## usage

```javascript
let num = convert('abcdef', 16, 10);
```
# <img src="./logo.png" width="200" /> altered-base

Convert a number in string representation to another base.  There is no limit to the size of the number and no loss of precision.  The valid range for bases is limited only by the available character set, which can be extended to any size.

## install

```
npm i altered-base
```

## usage

```javascript
const ab = require('altered-base');
const say = console.log;

// Parameters
let numberString = '4f9414295fef9242d8a49762e72af14';    // {string} a positive integer in any base
let fromBase = 16;                                       // {number} the current base of the integer string
let toBase = 36;                                         // {number} the base to which the string will be converted

let convertedString = ab.convert(numberString, fromBase, toBase);

say(convertedString);                                    // {string} the integer expressed in the requested base
```

## details

The function `convert` only accepts positive integer strings and is case insensitive by default.  If necessary, case sensitivity can be enabled by setting `consts.caseSensitive` to `true`.

The default alphabet [0-9a-z] allows for conversions up to and including base 36.  However, the alphabet can be customized arbitrarily, in which case the maximum base will automatically become the new alphabet length.  This can be accomplished by editing the array `consts.alphabet` that defines the current alphabet.  Each element of `consts.alphabet` should be a single character; the index of each element is taken to be the character's numerical value.

For example, the following custom alphabet allows for conversions up to and including base 96.

```javascript
ab.consts.caseSensitive = true;

let customAlphabet = Array.from('0123456789abcdefghijklmnopqrstuvwxyz)!@#$%^&*(ABCDEFGHIJKLMNOPQRSTUVWXYZ-=[]\\;\',./_+{}|:"<>?`~ \n');
ab.consts.alphabet = customAlphabet;

say(ab.convert('49[/6+m%\\oWlI3UrtUIVF]l)Q-iDA^R&)l,xUyS:\\*huuQ11_T:p+MlsS`Hsu.0`87?3.,*ig1\'V<`En', 94, customAlphabet.length));
```



## license

MIT License

Copyright (c) 2018 Kenneth Sedgwick

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 
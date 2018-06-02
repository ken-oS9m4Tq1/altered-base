// Convert a number string of unlimited size from one base to another with infinite precision.
// Note: positive integers only.

let consts = {
  alphabet: [ 
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z' 
  ]
}

function convert(str, fromBase, toBase) {
  if (fromBase < 2 || consts.alphabet.length < fromBase) throw new Error('base out of range');
  if (toBase < 2 || consts.alphabet.length < toBase) throw new Error('base out of range');

  let arr = [0];
  for (let i = 0; i < str.length; i++) {
    let char = fromCharCode(str.charCodeAt(i), fromBase, toBase);
    mltNum(arr, fromBase);
    addArr(arr, char);
    normalize(arr, toBase);
  }
  return toString(arr);
}

/* Determine the numerical value of a character and express it as an integer array in a given base.
**
** @param {number} code - The UTF16 code unit of the character.
** @param {number} fromBase - The base of the character (used to check for invalid characters).
** @param {number} toBase - The desired base of the integer array.
** @return {number[]} - The integer array.
*/
function fromCharCode(code, fromBase, toBase) {
  let char = -1;
  for (let i = 0; i < fromBase; i++) {
    if (code == consts.alphabet[i].charCodeAt(0)) {
      char = i;
      break;
    }
  }

  if (char < 0) throw new Error('invalid character detected');

  return fromNumber(char, toBase);
}

/* Express a number as an integer array in a given base.
** The number must be a nonzero integer.
**
** @param {number} num - A positive integer in number format.
** @param {number} base - The desired base of the integer array.
** @return {number[]} - The integer array.
*/
function fromNumber(num, base) {
  if (num == 0) return [0];

  let arr = [];
  while (num > 0) {
    arr.push(num % base);
    num = Math.floor(num / base);
  }
  return arr;
}

/* Multiply every element of an array number by an integer.
**
*/
function mltNum(arr, num) {
  arr.forEach((singlet, i) => {
    arr[i] *= num; 
  });
}

/* Adds two numbers in array representation. 
** The first array is modified in place.
** 
*/
function addArr(arr1, arr2, shift = 0) {
  arr2.forEach((singlet, i) => {
    addNum(arr1, singlet, i + shift);
  });
}

/* Add a number to an array number at a specified index.
**
*/
function addNum(arr, num, index = 0) {
  if (arr[index] == undefined) arr[index] = 0;
  arr[index] += num;
}

/* Modify an array number so that no singlet exceeds the array number base.
** The value expressed by the array number remains unchanged.
**
*/
function normalize(arr, base) {
  for (let i = 0; i < arr.length; i++) {
    let singlet = arr[i];
    if (singlet >= base) {
      arr[i] = singlet % base;
      addNum(arr, Math.floor(singlet / base), i + 1);
    }
  }
}

/* Express a number array as a number string in the same base.
** The base of the integer array must be no greater than the length of consts.alphabet.
**
*/
function toString(arr) {
  arr.forEach((charIndex, i) => {
    arr[i] = consts.alphabet[charIndex].charCodeAt(0);
  });
  let str = String.fromCharCode(...arr.reverse());
  return str;
}






module.exports.convert = convert;
module.exports.consts = consts;

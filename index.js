// Code your solution here!

function printString(string) {
  console.log(string[0]);

  if (string.length > 1) {
    let mySubString = string.substring(1, string.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string.length < 2) {
    return string;
  } else {
    return reverseString(string.substring(1)) + string[0];
  }
}

function isPalindrome(string) {
  let length = string.length;

  if (length < 2) {
    return true;
  } else if (string[length - 1] === string[0]) {
    return isPalindrome(string.substring(1, length - 1));
  } else {
    return false;
  }
}

function addUpTo(myArray, index) {
  if (!!index) {
    return myArray[index] + addUpTo(myArray, --index);
  } else {
    return myArray[index];
  }
}

function maxOf(myArray) {
  if (myArray.length === 1) {
    return myArray[0];
  } else {
    return Math.max(myArray.pop(), maxOf(myArray));
  }
}

function includesNumber(myArray, myNumber) {
  if (!myArray.length) {
    return false;
  } else if (myArray[0] === myNumber) {
    return true;
  } else {
    return includesNumber(myArray.slice(1), myNumber);
  }
}

/*
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(positiveSum([1, 2, 3, 4, 5]));

/*
The function is not returning the correct values. Can you figure out why?
Example (Input --> Output ):
3 --> "Earth"
*/

function getPlanetName(id) {
    let name;
    switch (id) {
        case 1:
            name = 'Mercury';
            break;
        case 2:
            name = 'Venus';
            break;
        case 3:
            name = 'Earth';
            break;
        case 4:
            name = 'Mars';
            break;
        case 5:
            name = 'Jupiter';
            break;
        case 6:
            name = 'Saturn';
            break;
        case 7:
            name = 'Uranus';
            break;
        case 8:
            name = 'Neptune';
            break;
    }
    return name;
}
console.log(getPlanetName(2));
/*
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
Array can contain numbers or strings. X can be either.
Return true if the array contains the value, false if not.
*/
function check(a, x) {
    return a.includes(x)
}
console.log(check([66, 101], 66));

/*
Given a year, return the century it is in. Example: 1705 --> 18 */
function century(year) {
    return Math.ceil(year / 100);
}
/*
In this simple assignment you are given a number and have to make it negative. Example: makeNegative(1); // return -1 */
function makeNegative(num) {
    return num <= 0 ? num : -num;
}
/*
Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
For example, if this array were passed as an argument:

["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
*/
function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return gooseFilter.pop(geese);
    // or other solution:
};

function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    // sarasas kuriame kaupsime visas leistinas reiksmes
    const rez = [];

    /*
    einame per gauta sarasa (birds)
        paimame birds sarase esanti nari (bird)
        reikia palyginti ar bird yra geese sarase
        reikia eiti per geese sarasa
            paimti geese nari
            jeigu, geese narys sutampa su bird reiksme, tai ji yra neleistina / neitrakiama i rez sarasa
            priesingu atveju - bird itraukiame i rez sarasa
    */

    for (let b = 0; b < birds.length; b++) {
        const bird = birds[b];

        let yraSarase = false;
        for (let g = 0; g < geese.length; g++) {
            const goose = geese[g];
            if (goose === bird) {
                yraSarase = true;
                break;
            }
        }

        if (!yraSarase) {
            rez.push(bird);
        }
    }

    return rez;
}
/*
Create a function that takes 2 nonnegative integers in form of a string as an input, and outputs the sum (also as a string):
Example: (Input1, Input2 -->Output): "4",  "5" --> "9"
*/
function sumStr(a, b) {
    let first = parseInt(a);
    let second = parseInt(b);
    if (isNaN(first)) {
        first = 0;
    }
    if (isNaN(second)) {
        second = 0;
    }
    return "" + (first + second);
}
// or
function sumStr(a, b) {
    return String(Number(a) + Number(b));
}
/*
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
*/
var stringToNumber = function (str) {
    // put your code here
    return Number(str);
}
//   or
var stringToNumber = function (str) {
    return +str;
}
//   or
var stringToNumber = function (str) {
    return parseInt(str);
}

/*
It's a well known fact that anything Chuck Norris wants, he gets. As a result Chuck very rarely has to use the word false.

It is a less well known fact that if something is true, and Chuck doesn't want it to be, Chuck can scare the truth with his massive biceps, and it automatically becomes false.

Your task is to be more like Chuck (ha! good luck!). You must return false without ever actually using the word false...
*/

function ifChuckSaysSo() {
    return !true;

    // Very simple, given a number, find its opposite.
    function opposite(number) {
        //your code here
        return -number;
    }

    /*
  Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
    */
    function arrayMadness(a, b) {
        let firstArray = 0
        let secondArray = 0
        for (let i = 0; i < a.length; i++) {
            firstArray += a[i] ** 2
        }

        for (let i = 0; i < b.length; i++) {
            secondArray += b[i] ** 3
        }

        return firstArray > secondArray
    }
    /*
    There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.
    
    Your task is to change the letters with diacritics:
    
    ą -> a,
    ć -> c,
    ę -> e,
    ł -> l,
    ń -> n,
    ó -> o,
    ś -> s,
    ź -> z,
    ż -> z
    */
    function correctPolishLetters(string) {
        return string
            .replace(/ł/g, 'l')
            .replace(/ą/g, 'a')
            .replace(/ć/g, 'c')
            .replace(/ę/g, 'e')
            .replace(/ń/g, 'n')
            .replace(/ó/g, 'o')
            .replace(/ś/g, 's')
            .replace(/ź/g, 'z')
            .replace(/ż/g, 'z')
    }

    /*
    All Star Code Challenge #18
  
  Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
  
  If no occurrences can be found, a count of 0 should be returned.
  
  ("Hello", "o")  ==>  1
  ("Hello", "l")  ==>  2
  ("", "z")       ==>  0*/
    function strCount(str, letter) {
        return str.split(letter).length - 1
    }
    //   Code as fast as you can! You need to double the integer and return it.
    function doubleInteger(i) {

        // i will be an integer. Double it and return it.
        return i * 2;
    }
    /*In this Kata we are passing a number (n) into a function.
  
  Your code will determine if the number passed is even (or not).
  
  The function needs to return either a true or false.
  
  Numbers may be positive or negative, integers or floats.
  */
    function testEven(n) {
        if (n % 2 === 0) {
            return true;
        }
        else return false;
    }
    /*
    Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
   
   For example:
   
   summation(2) -> 3
   1 + 2
   
   summation(8) -> 36
   1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
   */

    var summation = function (num) {
        let sum = 0
        for (let i = 0; i <= num; i++) {
            sum += i
        }
        return sum
    }
    console.log(summation(1));

    /*
    In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
  
  Example:
  
  highAndLow("1 2 3 4 5");  // return "5 1"
  highAndLow("1 2 -3 4 5"); // return "5 -3"
  highAndLow("1 9 3 4 -5"); // return "9 -5"
  */
    function highAndLow(numbers) {
        return Math.max(...numbers.split(' ')) + ' ' + Math.min(...numbers.split(' '));
    }

    /*
    Simple, given a string of words, return the length of the shortest word(s).
  
  String will never be empty and you do not need to account for different data types.
    */
    function findShort(s) {
        var arr = s.split(' ');
        var smallest = arr[0];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].length < smallest.length) {
                smallest = arr[i];
            }
        }
        return smallest.length;
    }

    /*
        Complete the solution so that it reverses the string passed into it.
        'world'  =>  'dlrow'*/

    function solution(str) {
        let splitString = str.split("");
        let reverseArray = splitString.reverse();
        let joinArray = reverseArray.join("");
        return joinArray;
    }
    // // greitesnis variantas:
    // function solution(str) {
    //     return str.split('').reverse().join('');
    // }

    /*
       Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
    
    Example:
    
    ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
    
    */
    function removeEveryOther(arr) {
        let newArr = [];
        for (i = 0; i < arr.length; i += 2) {
            newArr.push(arr[i])
        }
        return newArr;
    }

/*
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
*/

const rps = (p1, p2) => {
    if(p1 === p2)
    return 'Draw!';
    if(p1 === 'scissors' && p2 === 'paper' || p1 === 'paper' && p2 === 'rock' || p1 === 'rock' && p2 === 'scissors' ) {
      return 'Player 1 won!';
  } else {
    return 'Player 2 won!';
  }
  };
  
  /*
  Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/
// complete the function
function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  
  }
/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/
function countPositivesSumNegatives(input) {
    if (input === null || input.length < 1) {
        return [];
    }
    var array = [0, 0];

    for(var i = 0; i < input.length; i++) {
        if(input[i] <= 0) {
            array[1] += input[i];
      } else {
            array[0] += 1;
      }
    }
    return array;
}



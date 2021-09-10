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


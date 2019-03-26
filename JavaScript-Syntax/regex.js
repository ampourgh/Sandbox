let testString = "My test string";
let testRegex = /string/;
console.log(testRegex.test(testString)); // test


const caseInsensitiveRegex = /ignore case/i;
const testString2 = 'We use the i flag to iGnOrE CasE';
console.log(caseInsensitiveRegex.test(testString2)); // true


const testString3 = "Repeat repeat rePeAT";
const regexWithAllMatches = /Repeat/gi;
console.log(testString3.match(regexWithAllMatches));


const regexWithWildcard = /.at/gi;
const testString4 = "cat BAT cupcake patroclus fAT mat dog";
const allMatchingWords = testString4.match(regexWithWildcard); // ["cat", "BAT", "fAT", "mat"]
console.log(allMatchingWords);


const regexWithCharRange = /[a-e]at/,
      catString = "cat",
      batString = "bat",
      fatString = "fat";

console.log(regexWithCharRange.test(catString)); // true
console.log(regexWithCharRange.test(batString)); // true
console.log(regexWithCharRange.test(fatString)); // false


const regexWithLetterAndNumberRange = /[a-z0-9]/ig;
const testString5 = "Emma19382";
console.log(testString5.match(regexWithLetterAndNumberRange)); // true


const oneOrMoreAsRegex = /a+/gi;
const oneOrMoreSsRegex = /s+/gi;
const cityInFlorida = "Tallahassee";

console.log(cityInFlorida.match(oneOrMoreAsRegex)); // ['a', 'a', 'a'];
console.log(cityInFlorida.match(oneOrMoreSsRegex)); // ['ss'];


const zeroOrMoreOsRegex = /hi*/gi;
const normalHi = "hi";
const happyHi = "hiiiiii";
const twoHis = "hiihiihiii";
const bye = "bye";

console.log(normalHi.match(zeroOrMoreOsRegex)); // ["hi"]
console.log(happyHi.match(zeroOrMoreOsRegex)); // ["hiiiiii"]
console.log(twoHis.match(zeroOrMoreOsRegex)); // ["hii", "hii"]
console.log(bye.match(zeroOrMoreOsRegex)); // null


const testString6 = "catastrophe";
const greedyRexex = /c[a-z]*t/gi;
const lazyRegex = /c[a-z]*?t/gi;

console.log(testString6.match(greedyRexex)); // ["catast"]
console.log(testString6.match(lazyRegex)); // ["cat"]


const emmaAtFrontOfString = "Emma likes cats a lot.";
const emmaNotAtFrontOfString = "The cats Emma likes are fluffy.";
const startingStringRegex = /^Emma/;

console.log(startingStringRegex.test(emmaAtFrontOfString)); // true
console.log(startingStringRegex.test(emmaNotAtFrontOfString)); // false


const emmaAtBackOfString2 = "The cats do not like Emma";
const emmaNotAtBackOfString2 = "Emma loves the cats";
const startingStringRegex10 = /Emma$/;

console.log(startingStringRegex10.test(emmaAtBackOfString2)); // true
console.log(startingStringRegex10.test(emmaNotAtBackOfString2)); // false

// ------


const longHand = /[A-Za-z0-9_]+/;
const shortHand = /\w+/;
const numbers = "42";
const myFavoriteColor = "magenta";

longHand.test(numbers); // true
shortHand.test(numbers); // true
longHand.test(myFavoriteColor); // true
shortHand.test(myFavoriteColor); // true


const noAlphaNumericCharRegex = /\W/gi;
const weirdCharacters = "!_$!!";
const alphaNumericCharacters = "ab283AD";

noAlphaNumericCharRegex.test(weirdCharacters); // true
noAlphaNumericCharRegex.test(alphaNumericCharacters); // false


const digitsRegex = /\d/g;
const stringWithDigits = "My cat eats $20.00 worth of food a week.";

stringWithDigits.match(digitsRegex); // ["2", "0", "0", "0"]


const nonDigitsRegex = /\D/g;
const stringWithLetters = "101 degrees";

stringWithLetters.match(nonDigitsRegex); // [" ", "d", "e", "g", "r", "e", "e", "s"]

/*
const sentenceWithWhitespace = "I like cats!"
var spaceRegex = /\s/g;
whiteSpace.match(sentenceWithWhitespace); // [" ", " "]


const sentenceWithWhitespace2 = "C a t"
const nonWhiteSpaceRegex2 = /\S/g;
sentenceWithWhitespace2.match(nonWhiteSpaceRegex2); // ["C", "a", "t"]
*/

const regularHi = "hi";
const mediocreHi = "hiii";
const superExcitedHey = "heeeeyyyyy!!!";
const excitedRegex = /hi{1,4}/;

excitedRegex.test(regularHi); // true
excitedRegex.test(mediocreHi); // true
excitedRegex.test(superExcitedHey); //false


const regularHi2 = "hi";
const mediocreHi2 = "hiii";
const superExcitedHey2 = "heeeeyyyyy!!!";
const excitedRegex2 = /hi{2,}/;

excitedRegex2.test(regularHi2); // false
excitedRegex2.test(mediocreHi2); // true
excitedRegex2.test(superExcitedHey2); //false


const regularHi3 = "hi";
const bestHi3 = "hii";
const mediocreHi3 = "hiii";
const excitedRegex3 = /hi{2}/;

excitedRegex3.test(regularHi3); // false
excitedRegex3.test(bestHi3); // true
excitedRegex3.test(mediocreHi3); //false


const britishSpelling = "colour";
const americanSpelling = "Color";
const languageRegex = /colou?r/i;

languageRegex.test(britishSpelling); // true
languageRegex.test(americanSpelling); // true

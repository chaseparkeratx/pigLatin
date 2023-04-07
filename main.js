'use strict';
// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// const words = [
//   simpleArray: 'car', 'dog'
//   complexArray: 'create', 'valley'
//   vowelArray: 'egg', 'emission'
// ]
  // const lowTrimString = {'HeLlO ', ' RoCkEt'}
  let pigLatin = function(word) {
    let oldWord = word.split('');
    let vowels = ['a','e','i','o','u'];
    let newWord = '';
    for(let i = 0; i < vowels.length-1; i++) {
        for(let y = 0; y < word.length-1; y++) {
            if(word[y] === vowels[i]) {
                for(let x = y; x < word.length; x++){
                    newWord = newWord + word[x];
                }
                for(let n = 0; n < y; n++){ 
                    newWord = newWord + word[n];
                }
                return newWord + "ay";
            }       
        }
    }
}
// const pigLatin = (word) => {
//   if(words[0] === 'a','e','i','o','u') {
//     return words + 'yay'
//   }
// }

//   for (let i = 0; i < word.length; i++)
//   console.log(word[i])
// }

// pigLatin()

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
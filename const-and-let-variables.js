// var name = 'Jane';
// var title = 'Software Engineer';
// var hourlyWage = 40;

//ES6
const name = 'Jane';
let title = 'Software Engineer';
let hourlyWage = 40;

//some time late

title = 'Senior Software Engineer';
hourlyWage = 60;

//Count the number of vowels in a string

function countVowels(target) {
    const characters = ['a', 'e', 'i', 'o', 'u'];
    let number = 0;

    for (let i = 0; i < target.length; i++) {
        if(characters.includes(target[i])) {
            number++;
        }
    }
    return number;
}

console.log(countVowels('abcdefghelloto'));

//Exercise - A Const Exercise of Letting Variables Be Variables


//Exercise - Const/Let Refactoring

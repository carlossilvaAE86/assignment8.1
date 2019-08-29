// function isEven(num) {
//     if (num % 2 === 0) {
//         console.log("true");
//     } else {
//         console.log("false");
//     }
// }

// isEven(4);

// function factorial(x) {

//     if (x === 0) {
//         return 1;
//     }
//     return x * factorial(x - 1);

// }
// console.log(factorial(6));

function kabobToSnake(str) {
    var newstr = str.replace(/-/g, "_");
    console.log(newstr);
}

var str = 'dogs-are-awesome';

kabobToSnake(str);
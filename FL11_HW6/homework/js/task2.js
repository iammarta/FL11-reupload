let a = +prompt('Please, enter the side a');
let b = +prompt('Please, enter the side b');
let c = +prompt('Please, enter the side c');

if (a + b < c || b + c < a || c + a < b || a<=0 || b<=0 || c<=0){
    console.log('triangle does not exist');
}else if (a === b && b === c && c === a){
    console.log('equivalent triangle');
}else if (a === b || b === c || c === a){
    console.log('isosceles triangle');
}else {
    console.log('normal triangle');
}

let a1 = +prompt('Please, enter a1');
let a2 = +prompt('Please, enter a2');
let b1 = +prompt('Please, enter b1');
let b2 = +prompt('Please, enter b2');
let c1 = +prompt('Please, enter c1');
let c2 = +prompt('Please, enter c2');

let division = 2;

let a = (a1 + a2)/division;
let b = (b1 + b2)/division;

if (a === c1 && b === c2){
    console.log(true);
}else {
    console.log(false);
}
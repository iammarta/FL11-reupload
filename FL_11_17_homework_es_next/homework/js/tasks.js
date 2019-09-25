/*task1*/
function findMax(arr){
return Math.max(...arr);
}
findMax([1,2,100,34,1994]);

/*task2*/
function coppiesArray(){
let arr = [1,2,3];
let cloneArr = [...arr];
return cloneArr;
}
coppiesArray();

/*task3*/
function addUniqueId(obj){
    let id = Symbol('id');
    obj[id] = 456;}
addUniqueId({name:123});

/*task4*/
function regroupObject(obj) {
    let {name: firstName, details: {id,age,university}} = obj;
    return {university: university,user: {age,firstName,id}}
}
regroupObject({name: 'Someone',details: {id: 1,age: 11,university: 'UNI'}});

/*task5*/
function UniqueElements(arr){
let set = new Set(arr);
return Array.from(set);
}
UniqueElements([1,1,2,2,3,45,6,6,7]);

/*task6*/
function phoneNumber(phone){
    return console.log(phone.slice(-4).padStart(phone.length, "*"));
}
phoneNumber('083736353672829399448');

/*task7*/
function required() {
    throw new Error('Missing property');
}

function add(a = required(), b = required()) {
    return a + b;
}

/*task8*/
function logNames() {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
        return response.json()
    }).then((json) => {
        let names = json.map((obj) => obj.name).sort();
        console.log(names);
    }).catch((error) => {
        console.log(error);
    })
}

/*task9*/
async function logNamesAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json();
        let names = json.map((obj) => obj.name).sort();
        console.log(names);
    } catch (error) {
        console.log(error);
    }
}
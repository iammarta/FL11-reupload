//TASK0
function getNumbers(num){
    let arr = [];
    for(let i=0; i<num.length;i++ ){
    if(!isNaN(num[i])){
    arr.push(num[i]);
    }
  }return arr;
    }
    
    getNumbers('23faw4');

    //TASK1
    function findTypes(...args){
        let obj = {};
        for(let i=0;i<args.length;i++){
        let type = typeof args[i]
        obj[type] = args[i];
        }return obj;
        }
        
        findTypes(null, 2, 'hello');

     //TASK2
function executeforEach(arr, func){
for(let i = 0; i<arr.length; i++){
func(arr[i]);
}
}
executeforEach([5, 6, 7, 8, 9], function(el){
});

 //TASK3
 function mapArray(arr, func){
    for(let i = 0; i<arr.length; i++){
        func(arr[i]);
        }
      }
    mapArray([5, 6, 7, 8, 9], function(el){
 return el+3 
});

     //TASK4
     function filterArray(arr, func){
        for(let i = 0; i<arr.length; i++){
            if(arr[i]>3){
        func(arr[i]);
        }
    }
        }
        filterArray([1, 2 ,5 , 6, 7, 8, 9], function(el){
 let newArr = []; console.log(newArr.push(el)) 
}); 

         //TASK5
         function formattedDate(date){
            const options = {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              };
            
              return `Date: ${date.toLocaleString('en-US', options)}`;
         }
         formattedDate(new Date('2019-01-27T01:10:00'));

         //TASK6
         function canConvertToDate(date) {
            const currentDate = new Date(date);
            return String(currentDate) !== 'Invalid Date';
          }
          console.log(canConvertToDate('2016-13-18T00:00:00'));
          console.log(canConvertToDate('2016-12-18T00:00:00'));

          //TASK7
          function daysBetween(date1, date2){
           let diffDays = Math.ceil((date2 - date1) / (1000 * 3600 * 24));
           return diffDays;
          }
          daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'));

          //TASK8
          const data = [
            {
              _id: '5b5e3168c6bf40f2c1235cd6',
              index: 0,
              birthday: '2016-03-18T00:00:00',
              eyeColor: 'green',
              name: 'Stein',
              favoriteFruit: 'apple'
            },
            {
              _id: '5b5e3168e328c0d72e4f27d8',
              index: 1,
              birthday: '1991-02-11T00:00:00',
              eyeColor: 'blue',
              name: 'Cortez',
              favoriteFruit: 'strawberry'
            },
            {
              _id: '5b5e3168cc79132b631c666a',
              index: 2,
              birthday: '1984-04-17T00:00:00',
              eyeColor: 'blue',
              name: 'Suzette',
              favoriteFruit: 'apple'
            },
            {
              _id: '5b5e31682093adcc6cd0dde5',
              index: 3,
              birthday: '1994-04-17T00:00:00',
              eyeColor: 'green',
              name: 'George',
              favoriteFruit: 'banana'
            }
          ];

          function getAmountOfAdultPeople(data) {
            const currentDate = new Date();
            const age = 18 * 365;
            const filterDate = data.map(item => item.birthday);
            const filterAge = filterDate.map(item => daysBetween(new Date(item), currentDate));
            const filter = filterArray(filterAge, function(el) {
              return el > age
            });
            
            return filter.length;
          }
          console.log(getAmountOfAdultPeople(data));

         //TASK9
function keys (obj) {
    let result = [];
    for (let key in obj) {
        result.push(key);
    }
    return result;
  }
  keys({keyOne: 1, keyTwo: 2, keyThree: 3});
  
  //TASK10  
  function values (obj) {
    let result = [];
    for (let key in obj) {
        result.push(obj[key]);
    }
    return result;
  }
  values({keyOne: 1, keyTwo: 2, keyThree: 3});


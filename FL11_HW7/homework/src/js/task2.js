let start = confirm('Do you want to play a game?');
let askQuestion = 'Please, enter the number from 1 to 8.';
let askQuestion2 = 'Please, enter the number from 1 to 12.';
let firstAttemptPrize = 100;
let secondAttemptPrize = 50;
let thirdAttemptPrize = 25;
let possiblePrize = 0 ;
let totalPrize = 0;
let totalPrize2 = 2;
let secondChance = 'Do you want to play again?';
let n8 = 8;
let n1 = 1;
let n12 =12;
let i1 = 1;
let i2 = 2;
let i3 = 3;
let r2 = 2;
let randomNumber = Math.floor(Math.random()*n8 + n1);

if(start){
 for(let attempts = i1;attempts<=i3;attempts++ ){
   randomNumber = Math.floor(Math.random()*n8 + n1);
   console.log(randomNumber);
 if(attempts === i1 ){
    possiblePrize = firstAttemptPrize;
 }else if(attempts === i2){
    possiblePrize = secondAttemptPrize;
 }else if(attempts === i3 ){
    possiblePrize = thirdAttemptPrize;
 }
 let enterNumber = 
     +prompt(`${askQuestion} 
    Attempts left: ${attempts}.
    Total prize: ${totalPrize}$.
    Possible current prize on current attempt: ${possiblePrize}$`);
 if(enterNumber === randomNumber && attempts === i1 ){
    totalPrize += firstAttemptPrize;
    alert(`Thank you for your participation. Your prize is: ${firstAttemptPrize}$.`);
    confirm(`${secondChance}`) ;
    break;
 }else if (enterNumber === randomNumber && attempts === i2){
    totalPrize += secondAttemptPrize;
    alert(`Thank you for your participation. Your prize is: ${secondAttemptPrize}$.`);
    confirm(`${secondChance}`);
    break;
 }else if(enterNumber === randomNumber && attempts === i3){
    totalPrize += thirdAttemptPrize;
    alert(`Thank you for your participation. Your prize is: ${thirdAttemptPrize}$.`);
    confirm(`${secondChance}`);
    break;
 }else if(enterNumber!==randomNumber && attempts === i3){
   confirm(`${secondChance}`);
   break;
 }
}
if(secondChance){
   for(let attempts2 = i1;attempts2<=i3;attempts2++ ){
      randomNumber = Math.floor(Math.random()*n12 + n1);
      console.log(randomNumber);
      if(attempts2 === i1 ){
         possiblePrize = firstAttemptPrize *r2;
      }else if(attempts2 === i2){
         possiblePrize = secondAttemptPrize*r2;
      }else if(attempts2 === i3 ){
         possiblePrize = thirdAttemptPrize*r2;
      }
      let enterNumber2 = +prompt(`${askQuestion2}
      Attempts left: ${attempts2}.
       Total prize: ${totalPrize}$.
       Possible current prize on current attempt: ${possiblePrize}$`);
   if(enterNumber2 === randomNumber && attempts2 === i1){
      alert(`Thank you for your participation. Your prize is: ${firstAttemptPrize}$.`);
   }else if (enterNumber2 === randomNumber && attempts2 === i2){
      alert(`Thank you for your participation. Your prize is: ${secondAttemptPrize}$.`);
   }else if(enterNumber2 === randomNumber && attempts2 === i3){
      alert(`Thank you for your participation. Your prize is: ${thirdAttemptPrize}$.`);
   }
}
}
}else {
    alert('You did not become a billionaire, but can.');
}
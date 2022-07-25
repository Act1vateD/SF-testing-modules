/*
Модуль 11 задание 1

const arr =  [1, 10, 2, 1, 2, "dadaw", "adcas", null, 0, 1, 10, 2, 5, 2, 5, 0, "adw", 0, 0];

function evenOddZero(array){

let even = 0;
let odd = 0;
let zero = 0;

arr.forEach(function(item){
if (item % 2 == 0 & item > 0){
even++; }
else if (item % 2 != 0 & item > 0){
  odd++;
} else if  (item === 0){
zero++;
}
});
return [even, odd, zero]
}

let result = evenOddZero(arr);
console.log(`Чётных элементов: ${result[0]} 
Не чётных элементов: ${result[1]} 
Нулевых элементов: ${result[2]}`);
*/


/*
Модуль 11 задание 2

function simpleNum(number){
    
  if (number > 1000 || number <2){
    return console.log(`Данные не верны`);}
    for(let i=2; i<=Math.sqrt(number);i++){
    if(number % i == 0){
  return console.log(`Число ${number} не простое`);
  }
  }
  return console.log(`Число ${number} простое`);
  }
  
  simpleNum(287);
*/


/*
Модуль 11 задание 3

function sum(firstNum) {
  return function(secondNum) {
      return firstNum + secondNum;
  };
}

console.log(sum (1)(9));
*/


/*
Модуль 11 задание 4

const sum = function (a, b) {
  const intervalId = setInterval(() => {
    console.log(a);
    a+=1;
    if (a > b) {
      clearInterval(intervalId);
    }
  }, 1000);
  }
  
  sum(1,15);
*/


/*
Модуль 11 задание 5

const pow = (x, n) => {
  let result = Math.pow(x,n);
  return console.log(result);
}

pow(5,2)
*/

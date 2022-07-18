/*
Задание 10.3.1

let amount = prompt('enter:');
amount = +amount;

if   (amount % 2 == 0){
    alert('Четное число')
}
else if(amount % 2 != 0){
    alert('Не четное число')
}else 
    alert('«Упс, кажется, вы ошиблись»') 
*/  

 
/*
Задание 10.3.2

let x = undefined;
 if (typeof(x) === "number"){
 alert('X - Число')
  } else if (typeof(x) === "string"){
 alert('X - Строка')
  }else if (typeof(x) === "boolean"){
   alert('X - Логический тип')
 } else 
   alert('Тип X не определен')
*/
 

/*
Задание 10.4.1

let myStr = "hello"
const reverse = myStr.split('').reverse().join('');
console.log(reverse)
*/


/*
Задание 10.4.2

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  console.log(getRandomInt(0, 100))
*/


/*
Задание 10.5.5

const arr =  [1, 2, "dahwsdpiah", 23, 12311, "dasdasd"];
console.log(arr.length);

let i = 0;
while (i < arr.length) {
   console.log(arr[i])
   i++;
}
*/


/*
Задание 10.6.6

const arr =  [1, 1, 1, 1, 1];

let res = arr.every(function(item){
  return arr[0] === item;
});
console.log(res)
*/


/*
Задание 10.6.7

const arr =  [1, 10, 2, 1, 2, "dadaw", "adcas", null, 0, 1, 10, 2, 5, 2, 5, 0, "adw", 0, 0];
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
console.log(`Чётных элементов: ${even} 
Не чётных элементов: ${odd} 
Нулевых элементов: ${zero}`);
*/


/*
Задание 10.7.8

const myMap = new Map();

myMap.set("dsdacx", 12);
myMap.set(23123, "daklwjdkl");
myMap.set(12312, true);
myMap.set("dsd", "daksdjhnc");
myMap.set(1231, 09654);
myMap.set(0, null);
myMap.set(NaN, "dasd");
myMap.set("dasdas", undefined);

for (let [key, value] of myMap){
   console.log(`Ключ - ${key}, Значение - ${value}`)
}
*/
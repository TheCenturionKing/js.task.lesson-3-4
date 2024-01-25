// task 1
// const n = 3;

// function checkNum(num, min, max) {
//   return num >= min && num <= max;
// }
// console.log(checkNum(40, 0, 100));

//task2
// const engineers = {
//   Den: 1000,
//   Matt: 5000,
//   Steve: 2000,
// };
// for (const key in engineers) {
//   console.log(`Заработная плата ${key} состовляет ${engineers.key}`);
// }

//task3
// const arrayFriends = ["Daulet", "Sanya", "Sabit", "Oljas", "Saulet"];
// for (let i = 1; i <= arrayFriends.length - 1; i += 2) {
//   console.log(arrayFriends[i]);
// }
// //task 4
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// for (let i = 0; i <= numbers.length - 1; i++) {
//   console.log(`Индексу ${i} соответствует число ${numbers[i]}`);
// }

//task5
// let questions = [
//   {
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0,
//   },
//   {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0,
//   },
// ];

// questions[0].usersAnswer = null;
// questions[1].usersAnswer = null;
// console.log(questions);

//task 6.1
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];

// for (const iterator of numbers) {
//   console.log(iterator);
// }

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

//Task 6.2
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(`сумма элементов в массиве ${sum}`);

//task 6.3
//let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// let sum = 0;
// for (const number of numbers) {
//   if (number % 2 == 0) {
//     sum += number;
//   }
// }

// console.log("Сумма всех четных чисел в массиве: " + sum);

//task 6.4
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// let max = 42;
// for (let i = 0; i <= numbers.length - 1; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }
// console.log(max);

//task 6.5

// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// let max = numbers[0];
// let maxNumberIndex = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === max) {
//     maxNumberIndex.push(i);
//   } else if (numbers[i] > max) {
//     max = numbers[i];
//     maxNumberIndex = [i];
//   }
// }
// console.log(
//   `Максимальное число ${max}, его индекс в массиве ${maxNumberIndex}`
// );

//task 7
// let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
// let newArr = [];
// for (let i = 0; i < arr.length - 1; i++) {
//   if (arr[i] >= 0) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

//task 8
// let nums = [5, 4, 3, 8, 0];
// let limit = 5;
// let limitNums = [];
// for (let i = 0; i <= nums.length - 1; i++) {
//   if (nums[i] >= limit) {
//     limitNums.push(nums[i]);
//   }
// }
// console.log(limitNums);

//task 9
// const users = [
//   { name: "Vasya", age: 23 },
//   { name: "Olya", age: 12 },
//   { name: "Anna", age: 22 },
//   { name: "Alex", age: 18 },
//   { name: "Valery", age: 8 },
// ];
// for (const key of users) {
//   if (key.age >= 15) {
//     console.log(key.name);
//   }
// }

//task 10.1
let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
let newVegetables = [];
// // for (const item of vegetables) {
// //   let object = {};
// //   object.word = item;
// //   object.length = item.length;
// //   newVegetables.push(object);
// // }
// // for (const key in vegetables) {
// //   let object = {};
// //   object.word = vegetables[key];
// //   object.length = vegetables[key].length;
// //   newVegetables.push(object);
// // }\
for (let i = 0; i < vegetables.length; i++) {
  let object = {};
  object.word = vegetables[i];
  object.length = vegetables[i].length;
  newVegetables.push(object);
}
console.log(newVegetables);
function objectAndLength() {
  let result = [];

  for (const iterator of newVegetables) {
    result.push(`${iterator.word} - ${iterator.length}`);
  }
  return result;
}
vegetablesArray = objectAndLength();
for (const iterator of vegetablesArray) {
  console.log(iterator);
}

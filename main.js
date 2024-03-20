const username = "quoctuan 1102";
const newStr = `My name is ${username} and I am Frontend Developer`;
// console.log(newStr);
// console.log(newStr.length);
// console.log(newStr.split(" "));
// console.log(newStr.indexOf("t"));
/**
 * Câu lệnh điều kiện
 * BT1: Nhập vào số tuổi và kiểm tra nếu tuổi >= 18 thì được coi rạp phim và ngược lại
 * BT2: cho 2 số a và b. Tìm số lớn
 */

function checkAge(age) {
  if (age >= 18) {
    return `Năm nay bạn ${age} tuổi. Bạn đã đủ tuổi để xem phim này!`;
  } else {
    return `Năm nay bạn ${age} tuổi. Ohh no, Bạn chưa đủ tuổi`;
  }
}
// console.log(checkAge(18));

function checkNumberMax(a, b) {
  if (a > b) {
    return `Wooo! Bạn ${a} là số lớn nhất`;
  } else if (a < b) {
    return `Wooo! Bạn ${b} lớn nhất`;
  } else {
    return "Ơ, không ai lớn nhất cả :((";
  }
}
// console.log(checkNumberMax(4, 5));
const student = {
  userName: "tuan",
  age: 23,
};
// console.log(student.age);
// console.log(student["username"]);
// Destructuring object
const { userName, age } = student;
// console.log(userName);
// console.log(age);
// destructuring array
const numberList = [2, 5, 6, 8, 9];
const [first, second, third, ...rest] = numberList;
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(rest);
// Rest operator
function add(a, b) {
  return a + b;
}
const sum = add;
// tính tổng
function average(a, b, fn) {
  const total = fn(a, b);
  return total / 2;
}
const result = average(200, 300, sum);
// console.log(result);

//Closure
function sayHello() {
  let message = "Hello,";
  function sayHi() {
    // console.log(message);
  }
  return sayHi;
}
let hello = sayHello();
hello();

function sayHello2(message) {
  return function hiYourName(name) {
    // console.log(`${message} ${name}`);
  };
}
const hello2 = sayHello2("Welcome to javascript");
hello2("closure");

// BT functionS
// bt1: Viết function so sánh 2 số a,b tìm ra số lớn hơn
function findMax(a, b) {
  if (a > b) return "a là số lớn hơn";
  if (a < b) return "b là số lớn hơn";
  if (a === b) return "a và b bằng nhau";
}
const resultNumberMax = findMax(5, 6);
console.log(resultNumberMax);

function findMax2(a = 0, b = 0) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Vui lòng nhập vào một số");
    return 0;
  }
  // nên gán giá trị mặc định cho a và b
  // vì khi người để trống không nhập thì lúc này sẽ lấy giá trị mặc định
  return Math.max(a, b);
}
console.log(findMax2("ssss", 6));
// BT2: viết hàm in hoa chữ cái đầu trong chữ
function UpperFirstWord(word) {
  //check
  if (word.length === 0) return null;
  return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
  // return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
const resultBT2 = UpperFirstWord("Hát ĐI em");
console.log(resultBT2);
// BT3: viết hàm sử dụng callback(function là params của function khác) in ra kq của hàm findMax2 ơ trên
function useCallback(a, b, fnCallback) {
  let max = findMax2(a, b);
  fnCallback(max);
}
function printMax(number) {
  console.log("Số lớn nhất là" + " " + number);
}
console.log(useCallback(500, 1000, printMax));
// function không có return nó sẽ trả ra undefined
// Arrow Function
//xpression function
const square = function (x) {
  return x * x;
};
console.log(square(5));

//arrow function
const square1 = (x) => {
  return x * x;
};
console.log(square1(5));

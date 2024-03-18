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
  username: "tuan",
  age: 23,
};
console.log(student.age);
console.log(student["username"]);

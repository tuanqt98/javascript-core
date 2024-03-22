const number = [2, 4, 1, 6];
console.log(number.slice(1, 3)); // [4,1]
const number2 = [1, 6, 8, 9];
console.log(number2.splice(1, 2, "tuấn"));
console.log(number2);
const numberList = [1, 2, 3, 4, 5];
const useMap = numberList.map((x) => {
  return x * x;
});
console.log(useMap); //[ 1, 4, 9, 16, 25 ]
const numberList1 = [1, 2, 3, 4, 5, 6];
const useFilter = numberList1.filter((x) => {
  return x % 2 === 0;
});
console.log(useFilter); //[ 2, 4, 6 ]
const numberList2 = [1, 2, 3, 4, 5, 6];
const totalNumber = numberList2.reduce((a, b) => {
  return a + b;
}, 0);
console.log(totalNumber);
// BT1: đảo ngược string : "My name is Tuấn" -> "Tuấn is name My"

const reverseIntroName = (str) => {
  if (!str) return null;
  // console.log(str.split(" "));
  // console.log(str.split(" ").reverse());
  // console.log(str.split(" ").reverse().join(", "));
  return str.split(" ").reverse().join(", ");
};
const result = reverseIntroName("My name is Tuấn");
// console.log(result);
// BT2: đảo ngược word : "My name is Tuấn" -> "Tuấn is name My"
const reverseWord = (word) => {
  if (!word) return null;
  // console.log(word.split(""));
  // console.log(word.split("").reverse());
  // console.log(word.split("").reverse().join(""));
  return word.split("").reverse().join("");
};
const result1 = reverseWord("i love");
// console.log(result1);
// bt3: in hoa chữ cái đầu trong từ: 'my name is tuan' -> My Name Is Tuan
const UpperWord = (word) => {
  if (!word) return null;
  // console.log(word.split(" "));
  // console.log(
  //   word.split(" ").map((x) => {
  //     return x[0].toUpperCase() + x.slice(1);
  //   })
  // );
  // console.log(word.split("").reverse().join(""));
  return word
    .split(" ")
    .map((x) => {
      return x[0].toUpperCase() + x.slice(1);
    })
    .join(" ");
};
const result2 = UpperWord("my name is tuan");
// console.log(result2);

// b4 loại bỏ giá trị falsy
const ListtypeValue = [0, 10, null, undefined, "tuan"];

const useFilter2 = ListtypeValue.filter((x) => {
  if (
    x !== 0 ||
    x !== null ||
    x !== undefined ||
    x !== " " ||
    x !== NaN ||
    x !== false
  ) {
    return x;
  }
});
console.log("kq2:", useFilter2);
// bt5 : cho mảng phức tạp [1,2,3, [false, null]], [1,5,6, ['javascript]], [888, 666, [90]]. trả về 1 mảng duy nhất
const arrList = [
  [1, 2, 3, [false, null]],
  [1, 5, 6, ["javascript"]],
  [888, 666, [90]],
];

// bt6: loại bỏ trùng lặp trong mảng
const numberList3 = [1, 1, 1, 1, 2, 3, 2, 3, 2];
function unique(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
unique([1, 1, 1, 1, 2, 3, 2, 3, 2]);
console.log(unique([1, 1, 1, 1, 2, 3, 2, 3, 2]));

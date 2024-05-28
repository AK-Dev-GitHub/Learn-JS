const testObj = {
  name: 'test',
  age: 20,
  hobbies: ['reading', 'games', 'music'],
};

// Nullとインデント2を使用することによって可読性を向上した状態でログを出力可能
console.log(JSON.stringify(testObj, null, 2));

// console.groupとの併用
const testObj2 = {
  name: 'test2',
  age: 25,
  hobbies: ['baseball', 'walking', 'music'],
};

// testObj2のログを出力するグループを開始
console.group('testObj2');
console.log(JSON.stringify(testObj2, null, 2));
console.groupEnd(); // testObj2のログを出力するグループを終了
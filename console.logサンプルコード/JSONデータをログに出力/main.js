const testObj = {
  name: 'test',
  age: 20,
  hobbies: ['reading', 'games', 'music'],
};

// Nullとインデント2を使用することによって可読性を向上した状態でログを出力可能
console.log(JSON.stringify(testObj, null, 2));

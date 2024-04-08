// 一度作成した symbol はそれ自身とのみ等しい。
// まったく同じ symbol は二度と作ることはできない→この性質を利用して、オブジェクトのキーとして使用できる
// キーが被ることがない。
// ライブラリ・フレームワークなどとキーでの衝突を防げる (そのような状況になったことはないが)。
// キーを文字列で指定した場合に比べて、改変などされるリスクが減る (決してなくなるわけではない 2)。

// Symbolを生成=キーが作成
let symbol1 = Symbol();

// 同じ説明を持つSymbolを生成
let symbol2 = Symbol();

// Symbolはユニークなので、これらの値は等しくない
console.log(symbol1 === symbol2); // false

// オブジェクトのキーとしてSymbolを使用
let obj = {
  [symbol1]: 'value1',
  [symbol2]: 'value2',
};

console.log(obj[symbol1]); // 'value1'
console.log(obj[symbol2]); // 'value2'

// Symbolの説明を指定した場合のSymbolキー活用
let personObj = {};
const sym = Symbol('obj のキー');
personObj[sym] = 'Human';

console.log(personObj[sym]); // "Human"

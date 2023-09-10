//アロー関数を使った関数定義
let sum = (x, y) => {
  let result = x + y;
  return result;
};

// 関数の呼び出し
let num = sum(1, 2);
console.log('計算結果は' + num + 'です'); // 3

/*
[2023年9月11日オリジナルアロー関数]
・学んだこと１
変数宣言をしてから、イコールでarrowとつなげる
例 let test = (a, b) => {

・学んだこと2
関数の呼び出し先の変数と関数処理で定義した変数をイコールでつなげ、関数処理で定義した変数に引数を記載する
例:let timesNum = times(3, 5);

*/
let times = (a, b) => {
  let timesResult = a * b;
  return timesResult;
};

// 関数の呼び出し
let timesNum = times(3, 5);
console.log('計算結果は' + timesNum + 'です'); // 3

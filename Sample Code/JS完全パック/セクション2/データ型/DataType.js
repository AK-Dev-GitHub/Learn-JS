//・・・・・・・・・・・・・・・・・・・・・・・・・・・・・ 数値型・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・
let number = 10;
// Int（整数）
number = -1;
// float型(少数点)
number = 32.4;

// JSでは数値型で定義した変数に文字列型などを代入することができる
// これを「動的型付け」と言う（常にどんな方でも入れれる）
// 状況によって型が編かする→動的型付け
number = 'something';

//・・・・・・・・・・・・・・・・・・・・・・・・・・・・・ 文字列型・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・
// シングルクォーテーションまたはダブルコーテーションで定義
let String = 'hello';

// バッククオテーションで定義
const userName = `taro`;

//・・・・・・・・・・・・・・・・・・・・・・・・・・・・・ 文字列結合・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・

// 文字列を組み合わせる
// 1.プラス演算子で結合
String = 'hello' + userName;
// 2.バッククオート＋＄マークで結合
String = `hello ${userName}`;
console.log(String);

//・・・・・・・・・・・・・・・・・・・・・・・・・・・・・ 特殊文字列結合・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・
// 特殊な文字を定義
// シングルクォーテーションを定義(シングルクォーテーションを文字列の中で定義したい場合はシングルクォーテーション以外で文字列を定義する)
string = " '' ";
console.log(string);
// バックスラッシュでエスケープしてシングルクォーテーションを定義
// 特殊な文字を定義するときはバックスラッシュを使うと覚えておく
string = " ' ";
console.log(string);

// 改行を定義
// 文字列を改行したいときは「\n」を使用する
string = 'hello\n taro';

// バッククオートで定義する
// バッククオートは改行をそのまま使用できる特性がある
string = `hello




taro`;
console.log(string);

// 文字列と数値型の結合
// 入力画面からユーザが入力した値（想定）
const userInput = '10';
// 計算結果
let calcResult;
// 方法１ number関数をしようして文字列を数値に変換
calcResult = Number(userInput) + 10;
// 方法2 ParseIntを使用
calcResult = parseInt(userInput) + 10;
// 小数点の結合
calcResult = parseFloat(userInput) + 10;
// 「＋」を使用
calcResult = +userInput + 10;
console.log(calcResult);

// 数字を文字列に変換
const tenNumber = 10;

calcResult = '10' + String(tenNumber);
console.log(calcResult);

calcResult = '10' + tenNumber.toString();
console.log(calcResult);

// 真偽値
let boolean = true;

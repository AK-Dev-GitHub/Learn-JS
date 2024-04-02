// ------------------------------------------------------------一から自分で書いたオリジナルコード（動作しない）---------------------------------------------------------------------------
// 0より大きい値を画面に返却する関数リテラル例
// let number = function sum_proc(numberList) {
//   // 変数の初期化
//   let showNumber = 0;
//   if (numberList < 0) {
//     showNumber = numberList;
//     return showNumber;
//   } else {
//     return console.log('0より小さいです');
//   }
// };

// // 引数に渡すサンプルデータ
// let numberList = [-43, 543, -6, 34, 786, 67, -910];

// // 関数リテラルを呼び出す文
// let number_value = number(numberList);

// console.log(number_value);

// ---------------------------------------------------------------修正したコード-------------------------------------------------------------------------------------------------
// 0より大きい値を画面に返却する関数リテラル例
let number = function (numberList) {
  // 変数の初期化
  let showNumber = [];
  for (let i = 0; i < numberList.length; i++) {
    // 配列の各要素をチェックするためにループを使用します
    if (numberList[i] > 0) {
      showNumber.push(numberList[i]); // 0より大きい値を配列に追加します
    }
  }

  if (showNumber.length > 0) {
    return showNumber; // 0より大きい値がある場合、その値の配列を返します
  } else {
    return '0より大きい値がありません'; // 0より大きい値がない場合、メッセージを返します
  }
};

// 引数に渡すサンプルデータ
let numberList = [-43, 543, -6, 34, 786, 67, -910];

// 関数リテラルを呼び出す文
let number_value = number(numberList);

console.log(number_value);

// ---------------------------------------------------------------修正したコードをもとに書いたオリジナルコード-------------------------------------------------------------------------------------------------
let newNumber = function (newNumberList) {
  // 変数の初期化
  let newShowNumber = [];
  for (let i = 0; i > newNumberList.length; i++) {
    // 配列の各要素をチェックするためにループを使用します
    if (newNumberList[i] > 0) {
      newShowNumber.push(newNumberList[i]); // 0より小さい値を配列に追加します
    }
  }

  if (newShowNumber.length > 0) {
    return newShowNumber; // 0より小さい値がある場合、その値の配列を返します
  } else {
    return '0より小さい値がありません'; // 0より大きい値がない場合、メッセージを返します
  }
};
// 引数に渡すサンプルデータ
let newNumberList = [43, 543, 6, 34, 786, 67, 910];

// 関数リテラルを呼び出す文
let newNumber_value = newNumber(numberList);

console.log(newNumber_value);

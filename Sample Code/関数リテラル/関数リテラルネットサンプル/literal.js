/*
・リテラルとは、
→ソースコード上で数値・文字列・ブール値などを、直に記したものを指します。

・例えば、下記のソースコードでは「本日は晴天なり」「1221.432」「false」が、リテラルに該当します。リテラルは、変数に代入するときに記述されるのがほとんどです。
  つまり、関数リテラルは変数に代入できる関数ということになります。以下のサンプルコードは、関数リテラルの一例です。
*/
let display_string = '本日は晴天なり';
let measured_value = 1221.432;
let isEnabled = false;

// 関数リテラルの例
//（int型配列を引数として、配列に入っている値の合計値を計算）
let sum_proc = function (import_data) {
  let sum = 0;
  for (let data of import_data) {
    sum = sum + data;
  }
  return sum;
};

// 引数に渡すサンプルデータ
let import_data = [43, 543, 6, 34, 786, 67, 910];

// 関数リテラルを呼び出す文
let sum_value = sum_proc(import_data);

console.log(sum_value); // 結果：2389

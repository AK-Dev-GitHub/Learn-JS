const yourAge = 'Akihiro'; // 年齢が入るはずなのに名前が入っている例
try {
  // yourAgeが数字じゃない場合はエラーを投げる
  if (isNaN('number')) {
    // catchのerrorにメッセージを渡す
    throw new Error('yourAge is not a Number');
  }
  console.log('try'); // エラーを投げた以降の文は実行されない
} catch (error) {
  // console.log('catch');
  // try節で投げられたエラーを出力する
  console.log(error.message);
} finally {
  console.log('finally');
}

// 出力結果
// "catch"
// "yourAge is not a Number"
// "finally"

function errorHandling(type) {
  // 例外をスローするためのコード
  if (type === 'TypeError') {
    // TypeErrorは、値が期待される型でない場合にスローされます。
    throw new TypeError('これはデモンストレーションのためのTypeErrorです');
  } else if (type === 'RangeError') {
    // RangeErrorは、数値がその変数や配列などの許容範囲外にある場合にスローされます。
    throw new RangeError('これはデモンストレーションのためのRangeErrorです');
  } else if (type === 'EvalError') {
    // EvalErrorは、global関数eval()に関連するエラーが発生した場合にスローされます。
    throw new EvalError('これはデモンストレーションのためのEvalErrorです');
  }
}

// エラーオブジェクトをconsoleログに出力する関数
function logMyErrors(e) {
  console.log(e);
}

['TypeError', 'RangeError', 'EvalError'].forEach((type) => {
  try {
    errorHandling(type); // 3 つの例外が発生する可能性があります
  } catch (e) {
    // 値が期待される型と異なる場合に例外をcatch
    if (e instanceof TypeError) {
      // TypeError 例外を処理するための文
      console.log('TypeErrorが発生しました: ', e.message);
    } else if (e instanceof RangeError) {
      // RangeError 例外を処理するための文
      console.log('RangeErrorが発生しました: ', e.message);
    } else if (e instanceof EvalError) {
      // EvalError 例外を処理するための文
      console.log('EvalErrorが発生しました: ', e.message);
    } else {
      // 任意の指定されていない例外を操作するための文
      logMyErrors(e); // エラーハンドラーに例外オブジェクトを渡す
    }
  } finally {
    // 例外が発生してもしなくても実行される文
    console.log('finally');
  }
});

try {
  // まず実行される処理
  console.log('try');
} catch (error) {
  // tryブロックで失敗したら実行される
  console.log('catch');
} finally {
  // tryブロックで成功しても失敗しても実行される
  console.log('finally');
}

// 出力結果
// "try"
// "finally"

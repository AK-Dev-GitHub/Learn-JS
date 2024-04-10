try {
  consol.log('try'); // console.logのタイプミスした場合
} catch (error) {
  console.log('catch');
  console.log(error.message);
} finally {
  console.log('finally');
}

// 出力結果
// "catch"
// error message = "consol is not defined"
// "finally"

// 存在しない関数をよびだしてErrorが起きる場合
try {
  test();
  console.log('try'); // console.logのタイプミスした場合
} catch (error) {
  console.log('catch');
  console.log(error.message);
} finally {
  console.log('finally');
}

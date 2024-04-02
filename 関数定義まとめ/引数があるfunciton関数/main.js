function greet(name) {
  console.log(`こんにちは${name}さん!`);
}

// ブラウザのダイアログで名前を入力→name変数に代入
let name = prompt('あなたの名前は何ですか？');

//関数の呼び出し
greet(name);

// オリジナル関数
function personalInfo(pInfo) {
  console.log(
    `名前: ${pInfo.name}, パスワード: ${pInfo.password}, 電話番号: ${pInfo.tel} この情報で会員登録しますか？`
  );
}

// ブラウザのダイアログで名前を入力→name変数に代入
let pInfo = {
  name: prompt('名前を入力してください'),
  password: prompt('パスワードを入力してください'),
  tel: prompt('電話番号を入力してください'),
};

//関数の呼び出し
personalInfo(pInfo);

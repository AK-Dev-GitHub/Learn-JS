function alertButton() {
  const message1 = 'OKボタンを押してください';
  alert(message1);
}

// HTMLの要素を取得
const button = document.getElementById('button2');

function alertButton2() {
  const message2 = '画面遷移しますか？';
  alert(message2);
}

function moveNewPage() {
  const message3 = '画面遷移に成功しました';
  alert(message3);
}

// TODO エラーあり
// ボタンがクリックされたときの処理を定義
button.addEventListener('click', () => {
  // 関数1の呼び出し
  alertButton2();

  // 関数1が終了した後に関数2を呼び出す
  setTimeout(moveNewPage, 0);
});

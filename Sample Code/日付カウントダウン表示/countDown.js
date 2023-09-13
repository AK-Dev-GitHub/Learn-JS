// HTMLの要素を取得
const hour = document.getElementById('hour'); // 'hour'というIDを持つ要素を取得し、hour変数に格納
const min = document.getElementById('min'); // 'min'というIDを持つ要素を取得し、min変数に格納
const sec = document.getElementById('sec'); // 'sec'というIDを持つ要素を取得し、sec変数に格納

// カウントダウン関数
function countdown() {
  const now = new Date(); // 現在の日時を取得してnow変数に格納

  // 明日の0:00時刻を取得
  const tomorrow = new Date(
    now.getFullYear(), // 現在の年を取得
    now.getMonth(), // 現在の月を取得
    now.getDate() + 1 // 現在の日付に1日を加えて明日を表現
  );

  // 現在時刻と明日の0:00時刻の差を計算し、ミリ秒単位で取得
  // TODO:変数に＝で関数っぽい処理を記載できる？！後で調べる
  const diff = tomorrow.getTime() - now.getTime();

  // ミリ秒を時間、分、秒に変換
  const calcHour = Math.floor(diff / 1000 / 60 / 60); // 残り時間から時間を計算
  const calcMin = Math.floor(diff / 1000 / 60) % 60; // 分を計算
  const calcSec = Math.floor(diff / 1000) % 60; // 秒を計算

  // 時間、分、秒を2桁表示でHTML要素に設定
  hour.innerHTML = calcHour < 10 ? '0' + calcHour : calcHour; // 1桁の場合は0を追加して2桁に
  min.innerHTML = calcMin < 10 ? '0' + calcMin : calcMin; // 同様に分を2桁表示
  sec.innerHTML = calcSec < 10 ? '0' + calcSec : calcSec; // 同様に秒を2桁表示
}

// カウントダウン関数を初回呼び出し
countdown();

setInterval(countdown, 1000); // 1000ミリ秒（1秒）ごとにcountdown関数を呼び出す

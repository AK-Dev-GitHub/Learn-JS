// スコアを格納する変数
let score = 0;
let timerStarted = false; // タイマーが開始したかどうかをチェックするフラグ
let timeLeft = 30; // 残り時間
let timerId; // タイマーID

// ボタン要素とスコア表示要素を取得
const clickBtn = document.getElementById('clickBtn');
const scoreDisplay = document.getElementById('score');
const loading = document.getElementById('loading');
const timerDisplay = document.getElementById('timer'); // タイマー表示要素を取得

// ボタンがクリックされたときの処理
clickBtn.addEventListener('click', function () {
  // スコアを1増やす
  score++;
  // スコア表示を更新
  scoreDisplay.textContent = score;

  // タイマーがまだ開始していない場合、30秒後にゲームオーバーをチェックするタイマーを開始
  if (!timerStarted) {
    timerStarted = true;
    timerId = setInterval(function () {
      timeLeft--;
      timerDisplay.textContent = timeLeft;

      // 残り時間が10秒以下になったら文字色を赤にする
      if (timeLeft <= 10) {
        timerDisplay.style.color = 'red';
      }

      if (timeLeft <= 0) {
        clearInterval(timerId);

        if (score < 100) {
          scoreDisplay.textContent = 'ゲームオーバー';
          alert('ゲームオーバー');
          showLoadingAndReload();
        }
      }

      // 残り時間が20秒になったらボタンの位置をランダムに変更
      const rules = document.getElementById('rules');
      const rulesHeight = rules.offsetHeight;
      if (timeLeft === 20) {
        const x = Math.random() * (window.innerWidth - clickBtn.offsetWidth);
        const y =
          Math.random() *
            (window.innerHeight - clickBtn.offsetHeight - rulesHeight) +
          rulesHeight;
        clickBtn.style.position = 'absolute';
        clickBtn.style.left = `${x}px`;
        clickBtn.style.top = `${y}px`;
      } else if (timeLeft === 15) {
        // 残り時間が10秒になったらボタンの位置をランダムに変更
        const x = Math.random() * (window.innerWidth - clickBtn.offsetWidth);
        const y =
          Math.random() *
            (window.innerHeight - clickBtn.offsetHeight - rulesHeight) +
          rulesHeight;
        clickBtn.style.position = 'absolute';
        clickBtn.style.left = `${x}px`;
        clickBtn.style.top = `${y}px`;
      } else if (timeLeft === 10) {
        // 残り時間が10秒になったらボタンの位置をランダムに変更
        const x = Math.random() * (window.innerWidth - clickBtn.offsetWidth);
        const y =
          Math.random() *
            (window.innerHeight - clickBtn.offsetHeight - rulesHeight) +
          rulesHeight;
        clickBtn.style.position = 'absolute';
        clickBtn.style.left = `${x}px`;
        clickBtn.style.top = `${y}px`;
      } else if (timeLeft === 5) {
        // 残り時間が10秒になったらボタンの位置をランダムに変更
        const x = Math.random() * (window.innerWidth - clickBtn.offsetWidth);
        const y =
          Math.random() *
            (window.innerHeight - clickBtn.offsetHeight - rulesHeight) +
          rulesHeight;
        clickBtn.style.position = 'absolute';
        clickBtn.style.left = `${x}px`;
        clickBtn.style.top = `${y}px`;
      }
    }, 1000); // 1000ミリ秒 = 1秒
  }

  // スコアが100以上になったらクリアと表示
  if (score >= 100) {
    clearInterval(timerId); // タイマーを停止
    scoreDisplay.textContent = 'クリア';
    alert('ゲームクリアおめでとう！人生の貴重な30秒を無駄にしたぞ！');
    showLoadingAndReload();
  }
});

// ローディング画面を表示してから一定時間待って画面をリロードする関数
function showLoadingAndReload() {
  loading.style.display = 'block';
  setTimeout(function () {
    location.reload();
  }, 3000); // 3000ミリ秒 = 3秒
}

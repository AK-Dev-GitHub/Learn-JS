function colorfulLog(message, color) {
  console.log(`%c${message}`, `color: ${color}; font-size: 16px;`);
}

// 使用例: 赤色でエラーメッセージを表示
colorfulLog('ログ装飾', 'red');

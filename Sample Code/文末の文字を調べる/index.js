// endsWith() は、JavaScriptで文末が特定の文字または文字列で終わるかどうかを判定したいときに使えるメソッドです。
// 使い所で言うと、シンプルに「文末が特定の文字かどうか」といった使い方ですかね。文末が「？」で終わっているか、「！」で終わっているかなどです。
const msg1 = 'こんにちは。お元気ですか？';
const msg2 = '今日は天気が良い';
const msg3 = 'それは良いかもしれない';
const msg4 = 'abcdefg';
const msg5 = 'Akihiro' + 'Kaneda';
const msg6 = 1 + msg1;

console.log(msg1.endsWith('？'));
// output: true

console.log(msg2.endsWith('？'));
// output: false

console.log(msg3.endsWith('かもしれない'));
// output: true

console.log(msg4.endsWith('g', 7));
// output: true

console.log(msg4.endsWith('g', 3));
// output: false

console.log(msg5.endsWith('a', 13));
// output: true

console.log(msg6.endsWith('？'));
// output: true

// tips : 半角文字をendWithで判定しようとするとfalseになる
// 理由 : JavaScriptでは、全角の疑問符と半角の疑問符は異なる文字として扱われます。そのため、msg6.endsWith('?')はfalseを返します
console.log(msg6.endsWith('?'));

const players = [
  {
    name: 'たかし',
    point: 8,
  },
  {
    name: 'まりこ',
    point: 0,
  },
  {
    name: 'こうた',
    point: 20,
  },
];

// 上記のplayers配列からplayersから得点pointだけを抽出したい
const points = players.map((player) => player.point);
console.log(points);

// pointが10未満の人だけ抽出した配列を作るコード
// filter関数＋（）の中に条件分岐を記載できる
const lowers = players.filter((player) => player.point < 10);
console.log(lowers);

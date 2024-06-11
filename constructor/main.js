// Objecutコンストラクタを使用して、Humanオブジェクトを生成
const human = new Object();

human.gender = 'male';
human.name = 'Taro';
human.age = 20;
human.getAge = function () {
  return human.age;
};
console.table(human);
console.log(human.getAge());

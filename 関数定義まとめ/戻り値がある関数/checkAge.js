// 20歳以下はお酒が買えないため以下のロジックで年齢を確認
function checkAge(age) {
  if (age < 20) {
    return '20歳未満の方はお酒を購入できません';
  } else {
    return 'お酒を購入できます';
  }
}

const result = checkAge(18);
console.log(result);

let personalInfo = function (inputPersonalInfo) {
  if (inputPersonalInfo.bloodType === 'A' && inputPersonalInfo.sex === 'man') {
    return '見おとなしく控えめですが、芯が強いタイプ';
  } else if (
    inputPersonalInfo.bloodType === 'A' &&
    inputPersonalInfo.sex === 'woman'
  ) {
    return '幅広く技術や知識を身に付けて、将来に備えるタイプ';
  }
};

let inputPersonalInfo = {
  name: 'Kaneda',
  age: 30,
  bloodType: 'A',
  sex: 'man',
};

let result = personalInfo(inputPersonalInfo);
console.log(result);

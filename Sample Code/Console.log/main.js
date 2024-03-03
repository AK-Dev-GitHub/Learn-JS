const details = {
  name: 'John',
  age: '16',
  course: 'JS',
};

const { name } = details;
console.log(name);

// 上記のコードは "John" を出力します。
// これは、JavaScriptのオブジェクト分割代入（Object Destructuring）という機能を使用しています。この機能を使用すると、オブジェクトから特定のプロパティを抽出して新しい変数に代入することができます。
// 上記のコードでは、detailsオブジェクトからnameプロパティを抽出し、新しい変数nameに代入しています。そのため、console.log(name);はdetailsオブジェクトのnameプロパティの値である "John" を出力します。
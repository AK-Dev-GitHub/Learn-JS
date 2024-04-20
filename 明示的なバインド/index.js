// 'roadmap'という名前のオブジェクトを作ります。このオブジェクトには'name'というプロパティがあり、その値は'JavaScript'です。
const roadmap = {
  name: 'JavaScript',
};

// 'printName'という名前の関数を作ります。この関数は、自分が呼び出されたときに、自分自身の'name'プロパティの値をコンソールに表示します。
function printName() {
  console.log(this.name);
}

// 'printName'関数を呼び出しますが、このとき'roadmap'オブジェクトを関数の中で'this'として使います。その結果、'roadmap'の'name'プロパティの値（つまり'JavaScript'）がコンソールに表示されます。
printName.call(roadmap); // JavaScript

// 'apply'も'call'と同じように、関数を呼び出すときに'this'を指定するために使います。この場合も、'roadmap'の'name'プロパティの値（つまり'JavaScript'）がコンソールに表示されます。
printName.apply(roadmap); // JavaScript

// 'bind'は、関数に対して'this'を固定するために使います。この行では、'printName'関数に対して'this'を'roadmap'に固定した新しい関数を作り、それを'printRoadmapName'に代入します。
const printRoadmapName = printName.bind(roadmap);

// 'printRoadmapName'関数を呼び出します。この関数は、'printName'関数に'this'を'roadmap'に固定したものなので、'roadmap'の'name'プロパティの値（つまり'JavaScript'）がコンソールに表示されます。
printRoadmapName(); // JavaScript

// undefinedについて
// `undefined`は、値がまだ割り当てられていない変数、または存在しないオブジェクトのプロパティ、または存在しない配列の要素を参照したときに返されます。
let test;
console.log(test); // undefined

console.log({}.property); // undefined

console.log([][0]); // undefined

// Nullについて
// 明示的に値が存在しないことを示すために使用される特殊な値で
let test2 = null;
console.log(test); // null

const test3 = ["foo", "bar", "baz"];
console.log([0]); // "foo"
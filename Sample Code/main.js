const Hoge = function () {
  const self = this;
  self.hoge = `Hoge`;
  return self;
};
const hoge = new Hoge();
console.log(hoge);

const Huga = function () {
  const self = this;
  self.huga = `huga`;
  return self;
};
Huga.prototype = new Hoge();
const huga = new Huga();
console.log(huga);

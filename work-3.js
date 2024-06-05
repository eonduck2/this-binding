console.log(`걍 this: ${this}`);
console.log(this);

function workThree(a, b) {
  console.log("함수 안에 this : ", this);
  return a + b;
}

console.log(workThree(1, 2));

const itsMe = {
  name: `이종수`,
  age: 28,
  city: `대전`,
  this: this,
  sentence: function () {
    return this.name;
  },
  test: function test() {
    return this.age;
  },
};

console.dir(`객체 내부 this: ${itsMe.this}`);
console.log(`메서드로 보는 this: ${itsMe.sentence()}`);

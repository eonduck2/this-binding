console.log(`걍 this: ${this}`);
console.log(this);

const workThree = (a, b) => {
  console.log("함수 안에 this : ", this);
  return a + b;
};

console.log(workThree(1, 2));

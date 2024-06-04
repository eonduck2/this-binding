const ramen = {
  ramen: `진라면`,
  water: `300ml`,
  egg: true,
};

const proxiedObj = new Proxy(ramen, {
  get(target, prop, receiver) {
    if (prop === `ramen`) {
      return `신라면`;
    }
    return Reflect.get(...arguments);
    // return `테스트`;
  },
});

console.log(proxiedObj.ramen);
console.log(proxiedObj.water);
console.log(proxiedObj.egg);
console.log(proxiedObj);

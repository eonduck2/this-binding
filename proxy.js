const ramen = {
  ramen: `진라면`,
  water: `300ml`,
  egg: true,
};

const proxiedObj = new Proxy(ramen, {
  get(target, prop, receiver) {
    if (prop === `ramen`) {
      Reflect.set(ramen,prop,value,receiver){
      };
      return `신라면`;
    }
  },
});

console.log(proxiedObj.ramen);

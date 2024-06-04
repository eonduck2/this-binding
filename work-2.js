class WorkTwo {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  set a(value) {
    if (!isNaN(value)) {
      this._a = value;
    } else {
      throw new Error(`타입 에러`);
    }
  }

  get a() {
    return this._a;
  }

  set b(value) {
    if (!isNaN(value)) {
      this._b = value;
    } else {
      throw new Error(`타입 에러`);
    }
  }

  get b() {
    return this._b;
  }

  add() {
    return this._a + this._b;
  }
}

const workTwo = new WorkTwo(1, 2);

console.dir(workTwo);
console.log(workTwo instanceof WorkTwo);

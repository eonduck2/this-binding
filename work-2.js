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
}

const workTwo = new WorkTwo(1, 2);

console.log(workTwo);

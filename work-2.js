class WorkTwo {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  set a(value) {
    this._a = value;
  }

  get a() {
    return this._a;
  }
}

const workTwo = new WorkTwo(1, 2);

console.log(workTwo);

const workOne = (a, b) => {
  if (!isNaN(a) && !isNaN(b)) {
    const local = a + b;

    return local;
  } else {
    throw new Error(`타입 에러`);
  }
};

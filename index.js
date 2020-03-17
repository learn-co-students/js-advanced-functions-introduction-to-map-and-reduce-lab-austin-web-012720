function mapToNegativize(ary) {
  const negAry = [];
  for (let i = 0; i < ary.length; i++) {
    negAry.push(ary[i] * -1);
  }
  return negAry;
}

function mapToNoChange(ary) {
  return ary;
}

function mapToDouble(a) {
  const n = [];
  for (let i = 0; i < a.length; i++) {
    n.push(a[i] * 2);
  }
  return n;
}

function mapToSquare(a) {
  const n = [];
  for (let i = 0; i < a.length; i++) {
    n.push(a[i] ** 2);
  }
  return n;
}

function reduceToTotal(src, startingPoint = 0) {
  let total = startingPoint;
  for (let i = 0; i < src.length; i++) {
    total += src[i];
  }
  return total;
}

function reduceToAllTrue(src) {
  for (let i = 0; i < src.length; i++) {
    if (!src[i]) return false;
  }
  return true;
}

function reduceToAnyTrue(src) {
  for (let i = 0; i < src.length; i++) {
    if (src[i]) return true;
  }
  return false;
}

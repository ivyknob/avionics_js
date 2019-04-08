const pad = function (number, n) {
  const arr = Math.round(number).toString().split("");
  if (n >= arr.length) {
    return (new Array(n - arr.length)).fill('0').concat(arr).join("");
  }
  return arr.slice(-n).join('');
}

const compoundValue = function (value) {
  const thousands = Math.floor(value/1000);
  return [
    thousands ? `<tspan font-size="1.2em" font-weight="bold">${thousands}</tspan>` : '',
    pad(value%1000, 3)
  ].join("");
}

const createElem = function (id) {
  const use = document.createElementNS("http://www.w3.org/2000/svg", 'use');
  use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `#${id}`);
  return use;
}

export { pad, compoundValue, createElem };

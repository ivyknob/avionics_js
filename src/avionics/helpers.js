const pad = function (number, n) {
  const arr = Math.round(number).toString().split("");
  if (n >= arr.length) {
    return (new Array(n - arr.length)).fill('0').concat(arr).join("");
  }
  return arr.slice(-n).join('');
}

export { pad };

function pad(number, n) {
  const arr = Math.round(number).toString().split("");
  if (n >= arr.length) {
    return (new Array(n - arr.length)).fill('0').concat(arr).join("");
  } else {
    return arr.slice(-n).join('');
  }
}

export { pad };

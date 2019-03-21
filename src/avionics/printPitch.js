import createElem from './createElem.js'

export default function printPitch (elem) {
  var appendFn, i, large, medium, results, small, textLeft, textRight, texts, use;
  large = createElem('large-pitch');
  medium = createElem('medium-pitch');
  small = createElem('small-pitch');
  textLeft = document.createElementNS("http://www.w3.org/2000/svg", 'text');
  textLeft.style.fill = 'white';
  textLeft.style.fontWeight = 'bold';
  textLeft.setAttribute('dy', 5);
  textRight = textLeft.cloneNode();
  textLeft.setAttribute('text-anchor', 'end');
  textLeft.setAttribute('x', -45);
  textRight.setAttribute('x', 45);
  i = -220;
  results = [];
  appendFn = function(text) {
    var value = Math.abs(i);
    text.textContent = value > 180 ? 360 - value : value;
    text.setAttribute('y', -i * 8);
    elem.appendChild(text);
  };
  while (i <= 220) {
    if (i === 0) {
      use = document.querySelector('#large-pitch').cloneNode();
      use.setAttribute('x1', -60);
      use.setAttribute('x2', 60);
    }
    else if (i % 10 === 0) {
      use = large.cloneNode();
      texts = [
        textLeft.cloneNode(),
        textRight.cloneNode()
      ];
      texts.forEach(appendFn);
    }
    else if (i % 5 === 0) {
      use = medium.cloneNode();
    }
    else if (i % 2.5 === 0) {
      use = small.cloneNode();
    }
    use.setAttribute('y', i * 8);
    elem.appendChild(use);
    results.push(i += 2.5);
  }
  return results;
}

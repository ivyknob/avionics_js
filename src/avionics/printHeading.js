import createElem from './createElem.js'

export default function printHeading (elem) {
  var clone, cloneText, i, large_marker, marker, results, text;
  marker = createElem('heading_scale_marker');
  large_marker = createElem('heading_scale_large_marker');
  text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
  text.style.fill = '#fff';
  text.style.fontSize = '16px';
  text.style.fontWeight = 'bold';
  text.setAttribute('text-anchor', 'middle');
  text.setAttribute('y', -10);
  i = -200;
  results = [];
  while (i <= 200) {
    if (i % 10 === 0) {
      clone = large_marker.cloneNode();
      cloneText = text.cloneNode();
      cloneText.setAttribute('x', i * 10);
      cloneText.textContent = i <= 0 ? 360 + i : i;
      elem.appendChild(cloneText);
    }
    else if (i % 5 === 0) {
      clone = large_marker.cloneNode();
      cloneText = text.cloneNode();
    }
    else {
      clone = marker.cloneNode();
    }
    clone.setAttribute('x', i * 10);
    elem.appendChild(clone);
    results.push(i += 1);
  }
  return results;
}

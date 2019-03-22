import createElem from './createElem.js'

const text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
text.style.fill = '#fff';
text.style.fontSize = '16px';
text.style.fontWeight = 'bold';
text.setAttribute('text-anchor', 'middle');
text.setAttribute('y', -10);

export default function printHeading (elem) {
  let i;
  const marker = createElem('heading_scale_marker');
  const large_marker = createElem('heading_scale_large_marker');
  i = -200;
  while (i <= 200) {
    let clone;
    if (i % 5 === 0) {
      clone = large_marker.cloneNode();
      if (i % 10 === 0) {
        const cloneText = text.cloneNode();
        cloneText.setAttribute('x', i * 10);
        cloneText.textContent = i <= 0 ? 360 + i : i;
        elem.appendChild(cloneText);
      }
    }
    else {
      clone = marker.cloneNode();
    }
    clone.setAttribute('x', i * 10);
    elem.appendChild(clone);
    i += 1;
  }
}

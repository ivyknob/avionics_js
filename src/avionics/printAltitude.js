import { createElem, compoundValue } from './helpers.js'

const text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
text.setAttribute('x', 27);
text.classList.add('altitude__scale-value');

export default function printAltitude (elem, selectedAltitude = null) {
  const marker = createElem('altitude_scale_marker'),
        large_marker = createElem('altitude_scale_large_marker');

  let i = -15;

  while (i <= 500) {
    let clone;

    if (i % 5 === 0) {
      clone = large_marker.cloneNode();
      if (i > 0) {
        const cloneText = text.cloneNode();
        cloneText.innerHTML = compoundValue(i * 20);
        cloneText.setAttribute('y', -i * 20);
        elem.appendChild(cloneText);
      }
    }
    else {
      clone = marker.cloneNode();
    }

    clone.setAttribute('y', -i * 20);
    elem.appendChild(clone);

    i += 1;
  }
}

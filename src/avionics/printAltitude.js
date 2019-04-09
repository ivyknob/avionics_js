import { createElem, compoundValue } from './helpers.js'

const text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
text.setAttribute('x', 27);
text.classList.add('altitude__scale-value');

export default function printAltitude (elem) {
  const marker = createElem('altitude_scale_marker'),
        large_marker = createElem('altitude_scale_large_marker');

  let i = 0;

  while (i <= 10000) {
    let clone;

    if (i % 100 === 0) {
      clone = large_marker.cloneNode();
      const cloneText = text.cloneNode();
      cloneText.innerHTML = i === 0 ? '0' : compoundValue(i);
      cloneText.setAttribute('y', -i);
      elem.appendChild(cloneText);
    }
    else {
      clone = marker.cloneNode();
    }

    clone.setAttribute('y', -i);
    elem.appendChild(clone);

    i += 20;
  }
}

import { createElem } from './helpers.js'

const text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
text.setAttribute('x', -20);
text.classList.add('speed__scale-value');

export default function printSpeed (elem) {
  const marker = createElem('speed_scale_marker'),
        large_marker = createElem('speed_scale_large_marker');
  let i = 0;
  while (i <= 100) {
    let clone;

    if (i % 2 === 0) {
      clone = large_marker.cloneNode();
      const cloneText = text.cloneNode();
      cloneText.textContent = i*5;
      cloneText.setAttribute('y', -i * 40);
      elem.appendChild(cloneText);
    }
    else {
      clone = marker.cloneNode();
    }

    clone.setAttribute('y', -i * 40);
    elem.appendChild(clone);

    i += 1;
  }
}

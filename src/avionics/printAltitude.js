import { pad } from './helpers'
import createElem from './createElem.js'

const setCompoundValue = (value) => {
  const thousands = Math.floor(value/1000);
  return [
    thousands ? `<tspan font-size="1.2em" font-weight="bold">${thousands}</tspan>` : '',
    pad(value%1000, 3)
  ].join("");
}

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
        cloneText.innerHTML = setCompoundValue(i * 20);
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

  if (selectedAltitude) {
    const carriage = createElem('altitude_scale_selected');
    carriage.setAttribute('transform', `translate(0, ${-selectedAltitude})`);
    elem.querySelector('#selected_altitude_bug_value').innerHTML = setCompoundValue(selectedAltitude);
    elem.appendChild(carriage);
  }
}

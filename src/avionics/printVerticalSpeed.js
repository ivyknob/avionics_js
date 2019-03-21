import createElem from './createElem.js'

const text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
text.setAttribute('x', -12);
text.classList.add('vertical-speed__scale-value');

export default function printVerticalSpeed (elem) {
  let i = -15;
  const marker = createElem('vertical_speed_scale_marker');
  const large_marker = createElem('vertical_speed_scale_large_marker');

  while (i <= 15) {
    let clone, cloneText;

    if (i !== 0) {
      if (i % 5 === 0) {
        clone = large_marker.cloneNode();
        const textValue = Math.abs(i);
        if (textValue <= 10) {
          cloneText = text.cloneNode();
          cloneText.textContent = textValue;
          cloneText.setAttribute('y', i * 15);
          elem.appendChild(cloneText);
        }
      } else {
        clone = marker.cloneNode();
      }

      clone.setAttribute('y', i * 15);
      elem.appendChild(clone);
    }

    i += 1;
  }
}

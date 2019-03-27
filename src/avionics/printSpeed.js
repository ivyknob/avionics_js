import createElem from './createElem.js'

const text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
text.setAttribute('x', -20);
text.classList.add('speed__scale-value');

export default function printSpeed (elem, opts) {
  if (typeof opts.min === 'number' && typeof opts.max === 'number' && opts.min < opts.max) {
    const greenLine = elem.querySelector('#speed_green_line'),
      redLine = elem.querySelector('#speed_red_line');

    redLine.setAttribute('y1', 0);
    redLine.setAttribute('y2', 300 * -8);

    greenLine.setAttribute('y1', opts.min * -8);
    greenLine.setAttribute('y2', opts.max * -8);
  }
  let i = 0;
  const large_marker = createElem('speed_scale_large_marker'),
    marker = createElem('speed_scale_marker');

  while (i <= 30) {
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

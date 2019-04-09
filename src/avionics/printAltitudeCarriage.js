import { createElem } from './helpers.js'

export default function printAltitudeCarriage (altitude_scale) {
  const carriage = createElem('altitude_scale_selected');
  altitude_scale.appendChild(carriage);
  carriage.setAttribute('visibility', 'hidden');

  return carriage;
}

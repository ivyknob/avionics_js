export default function createElem(id) {
  const use = document.createElementNS("http://www.w3.org/2000/svg", 'use');
  use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `#${id}`);
  return use;
}

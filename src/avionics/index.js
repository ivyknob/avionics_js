import template from './template.html'
import './styles.css'
import { printPitch, printHeading } from './prints.coffee'

class Avionics {
  constructor(elem) {
    this.elem = elem;
    elem.innerHTML = template;

    this.airspeedElem = elem.querySelector("#airspeed_value");
    this.altitudeElem = elem.querySelector("#altitude_value");
    this.rotor = elem.querySelector("#rotor");
    this.horizont = elem.querySelector("#horizont");
    this.pitchElem = elem.querySelector("#pitch");
    this.roll_triangle = elem.querySelector("#roll_triangle");
    this.heading_scale = elem.querySelector("#heading_scale");
    this.heading_current_value = elem.querySelector("#heading_current_value");

    printPitch(this.pitchElem);
    printHeading(elem.querySelector("#heading_scale"));

    this._rollValue = 0;
    this._pitchValue = 0;
    this._airspeed = 0;
    this._altitube = 0;
    this._currentHeading = 360;
  }

  horizontTransform() {
    if (this.pitch > 90) {
      this.horizont.setAttribute("transform", `rotate(${this.roll}) scale(1,-1) translate(0 ${parseInt(720 - this.pitch*4)})`)
    }
    else if (this.pitch < -90) {
      this.horizont.setAttribute("transform", `rotate(${this.roll}) scale(1,-1) translate(0 ${parseInt(-720 - this.pitch*4)})`)
    }
    else {
      this.horizont.setAttribute("transform", `rotate(${this.roll}) translate(0 ${parseInt(this.pitch*4)})`)
    }
  }

  _pad(number, n) {
    const arr = number.toString().split("");
    return (new Array(n - arr.length)).fill('0').concat(arr).join("");
  }

  set airspeed(value) {
    this._airspeed = value;
    this.airspeedElem.textContent = this._pad(value, 3);
  }

  set altitude(value) {
    this._altitude = value;
    this.altitudeElem.textContent = this._pad(value, 5);
  }

  set roll(value) {
    this._rollValue = parseInt(value);
    this.horizontTransform();
    this.rotor.setAttribute("transform", `rotate(${this._rollValue})`);
    this.pitchElem.setAttribute("transform", `translate(0 ${this._pitchValue*8})`);
    this.roll_triangle.setAttribute("transform", `rotate(${this._rollValue})`);
  }

  get roll() {
    return this._rollValue;
  }

  set pitch(value) {
    this._pitchValue = parseInt(value);
    this.horizontTransform();
    this.rotor.setAttribute("transform", `rotate(${this._rollValue})`);
    this.pitchElem.setAttribute('transform', `translate(0 ${this._pitchValue*8})`);
  }

  get pitch() {
    return this._pitchValue;
  }

  set currentHeading(value) {
    this._currentHeading = (value == 0) ? 360 : value;
    this.heading_current_value.textContent = this._pad(this._currentHeading, 3)

    let delta;
    if (this._currentHeading > 180) {
      delta = (360 - this._currentHeading)*10
    }
    else {
      delta = -this._currentHeading*10
    }
    this.heading_scale.setAttribute("transform", `translate(${delta},22.5)`)
  }

  set groundSpeed (value) {
    ground_speed_value.textContent = value;
  }

  set selectedAltitude (value) {
    selected_altitude_value.textContent = value;
  }

}

global.Avionics = Avionics;
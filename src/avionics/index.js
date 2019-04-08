import template from './template.html'
import './styles.css'
import printPitch from './printPitch.js'
import printHeading from './printHeading.js'
import printSpeed from './printSpeed.js'
import printVerticalSpeed from './printVerticalSpeed.js'
import printAltitude from './printAltitude.js'
import { pad, compoundValue, createElem } from './helpers.js'

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
    this.ground_speed_value = elem.querySelector("#ground_speed_value");
    this.selected_altitude_value = elem.querySelector("#selected_altitude_value");
    this.barometric_setting_value = elem.querySelector("#barometric_setting_value");
    this.speed_scale = elem.querySelector("#speed_scale");
    this.vertical_speed_scale = elem.querySelector("#vertical_speed_scale");
    this.vertical_speed_indicator = elem.querySelector('#vertical_speed_indicator');
    this.vertical_speed_line_indicator = elem.querySelector('#vertical_speed_line_indicator');
    this.altitude_scale = elem.querySelector('#altitude_scale');

    this.altitudeBarrelElem = this.elem.querySelector('#altitude_value_residue');
    this.altitudeBarrelElemCurrent = this.altitudeBarrelElem.querySelector('#altitude_value_residue_current');
    this.altitudeBarrelElemBefore = this.altitudeBarrelElem.querySelector('#altitude_value_residue_before');
    this.altitudeBarrelElemAfter = this.altitudeBarrelElem.querySelector('#altitude_value_residue_after');

    this.airspeedBarrelElem = this.elem.querySelector('#airspeed_value_residue');
    this.airspeedBarrelElemCurrent = this.airspeedBarrelElem.querySelector('#airspeed_value_residue_current');
    this.airspeedBarrelElemBefore = this.airspeedBarrelElem.querySelector('#airspeed_value_residue_before');
    this.airspeedBarrelElemAfter = this.airspeedBarrelElem.querySelector('#airspeed_value_residue_after');

    printPitch(this.pitchElem);
    printHeading(this.heading_scale);
    printSpeed(this.speed_scale, {
      "max": 150,
      "min": 100
    });
    printVerticalSpeed(this.vertical_speed_scale);
    printAltitude(this.altitude_scale);
    this.selectedAltitudeBugValue = this.altitude_scale.querySelector('#selected_altitude_bug_value');
    this.altitudeCarriageElem = this.printAltitudeCarriage(null);

    this._rollValue = 0;
    this._pitchValue = 0;
    this._airspeed = 0;
    this._altitube = 0;
    this._currentHeading = 360;
    this._verticalSpeed = 0;
  }

  printAltitudeCarriage() {
    const carriage = createElem('altitude_scale_selected');
    this.altitude_scale.appendChild(carriage);
    carriage.setAttribute('visibility', 'hidden');

    return carriage;
  }

  horizontTransform() {
    if (this.pitch > 90) {
      this.horizont.setAttribute("transform", `rotate(${this.roll}) scale(1,-1) translate(0 ${parseFloat(720 - this.pitch*4)})`)
    }
    else if (this.pitch < -90) {
      this.horizont.setAttribute("transform", `rotate(${this.roll}) scale(1,-1) translate(0 ${parseFloat(-720 - this.pitch*4)})`)
    }
    else {
      this.horizont.setAttribute("transform", `rotate(${this.roll}) translate(0 ${parseFloat(this.pitch*4)})`)
    }
  }

  set airspeed(value) {
    this._airspeed = value;
    this.speed_scale.setAttribute("transform", `translate(100, ${value*8})`);
    const roundValue = Math.round(value),
          roughRoundValue = roundValue;

    this.airspeedElem.textContent = pad(
      roundValue.toString().split('').slice(0, -1).join(""),
      2
    );

    this.airspeedBarrelElem.setAttribute(
      'transform',
      `translate(56,${(value-roundValue)*46})`
    );

    this.airspeedBarrelElemCurrent.textContent = pad(roughRoundValue, 1);
    this.airspeedBarrelElemBefore.textContent = pad(roughRoundValue - 1, 1);
    this.airspeedBarrelElemAfter.textContent = pad(roughRoundValue + 1, 1);
  }

  set altitude(value) {
    this._altitude = value;
    const roundValue = Math.round(value),
          roughRoundValue = Math.round(roundValue/20)*20;
    this.altitudeElem.textContent = pad(
      roundValue.toString().split('').slice(0, -2).join(""),
      3
    );

    this.altitudeBarrelElem.setAttribute(
      'transform',
      `translate(102,${(value-roughRoundValue)*1.7})`
    );
    this.altitudeBarrelElemCurrent.textContent = pad(roughRoundValue, 2);
    this.altitudeBarrelElemBefore.textContent = pad(roughRoundValue - 20, 2);
    this.altitudeBarrelElemAfter.textContent = pad(roughRoundValue + 20, 2);
    this.altitude_scale.setAttribute('transform', `translate(0, ${value})`);
  }

  set roll(value) {
    this._rollValue = parseFloat(value);
    this.horizontTransform();
    this.rotor.setAttribute("transform", `rotate(${this._rollValue})`);
    this.pitchElem.setAttribute("transform", `translate(0 ${this._pitchValue*8})`);
    this.roll_triangle.setAttribute("transform", `rotate(${this._rollValue})`);
  }

  get roll() {
    return this._rollValue;
  }

  set pitch(value) {
    this._pitchValue = parseFloat(value);
    this.horizontTransform();
    this.rotor.setAttribute("transform", `rotate(${this._rollValue})`);
    this.pitchElem.setAttribute('transform', `translate(0 ${this._pitchValue*8})`);
  }

  get pitch() {
    return this._pitchValue;
  }

  set verticalSpeed(value) {
    this._verticalSpeed = value;
    this.vertical_speed_indicator.setAttribute("transform", `translate(0, ${-this._verticalSpeed*15})`);
    this.vertical_speed_line_indicator.setAttribute('y2', -this._verticalSpeed*15);
  }

  set currentHeading(value) {
    this._currentHeading = (value == 0) ? 360 : value;
    this.heading_current_value.textContent = pad(this._currentHeading, 3)

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
    this.ground_speed_value.textContent = Math.round(value);
  }

  set selectedAltitude (value) {
    const roundValue = Math.round(value);
    this.selected_altitude_value.textContent = roundValue;

    if (value === null) {
      this.altitudeCarriageElem.setAttribute('visibility', 'hidden');
    }
    else {
      this.altitudeCarriageElem.setAttribute('visibility', 'visible');
      this.altitudeCarriageElem.setAttribute('transform', `translate(0, ${-value})`);
      this.selectedAltitudeBugValue.innerHTML = compoundValue(roundValue);
    }
  }

  set barometricSetting (value) {
    this.barometric_setting_value.textContent = value.toFixed(2);
  }

}

/* global global */
/* eslint no-undef: "error" */

global.Avionics = Avionics;

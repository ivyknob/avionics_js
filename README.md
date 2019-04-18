# Avionics JS [![Build Status](https://travis-ci.org/ivyknob/avionics_js.svg?branch=master)](https://travis-ci.org/ivyknob/avionics_js) [![Maintainability](https://api.codeclimate.com/v1/badges/80ccb6e63a5ac25bbab0/maintainability)](https://codeclimate.com/github/ivyknob/avionics_js/maintainability) [![npm](https://img.shields.io/npm/v/@ivyknob/avionics_js.svg)](https://www.npmjs.com/package/@ivyknob/avionics_js)

JavaScript library to make glass EFIS from any phone or tablet. Inspired by Garmin G5.
Made by Ivy Knob.

[Live Demo](https://ivyknob.github.io/avionics_js/dist/demo.html)

## Installation

* Add `@ivyknob/avionics_js` to your project (`npm -i @ivyknob/avionics_js` or `yarn add @ivyknob/avionics_js`)
* Run `yarn` or `npm install` to install all necessary libraries
* Include avionics.js to your project

### Using CDN

If you want to just include js on your page from the hosting, just add `https://unpkg.com/@ivyknob/avionics_js` as a script source

## Usage

### Quickstart example

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Avionics JS</title>
  <script type="text/javascript" defer src="https://unpkg.com/@ivyknob/avionics_js"></script>
  <script type="text/javascript">
    document.addEventListener("DOMContentLoaded", function() {
      var avionics = new Avionics(document.body);
      avionics.pitch = 10;
      avionics.roll = 5;
      avionics.heading = 300;
      avionics.altitude = 800;
      avionics.airspeed = 150;
      avionics.selectedAltitude = 1000;
      avionics.verticalSpeed = 2;
      avionics.groundSpeed = 130;
      avionics.qnh = 1030.15;
    })
  </script>
</head>
<body>
</body>
</html>
```

Look at the examples code [here](https://github.com/ivyknob/avionics_js/blob/master/src/demo.coffee)

### Initialization

At first, you need to assign avionics.js to html element:

```js
var avionics = new Avionics(nodeElement);
```

After initialization, you can set values:

```js
avionics.pitch = 10;
```

### API

Here is the list of available setter-methods: 

| Available setter-methods |
| :--- |
| airspeed |
| altitude |
| roll |
| pitch |
| verticalSpeed |
| heading |
| groundSpeed |
| selectedAltitude |
| qnh |

```js
// You can run it in browser console to see current available methods
Object.getOwnPropertyNames(avionics.__proto__).filter(i => !i.startsWith('_') && i !== 'constructor')
```

#### Roll

Roll value of the aircraft, deg. Increase roll value to proceed counter clockwise rotation, negative for clockwise. Acceptable values from -180 to 180 deg. Setter name: `roll`.

#### Pitch

Pitch values of the aircraft, def. Nose up is for upper semisphere, down for lower. Acceptable values from -180 to 180 deg. Setter name: `roll`.

#### Airspeed

Indicates airspeed, knots, m/h or km/h. Can show values from 0 to 500. Setter name: `airspeed`.

#### Altitude

Shows altitude, feet or m. Can show values from -10000 to 10000 (but scale only starts from 0). Values below zero is possible with different settings of qnh. Setter name: `altitude`.

#### Vertical speed (VSI)

Gives rate information for the climb or descent, m/s. Usually in the range −30 to +30 m/s (-6000 to +6000 fpm). Setter name: `verticalSpeed`.

#### Heading

Shows heading of the aircraft, similar to a magnetic compass, deg. North direction corresponds to zero angle. Setter name: `heading`.

#### Ground speed

Indicates ground speed, knots, m/h or km/h. Can show values _from 0 to 500_ (why???). Setter name: `groundSpeed`.

#### Selected altitude

Shows selected altitude, feet or m. Can show values from -10000 to 10000 (but scale only starts from 0). Values below zero is possible with different settings of qnh. Setter name: `selected Altitude`.

#### QNH

Shows QNH: the pressure measured at station then reduced down to mean sea level pressure; mmHg, inHg, _hPA_. Can show values from -900 to 1200 (hPa). Setter name: `qnh`.


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.

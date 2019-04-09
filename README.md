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

Look at the examples code [here](https://github.com/ivyknob/avionics_js/blob/master/src/demo.coffee)

### Initialization and usage
```js
var avionics = new Avionics(nodeElement);
avionics.selectedAltitude = 100;
```

### API
| Available setter-methods |
| :--- |
| airspeed |
| altitude |
| roll |
| pitch |
| verticalSpeed |
| currentHeading |
| groundSpeed |
| selectedAltitude |
| barometricSetting |

```js
// You can run it in browser console to see current available methods
Object.getOwnPropertyNames(avionics.__proto__).filter(i => !i.startsWith('_') && i !== 'constructor')
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.

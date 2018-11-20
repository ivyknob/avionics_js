import { printPitch, printHeading } from './prints.coffee'

global.Avionics =
  _rollValue: 0
  _pitchValue: 0
  _airspeed: 0
  _altitube: 0
  _currentHeading: 360
  airspeedElem: airspeed_value
  altitudeElem: altitude_value
  rotor: rotor
  horizont: horizont
  pitchElem: pitch
  roll_triangle: roll_triangle
  _pad: (number, n)->
    arr = number.toString().split("")
    (new Array(n - arr.length)).fill('0').concat(arr).join("")

Object.defineProperty Avionics, 'airspeed',
  set: (value)->
    this._airspeed = value
    this.airspeedElem.textContent = @_pad(value, 3)

Object.defineProperty Avionics, 'altitude',
  set: (value)->
    this._altitude = value
    this.altitudeElem.textContent = @_pad(value, 5)

Object.defineProperty Avionics, 'roll',
  set: (value)->
    this._rollValue = value
    @horizont.setAttribute("transform", "rotate(#{@_rollValue}) translate(0 #{parseInt(@_pitchValue*0.5)})")
    @rotor.setAttribute("transform", "rotate(#{@_rollValue})")
    @pitchElem.setAttribute("transform", "translate(0 #{parseInt(@_pitchValue)})")
    @roll_triangle.setAttribute("transform", "rotate(#{@_rollValue})")
  get: ->
    this._rollValue

Object.defineProperty Avionics, 'pitch',
  set: (value)->
    this._pitchValue = value
    @horizont.setAttribute("transform", "rotate(#{@_rollValue}) translate(0 #{parseInt(@_pitchValue*0.5)})")
    @rotor.setAttribute("transform", "rotate(#{@_rollValue})")
    @pitchElem.setAttribute("transform", "translate(0 #{parseInt(@_pitchValue)})")
  get: ->
    this._pitchValue

Object.defineProperty Avionics, 'currentHeading',
  set: (value)->
    @_currentHeading = if value == 0
      360
    else
      value
    heading_current_value.textContent = @_pad(@_currentHeading, 3)
    delta = if @_currentHeading > 180
      (360 - @_currentHeading)*10
    else
      -@_currentHeading*10
    heading_scale.setAttribute("transform", "translate(#{delta},5)")

document.onkeydown = (e) =>
  switch e.keyCode
    when 37
      Avionics.roll -= 2
    when 39
      Avionics.roll += 2
    when 38
      Avionics.pitch += 8
    when 40
      Avionics.pitch -= 8

do printPitch
do printHeading

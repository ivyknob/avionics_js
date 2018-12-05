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
  horizontTransform: ->
    if @pitch > 90
      @horizont.setAttribute("transform", "rotate(#{@roll}) scale(1,-1) translate(0 #{parseInt(720 - @pitch*4)})")
    else if @pitch < -90
      @horizont.setAttribute("transform", "rotate(#{@roll}) scale(1,-1) translate(0 #{parseInt(-720 - @pitch*4)})")
    else
      @horizont.setAttribute("transform", "rotate(#{@roll}) translate(0 #{parseInt(@pitch*4)})")
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
    @_rollValue = parseInt(value)
    @horizontTransform()
    @rotor.setAttribute("transform", "rotate(#{@_rollValue})")
    @pitchElem.setAttribute("transform", "translate(0 #{@_pitchValue*8})")
    @roll_triangle.setAttribute("transform", "rotate(#{@_rollValue})")
  get: ->
    this._rollValue

Object.defineProperty Avionics, 'pitch',
  set: (value)->
    @_pitchValue = parseInt(value)
    @horizontTransform()
    @rotor.setAttribute("transform", "rotate(#{@_rollValue})")
    @pitchElem.setAttribute("transform", "translate(0 #{@_pitchValue*8})")
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
    heading_scale.setAttribute("transform", "translate(#{delta},22.5)")

Object.defineProperty Avionics, 'groundSpeed',
  set: (value)->
    ground_speed_value.textContent = value

Object.defineProperty Avionics, 'selectedAltitude',
  set: (value)->
    selected_altitude_value.textContent = value

document.onkeydown = (e) =>
  switch e.keyCode
    when 37
      new_roll = Avionics.roll - 2
      if new_roll < -180
        Avionics.roll = new_roll + 360
      else
        Avionics.roll -= 2
    when 39
      new_roll = Avionics.roll + 2
      if new_roll > 180
        Avionics.roll = new_roll - 360
      else
        Avionics.roll += 2
    when 38
      new_pitch = Avionics.pitch + 1
      if new_pitch > 180
        Avionics.pitch = new_pitch-360
      else if new_pitch < -180
        Avionics.pitch = new_pitch+360
      else
        Avionics.pitch = new_pitch
    when 40
      new_pitch = Avionics.pitch - 1
      if new_pitch < -180
        Avionics.pitch = new_pitch+360
      else if new_pitch > 180
        Avionics.pitch = new_pitch-360
      else
        Avionics.pitch = new_pitch

do printPitch
do printHeading

global.Avionics =
  _rollValue: 0
  _pitchValue: 0
  airspeedElem: airspeed_value
  _airspeed: 0
  altitudeElem: altitude_value
  rotor: rotor
  roll_triangle: roll_triangle
  _altitube: 0
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
    @rotor.setAttribute("transform", "rotate(#{@_rollValue}) translate(0 #{parseInt(@_pitchValue)})")
    @roll_triangle.setAttribute("transform", "rotate(#{@_rollValue})")
  get: ->
    this._rollValue

Object.defineProperty Avionics, 'pitch',
  set: (value)->
    this._pitchValue = value
    @rotor.setAttribute("transform", "rotate(#{@_rollValue}) translate(0 #{parseInt(@_pitchValue)})")
  get: ->
    this._pitchValue

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

do ->
  large = document.createElementNS("http://www.w3.org/2000/svg", 'use');
  large.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#large-pitch');
  medium = document.createElementNS("http://www.w3.org/2000/svg", 'use');
  medium.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#medium-pitch');
  small = document.createElementNS("http://www.w3.org/2000/svg", 'use');
  small.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#small-pitch');
  textLeft = document.createElementNS("http://www.w3.org/2000/svg", 'text');
  textLeft.style.fill = 'white';
  textLeft.style.fontWeight = 'bold';
  textLeft.setAttribute('dy', 5);
  textRight = textLeft.cloneNode();
  textLeft.setAttribute('text-anchor', 'end');
  textLeft.setAttribute('x', -45);
  textRight.setAttribute('x', 45);

  i = -180
  while i <= 180
    if i == 0
      i += 2.5
      continue
    else if i % 10 == 0
      use = large.cloneNode()
      texts = [
        textLeft.cloneNode()
        textRight.cloneNode()
      ]
      texts.forEach (text) ->
        text.textContent = Math.abs(i)
        text.setAttribute 'y', -i * 8
        rotor.appendChild text
        return
    else if i % 5 == 0
      use = medium.cloneNode()
    else if i % 2.5 == 0
      use = small.cloneNode()
    use.setAttribute 'y', i * 8
    rotor.appendChild use
    i += 2.5

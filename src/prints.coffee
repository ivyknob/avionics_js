printPitch = ->
  large = document.createElementNS("http://www.w3.org/2000/svg", 'use')
  large.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#large-pitch')
  medium = document.createElementNS("http://www.w3.org/2000/svg", 'use')
  medium.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#medium-pitch')
  small = document.createElementNS("http://www.w3.org/2000/svg", 'use')
  small.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#small-pitch')
  textLeft = document.createElementNS("http://www.w3.org/2000/svg", 'text')
  textLeft.style.fill = 'white'
  textLeft.style.fontWeight = 'bold'
  textLeft.setAttribute('dy', 5)
  textRight = textLeft.cloneNode()
  textLeft.setAttribute('text-anchor', 'end')
  textLeft.setAttribute('x', -45)
  textRight.setAttribute('x', 45)

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
        pitch.appendChild text
        return
    else if i % 5 == 0
      use = medium.cloneNode()
    else if i % 2.5 == 0
      use = small.cloneNode()
    use.setAttribute 'y', i * 8
    pitch.appendChild use
    i += 2.5

printHeading = ->
  marker = document.createElementNS("http://www.w3.org/2000/svg", 'use')
  marker.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#heading_scale_marker')

  large_marker = document.createElementNS("http://www.w3.org/2000/svg", 'use')
  large_marker.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#heading_scale_large_marker')

  text = document.createElementNS("http://www.w3.org/2000/svg", 'text')
  text.style.fill = '#fff'
  text.style.fontSize = '8px'
  text.style.fontWeight = 'bold'
  text.setAttribute('text-anchor', 'middle')
  text.setAttribute('y', -10)

  i = -180
  while i <= 180
    if i%10 == 0
      clone = large_marker.cloneNode()
      cloneText = text.cloneNode()
      cloneText.setAttribute 'x', i*10
      cloneText.textContent = if i <= 0 then 360 + i else i
      heading_scale.appendChild cloneText
    else if i%5 == 0
      clone = large_marker.cloneNode()
      cloneText = text.cloneNode()
    else
      clone = marker.cloneNode()
    clone.setAttribute 'x', i*10
    heading_scale.appendChild clone
    i += 1

export { printPitch, printHeading }

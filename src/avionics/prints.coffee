printPitch = (elem)->
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

  i = -220
  while i <= 220
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
        value = Math.abs(i)
        text.textContent = if value > 180 then 360 - value else value
        text.setAttribute 'y', -i * 8
        elem.appendChild text
        return
    else if i % 5 == 0
      use = medium.cloneNode()
    else if i % 2.5 == 0
      use = small.cloneNode()
    use.setAttribute 'y', i * 8
    elem.appendChild use
    i += 2.5

printHeading = (elem)->
  marker = document.createElementNS("http://www.w3.org/2000/svg", 'use')
  marker.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#heading_scale_marker')

  large_marker = document.createElementNS("http://www.w3.org/2000/svg", 'use')
  large_marker.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#heading_scale_large_marker')

  text = document.createElementNS("http://www.w3.org/2000/svg", 'text')
  text.style.fill = '#fff'
  text.style.fontSize = '16px'
  text.style.fontWeight = 'bold'
  text.setAttribute('text-anchor', 'middle')
  text.setAttribute('y', -10)

  i = -200
  while i <= 200
    if i%10 == 0
      clone = large_marker.cloneNode()
      cloneText = text.cloneNode()
      cloneText.setAttribute 'x', i*10
      cloneText.textContent = if i <= 0 then 360 + i else i
      elem.appendChild cloneText
    else if i%5 == 0
      clone = large_marker.cloneNode()
      cloneText = text.cloneNode()
    else
      clone = marker.cloneNode()
    clone.setAttribute 'x', i*10
    elem.appendChild clone
    i += 1

export { printPitch, printHeading }

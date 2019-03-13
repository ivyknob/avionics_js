document.addEventListener 'keydown', (e) =>
  switch e.keyCode
    when 37
      new_roll = Avionics.roll - 2
      if new_roll < -180
        avionics.roll = new_roll + 360
      else
        avionics.roll -= 2
    when 39
      new_roll = avionics.roll + 2
      if new_roll > 180
        avionics.roll = new_roll - 360
      else
        avionics.roll += 2
    when 38
      new_pitch = avionics.pitch + 1
      if new_pitch > 180
        avionics.pitch = new_pitch-360
      else if new_pitch < -180
        avionics.pitch = new_pitch+360
      else
        avionics.pitch = new_pitch
    when 40
      new_pitch = avionics.pitch - 1
      if new_pitch < -180
        avionics.pitch = new_pitch+360
      else if new_pitch > 180
        avionics.pitch = new_pitch-360
      else
        avionics.pitch = new_pitch

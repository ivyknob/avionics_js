document.addEventListener 'keydown', (e) =>
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

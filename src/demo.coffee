DATA_TABLE = [
  { ts: 0, as: 0, gs: 0, p: 5, r: 0, h: 35, sh: 35, a: 0, sa: 0, abp: 1013.05, vsi: 0.0 },
  { ts: 10, as: 70, gs: 70, p: 2, r: 0, h: 35, sh: 35, a: 0, sa: 0, abp: 1013.05, vsi: 0.0 },
  { ts: 13, as: 90, gs: 85, p: 10, r: 0, h: 35, sh: 35, a: 5, sa: 1000, abp: 1013.05, vsi: 1.5 },
  { ts: 14, as: 91, gs: 86, p: 10, r: -5, h: 35, sh: 35, a: 6, sa: 1000, abp: 1013.05, vsi: 1.5 },
  { ts: 60, as: 110, gs: 100, p: 10, r: -5, h: 300, sh: 300, a: 146, sa: 1000, abp: 1013.05, vsi: 3.0 },
  { ts: 61, as: 110, gs: 100, p: 10, r: 0, h: 300, sh: 300, a: 149, sa: 1000, abp: 1013.05, vsi: 3.0 },
  { ts: 120, as: 120, gs: 110, p: 10, r: 0, h: 300, sh: 300, a: 1000, sa: 1000, abp: 1013.05, vsi: 3.0 },
  { ts: 121, as: 120, gs: 110, p: 0, r: 0, h: 300, sh: 300, a: 1000, sa: 1000, abp: 1013.05, vsi: 0.0 },
  { ts: 170, as: 60, gs: 60, p: -10, r: 0, h: 300, sh: 300, a: 0, sa: 0, abp: 1013.05, vsi: -3.0 },
  { ts: 171, as: 50, gs: 50, p: 2, r: 0, h: 300, sh: 300, a: 0, sa: 0, abp: 1013.05, vsi: 0.0 },
  { ts: 180, as: 0, gs: 0, p: 5, r: 0, h: 300, sh: 300, a: 0, sa: 0, abp: 1013.05, vsi: 0.0 }
]

current_tick = -> Date.now()%180000/1000

interpolation = (current_ts, min, max, attribute)->
  min[attribute] + ((max[attribute] - min[attribute]) / (max.ts - min.ts)) * (current_ts - min.ts)

createData = ->
  ct = current_tick()
  min = DATA_TABLE.filter( (i) => i.ts <= ct ).sort((a,b) => b.ts-a.ts)[0]
  max = DATA_TABLE.filter( (i) => i.ts >= ct ).sort((a,b) => a.ts-b.ts)[0]

  {
    pitch: interpolation(ct, min, max, 'p'),
    roll: interpolation(ct, min, max, 'r'),
    airspeed: interpolation(ct, min, max, 'as'),
    groundSpeed: interpolation(ct, min, max, 'gs'),
    currentHeading: interpolation(ct, min, max, 'h'),
    # selected_heading: interpolation(ct, min, max, 'sh'),
    altitude: interpolation(ct, min, max, 'a'),
    selectedAltitude: min.sa,
    barometricSetting: interpolation(ct, min, max, 'abp'),
    verticalSpeed: interpolation(ct, min, max, 'vsi')
  }

setInterval ->
  Object.assign(avionics, createData())
, 50

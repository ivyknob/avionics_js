module Avionics
  DATA_TABLE = [
    { ts: 0, as: 0, gs: 0, p: 5, r: 0, h: 35, sh: 35, a: 0, sa: 0, abp: 100.0, vsi: 0.0 },
    { ts: 10, as: 70, gs: 70, p: 2, r: 0, h: 35, sh: 35, a: 0, sa: 0, abp: 100.0, vsi: 0.0 },
    { ts: 13, as: 90, gs: 85, p: 10, r: 0, h: 35, sh: 35, a: 5, sa: 1000, abp: 100.0, vsi: 1.5 },
    { ts: 14, as: 91, gs: 86, p: 10, r: 5, h: 35, sh: 35, a: 6, sa: 1000, abp: 100.0, vsi: 1.5 },
    { ts: 60, as: 110, gs: 100, p: 10, r: 5, h: 300, sh: 300, a: 146, sa: 1000, abp: 100.0, vsi: 3.0 },
    { ts: 120, as: 120, gs: 110, p: 10, r: 0, h: 300, sh: 300, a: 1000, sa: 1000, abp: 100.0, vsi: 3.0 },
    { ts: 121, as: 120, gs: 110, p: 0, r: 0, h: 300, sh: 300, a: 1000, sa: 1000, abp: 100.0, vsi: 0.0 },
    { ts: 180, as: 0, gs: 0, p: 0, r: 0, h: 300, sh: 300, a: 0, sa: 0, abp: 100.0, vsi: -3.0 },
  ]

  def current_tick
    Time.now.to_f % 180.0
  end

  def interpolation(current_ts, min, max, attribute)
    min[attribute].to_f + ((max[attribute].to_f - min[attribute].to_f) / (max[:ts].to_f - min[:ts].to_f)) * (current_ts.to_f - min[:ts].to_f)
  end

  def data
    ct = current_tick
    min = DATA_TABLE.select { |i| i[:ts] <= current_tick }.sort { |a, b| a[:ts] <=> b[:ts] }.last
    max = DATA_TABLE.select { |i| i[:ts] >= current_tick }.sort { |a, b| a[:ts] <=> b[:ts] }.first
    {
      pitch: interpolation(ct, min, max, :pitch),
      roll: interpolation(ct, min, max, :roll),
      airspeed: interpolation(ct, min, max, :as),
      groudspeed: interpolation(ct, min, max, :gs),
      heading: interpolation(ct, min, max, :h),
      selected_heading: interpolation(ct, min, max, :hs),
      altitude: interpolation(ct, min, max, :altitude),
      selected_altitude: interpolation(ct, min, max, :sa),
      altimeter_barometric_parameter: interpolation(ct, min, max, :abp),
      vertical_speed: interpolation(ct, min, max, :vsi),
      ts: ct
    }
  end

  def on_open(client)
    client.write("Hello")
    while true do
      client.write(data)
      sleep 0.05
    end
  end

  def on_message(client, data)
    client.publish('chat', data)
  end
  extend(self)
end

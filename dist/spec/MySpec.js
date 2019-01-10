describe("Avionics specs", function() {

  beforeEach(function() {
    loadFixtures("../../../index.html");
  });

  it('Global object "Avionics" to be defined', function() {
    expect(Avionics).toBeDefined();
  });

  it('Check set airspeed', function() {
    Avionics.airspeed = 999;
    expect(airspeed_value.textContent).toEqual('999');

    Avionics.airspeed = 99;
    expect(airspeed_value.textContent).toEqual('099');
  });

  it('Check set altitude', function() {
    Avionics.altitude = 12345;
    expect(altitude_value.textContent).toEqual('12345');

    Avionics.altitude = 123;
    expect(altitude_value.textContent).toEqual('00123');
  });

  it('Check set roll', function() {
    Avionics.roll = 10;
    expect(horizont.getAttribute('transform')).toEqual("rotate(10) translate(0 0)");
    expect(rotor.getAttribute("transform")).toEqual("rotate(10)");
    expect(pitch.getAttribute("transform")).toEqual("translate(0 0)");
    expect(roll_triangle.getAttribute("transform")).toEqual("rotate(10)");
  });

  it('Check set pitch', function() {
    Avionics.pitch = 5;
    expect(horizont.getAttribute('transform')).toEqual("rotate(0) translate(0 20)");
    expect(rotor.getAttribute("transform")).toEqual("rotate(0)");
    expect(pitch.getAttribute("transform")).toEqual("translate(0 40)");
  });

  it('Check set roll and pitch together', function() {
    Avionics.roll = 10;
    Avionics.pitch = 5;
    expect(horizont.getAttribute('transform')).toEqual("rotate(10) translate(0 20)");
    expect(rotor.getAttribute("transform")).toEqual("rotate(10)");
    expect(pitch.getAttribute("transform")).toEqual("translate(0 40)");
    expect(roll_triangle.getAttribute("transform")).toEqual("rotate(10)");
  });

  it('Check set currentHeading', function() {
    Avionics.currentHeading = 350;
    expect(heading_current_value.textContent).toEqual('350');
    expect(heading_scale.getAttribute("transform")).toEqual("translate(100,22.5)");

    Avionics.currentHeading = 50;
    expect(heading_current_value.textContent).toEqual('050');
    expect(heading_scale.getAttribute("transform")).toEqual("translate(-500,22.5)");
  });

  it('Check set groundSpeed', function() {
    Avionics.groundSpeed = 257
    expect(ground_speed_value.textContent).toEqual('257');
  });

  it('Check set selectedAltitude', function() {
    Avionics.selectedAltitude = 345
    expect(selected_altitude_value.textContent).toEqual('345');
  });

});

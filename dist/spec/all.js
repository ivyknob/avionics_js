describe("Avionics specs", function() {

  it('Global object "Avionics" to be defined', function() {
    expect(Avionics).toBeDefined();
  });

  describe("with real draw", function(){
    function createAvionics() {
      const div = document.createElement("div");
      div.id = 'app';

      document.body.appendChild(div);
      return new Avionics(document.querySelector('#app'));
    }

    function removeChild(avionics) {
      document.body.removeChild(avionics.elem);
    };

    it('Check set airspeed', function() {
      const avionics = createAvionics();

      avionics.airspeed = 999.1;
      expect(avionics.elem.querySelector('#airspeed_value').textContent).toEqual('999');

      avionics.airspeed = 98.9;
      expect(avionics.elem.querySelector('#airspeed_value').textContent).toEqual('099');
      removeChild(avionics);
    });

    it('Check set altitude', function() {
      const avionics = createAvionics();

      avionics.altitude = 12345.32;
      expect(avionics.elem.querySelector("#altitude_value").textContent).toEqual('123');
      expect(avionics.elem.querySelector("#altitude_value_residue_current").textContent).toEqual('40');

      avionics.altitude = 123.23;
      expect(avionics.elem.querySelector("#altitude_value").textContent).toEqual('001');
      expect(avionics.elem.querySelector("#altitude_value_residue_current").textContent).toEqual('20');
      removeChild(avionics);
    });

    it('Check set roll', function() {
      const avionics = createAvionics();

      avionics.roll = 10;
      expect(avionics.horizont.getAttribute('transform')).toEqual("rotate(10) translate(0 0)");
      expect(avionics.rotor.getAttribute("transform")).toEqual("rotate(10)");
      expect(avionics.pitchElem.getAttribute("transform")).toEqual("translate(0 0)");
      expect(avionics.roll_triangle.getAttribute("transform")).toEqual("rotate(10)");
      removeChild(avionics);
    });

    it('Check set pitch', function() {
      const avionics = createAvionics();

      avionics.pitch = 5.1;
      expect(avionics.horizont.getAttribute('transform')).toEqual("rotate(0) translate(0 20.4)");
      expect(avionics.rotor.getAttribute("transform")).toEqual("rotate(0)");
      expect(avionics.pitchElem.getAttribute("transform")).toEqual("translate(0 40.8)");
      removeChild(avionics);
    });

    it('Check set roll and pitch together', function() {
      const avionics = createAvionics();
      avionics.roll = 10.2;
      avionics.pitch = 5.1;

      expect(avionics.horizont.getAttribute('transform')).toEqual("rotate(10.2) translate(0 20.4)");
      expect(avionics.rotor.getAttribute("transform")).toEqual("rotate(10.2)");
      expect(avionics.pitchElem.getAttribute("transform")).toEqual("translate(0 40.8)");
      expect(avionics.roll_triangle.getAttribute("transform")).toEqual("rotate(10.2)");
      removeChild(avionics);
    });

    it('Check set currentHeading', function() {
      const avionics = createAvionics();
      avionics.currentHeading = 350.25;
      expect(avionics.heading_current_value.textContent).toEqual('350');
      expect(avionics.heading_scale.getAttribute("transform")).toEqual("translate(97.5,22.5)");

      avionics.currentHeading = 50.2;
      expect(avionics.heading_current_value.textContent).toEqual('050');
      expect(avionics.heading_scale.getAttribute("transform")).toEqual("translate(-502,22.5)");
      removeChild(avionics);
    });

    it('Check set groundSpeed', function() {
      const avionics = createAvionics();
      avionics.groundSpeed = 257.2
      expect(avionics.elem.querySelector("#ground_speed_value").textContent).toEqual('257');
      removeChild(avionics);
    });

    it('Check set selectedAltitude', function() {
      const avionics = createAvionics();
      avionics.selectedAltitude = 344.9
      expect(avionics.elem.querySelector("#selected_altitude_value").textContent).toEqual('345');
      removeChild(avionics);
    });
  })

});

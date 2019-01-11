var websocket = new WebSocket('ws://'+location.hostname+'/');

websocket.onopen = function(evt) {
  console.log('WebSocket connection opened');
}

websocket.onmessage = function(evt) {
  console.log(evt.data);
  var data = JSON.parse(evt.data);
  avionics.roll = data.roll;
  avionics.pitch = data.pitch;
  avionics.currentHeading = data.heading;
}

websocket.onclose = function(evt) {
  console.log('Websocket connection closed');
}

websocket.onerror = function(evt) {
  console.log('Websocket error: ' + evt);
}

var websocket = new WebSocket('ws://'+location.hostname+'/');

websocket.onopen = function(evt) {
  console.log('WebSocket connection opened');
}

websocket.onmessage = function(evt) {
  console.log(evt.data);
  const data = JSON.parse(evt.data);
  Avionics.roll = data.roll;
  Avionics.pitch = data.pitch;
}

websocket.onclose = function(evt) {
  console.log('Websocket connection closed');
}

websocket.onerror = function(evt) {
  console.log('Websocket error: ' + evt);
}

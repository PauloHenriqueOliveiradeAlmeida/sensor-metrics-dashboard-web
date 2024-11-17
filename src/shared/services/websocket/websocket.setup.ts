const websocket = new WebSocket(import.meta.env.VITE_WEBSOCKET_URL);

websocket.onopen = () => {
  console.log("WebSocket connection opened");
};

export { websocket };

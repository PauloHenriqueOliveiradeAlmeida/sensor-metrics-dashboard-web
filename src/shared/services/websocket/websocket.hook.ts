import { websocket } from "./websocket.setup";

export function useWebsocket() {
  const websocketClient = websocket;

  const subscribe = <T>(callback: (payload: T) => void) => {
    websocketClient.addEventListener("message", (event) => {
      const payload = JSON.parse(event.data);
      callback(payload);
    });
  };

  return { handlers: { subscribe } };
}

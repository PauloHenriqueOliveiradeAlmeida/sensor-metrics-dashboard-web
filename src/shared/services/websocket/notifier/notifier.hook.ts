import { useWebsocket } from "../websocket.hook";
import { UpdateSensorMetricsModel } from "./models/update-sensor-metrics.model";

export function useNotifier() {
  const {
    handlers: { subscribe },
  } = useWebsocket();

  const onUpdateSensorMetrics = (
    callback: (payload: UpdateSensorMetricsModel) => void,
  ) => {
    subscribe(callback);
  };

  return { handlers: { onUpdateSensorMetrics } };
}

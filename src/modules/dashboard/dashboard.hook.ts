import { useState } from "react";
import { useNotifier } from "../../shared/services/websocket/notifier/notifier.hook";
import { ICorrelationMetrics, ISensorMetrics } from "./dashboard.interface";

export function useDashboard() {
  const [temperatureMetrics, setTemperatureMetrics] =
    useState<ISensorMetrics>();
  const [humidityMetrics, setHumidityMetrics] = useState<ISensorMetrics>();
  const [correlationMetrics, setCorrelationMetrics] = useState<
    ICorrelationMetrics[]
  >([]);
  const [tempeatureStandardDeviation, setTemperatureStandardDeviation] =
    useState<number>();
  const [humidityStandardDeviation, setHumidityStandardDeviation] =
    useState<number>();

  const {
    handlers: { onUpdateSensorMetrics },
  } = useNotifier();

  onUpdateSensorMetrics((payload) => {
    const resizedHumidityMetrics = resizeData(
      payload.temperature_metrics,
      payload.humidity_metrics,
    );

    const resizedTemperatureMetrics = resizeData(
      payload.humidity_metrics,
      payload.temperature_metrics,
    );

    setCorrelationMetrics(
      payload.temperature_metrics.map((_, index) => ({
        temperature: resizedTemperatureMetrics[index],
        humidity: resizedHumidityMetrics[index],
      })),
    );
    setTemperatureMetrics({
      name: "Temperatura",
      average:
        payload.temperature_metrics.reduce((a, b) => a + b, 0) /
        payload.temperature_metrics.length,
      standardDeviation: payload.temperature_standard_deviation,
      min: Math.min(...payload.temperature_metrics),
      max: Math.max(...payload.temperature_metrics),
    });
    setHumidityMetrics({
      name: "Umidade",
      average:
        payload.humidity_metrics.reduce((a, b) => a + b, 0) /
        payload.humidity_metrics.length,
      standardDeviation: payload.humidity_standard_deviation,
      min: Math.min(...payload.humidity_metrics),
      max: Math.max(...payload.humidity_metrics),
    });
    setTemperatureStandardDeviation(payload.temperature_standard_deviation);
    setHumidityStandardDeviation(payload.humidity_standard_deviation);
  });

  const resizeData = (firstData: number[], secondData: number[]) => {
    if (firstData.length > secondData.length) {
      secondData = Array.from(
        {
          length: firstData.length,
        },
        (_, index) => secondData[index % secondData.length],
      );
    }

    return secondData;
  };

  return {
    states: {
      temperatureMetrics,
      humidityMetrics,
      correlationMetrics,
      tempeatureStandardDeviation,
      humidityStandardDeviation,
    },
  };
}

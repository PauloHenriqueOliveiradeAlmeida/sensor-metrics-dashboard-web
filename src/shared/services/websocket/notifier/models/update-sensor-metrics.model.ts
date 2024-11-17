export interface UpdateSensorMetricsModel {
  temperature_metrics: number[];
  humidity_metrics: number[];
  temperature_standard_deviation: number;
  humidity_standard_deviation: number;
  correlation: number;
}

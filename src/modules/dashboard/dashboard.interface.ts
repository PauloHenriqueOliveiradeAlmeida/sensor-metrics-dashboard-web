export interface ICorrelationMetrics {
  temperature: number;
  humidity: number;
}

export interface ISensorMetrics {
  name: string;
  average: number;
  standardDeviation: number;
  min: number;
  max: number;
}

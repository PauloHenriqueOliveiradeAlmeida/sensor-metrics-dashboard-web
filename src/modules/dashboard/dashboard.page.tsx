import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useDashboard } from "./dashboard.hook";

export function DashboardPage() {
  const { states } = useDashboard();
  return (
    <div style={{ display: "flex" }}>
      <ScatterChart width={650} height={400}>
        <CartesianGrid />
        <Scatter name="Umidade" data={states.correlationMetrics} />
        <XAxis dataKey="humidity" type="number" name="Umidade" />
        <YAxis dataKey="temperature" type="number" name="Temperature" />
        <Tooltip />
      </ScatterChart>
      <ComposedChart
        width={650}
        height={400}
        data={[states.temperatureMetrics, states.humidityMetrics]}
        margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
      >
        <CartesianGrid />
        <Legend />
        <Bar dataKey="average" fill="#8884d8" name="Média" />
        <Line type="monotone" dataKey="min" stroke="#82ca9d" name="Mínimo" />
        <Line type="monotone" dataKey="max" stroke="#ff7300" name="Máximo" />
        <Line
          type="monotone"
          dataKey="standardDeviation"
          stroke="#000"
          name="Desvio Padrão"
        />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </ComposedChart>
    </div>
  );
}

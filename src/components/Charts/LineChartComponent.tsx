import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  { month: "Jan", value: 100 },
  { month: "Feb", value: 150 },
  { month: "Mar", value: 200 }
];

const LineChartComponent = () => {
  return (
    <LineChart width={180} height={100} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value" />
    </LineChart>
  );
};

export default LineChartComponent;
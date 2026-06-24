import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const data = [
  { month: "Jan", value: 120 },
  { month: "Feb", value: 180 },
  { month: "Mar", value: 250 }
];

const AreaChartComponent = () => {
  return (
    <AreaChart width={180} height={100} data={data}>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="value"
      />
    </AreaChart>
  );
};

export default AreaChartComponent;
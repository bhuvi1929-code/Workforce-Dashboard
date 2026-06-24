import { PieChart, Pie, Tooltip } from "recharts";

const data = [
  { name: "Active", value: 80 },
  { name: "Inactive", value: 20 },
];

const PieChartComponent = () => {
  return (
    <PieChart width={180} height={120}>
      <Pie
        data={data}
        dataKey="value"
        outerRadius={40}
      />
      <Tooltip />
    </PieChart>
  );
};

export default PieChartComponent;
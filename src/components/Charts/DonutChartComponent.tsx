import { PieChart, Pie, Tooltip } from "recharts";

const data = [
  { name: "Active", value: 80 },
  { name: "Inactive", value: 20 },
];

const DonutChartComponent = () => {
  return (
    <PieChart width={180} height={120}>
      <Pie
        data={data}
        dataKey="value"
        innerRadius={25}
        outerRadius={40}
      />
      <Tooltip />
    </PieChart>
  );
};

export default DonutChartComponent;
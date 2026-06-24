import KPICard from "../components/KPIWidget/KPICard";
import LineChartComponent from "../components/Charts/LineChartComponent";
import PieChartComponent from "../components/Charts/PieChartComponent";
import AreaChartComponent from "../components/Charts/AreaChartComponent";
import DonutChartComponent from "../components/Charts/DonutChartComponent";

const Dashboard = () => {
  return (
    <>
      <h1 style={{ marginBottom: "20px" }}>
        Workforce Analytics Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <KPICard
          title="Employees"
          value={<span style={{ color: "#2563eb" }}>1250</span>}
          chart={<LineChartComponent />}
        />

        <KPICard
          title="Attrition"
          value={<span style={{ color: "#ef4444" }}>12%</span>}
          chart={<PieChartComponent />}
        />

        <KPICard
          title="Hiring Rate"
          value={<span style={{ color: "#10b981" }}>8%</span>}
          chart={<AreaChartComponent />}
        />

        <KPICard
          title="Skill Coverage"
          value={<span style={{ color: "#8b5cf6" }}>91%</span>}
          chart={<DonutChartComponent />}
        />
      </div>
    </>
  );
};

export default Dashboard;
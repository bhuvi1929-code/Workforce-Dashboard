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
          value={<span style={{ color: "rgb(37, 99, 235)" }}>1250</span>}
          chart={<LineChartComponent />}
        />

        <KPICard
          title="Attrition"
          value={<span style={{ color: "rgb(239, 68, 68)" }}>12%</span>}
          chart={<PieChartComponent />}
        />

        <KPICard
          title="Hiring Rate"
          value={<span style={{ color: "rgb(16, 185, 129)" }}>8%</span>}
          chart={<AreaChartComponent />}
        />

        <KPICard
          title="Skill Coverage"
          value={<span style={{ color: "rgb(139, 92, 246)" }}>91%</span>}
          chart={<DonutChartComponent />}
        />
      </div>
    </>
  );
};

export default Dashboard;
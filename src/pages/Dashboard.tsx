import KPICard from "../components/KPIWidget/KPICard";

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
        <KPICard title="Employees" value="1250" />
        <KPICard title="Attrition" value="12%" />
        <KPICard title="Hiring Rate" value="8%" />
        <KPICard title="Skill Coverage" value="91%" />
      </div>
    </>
  );
};

export default Dashboard;
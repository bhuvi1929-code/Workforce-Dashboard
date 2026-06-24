import "./KPICard.css";

interface KPIProps {
  title: string;
  value: string | number | React.ReactNode;
  chart?: React.ReactNode;
}

const KPICard = ({ title, value, chart }: KPIProps) => {
  return (
    <div className="kpi-card">
      <h3>{title}</h3>
      <h2>{value}</h2>

      {chart}
    </div>
  );
};

export default KPICard;
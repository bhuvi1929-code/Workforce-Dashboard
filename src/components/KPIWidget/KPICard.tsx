interface KPIProps {
  title: string;
  value: string | number;
}

const KPICard = ({ title, value }: KPIProps) => {
  return (
    <div className="kpi-card">
      <h3>{title}</h3>
      <h2>{value}</h2>
    </div>
  );
};

export default KPICard;
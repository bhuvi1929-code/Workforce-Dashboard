import { Link } from "react-router-dom";
import "./DashboardLayout.css";

const DashboardLayout = ({ children }: any) => {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>WAP</h2>

        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/workforce">Workforce</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/reports">Reports</Link>
        </nav>
      </aside>

      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
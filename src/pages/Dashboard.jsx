import { FaDumbbell, FaCalendarWeek, FaFire } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-header">
        <h2>Welcome Back!</h2>
        <p className="dashboard-subtext">Track your workouts and stay motivated every step of the way.</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <FaDumbbell className="stat-icon" />
          <div>
            <h3>Total Workouts</h3>
            <p>24</p>
          </div>
        </div>

        <div className="stat-card">
          <FaCalendarWeek className="stat-icon" />
          <div>
            <h3>This Week</h3>
            <p>4 Sessions</p>
          </div>
        </div>

        <div className="stat-card">
          <FaFire className="stat-icon" />
          <div>
            <h3>Calories Burned</h3>
            <p>3,200 kcal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex justify-between bg-white shadow p-4 rounded-lg mb-6">
    <h1 className="text-xl font-bold">Fitness Tracker</h1>
    <div className="space-x-4">
      <Link to="/" className="text-blue-500">Dashboard</Link>
      <Link to="/workouts" className="text-blue-500">Workout List</Link>
      <Link to="/add" className="text-blue-500">Add Workout</Link>
    </div>
  </nav>
);

export default Navbar;
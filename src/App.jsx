import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import WorkoutList from './pages/WorkoutList';
import AddWorkout from './pages/AddWorkout';

function App() {
  return (
    <Router>
      <div className="p-4 bg-gray-100 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/workouts" element={<WorkoutList />} />
          <Route path="/add" element={<AddWorkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
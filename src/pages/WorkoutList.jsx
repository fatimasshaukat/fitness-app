import { useState, useEffect } from 'react';

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('workouts');
    if (stored) setWorkouts(JSON.parse(stored));
  }, []);

  return (
    <div className="container">
      <h2>Workout List</h2>
      {workouts.length === 0 ? (
        <p>No workouts added yet.</p>
      ) : (
        <ul>
          {workouts.map((w, i) => (
            <li key={i}>
              <strong>{w.name}</strong> - {w.duration} mins
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkoutList;

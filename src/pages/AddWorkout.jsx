import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddWorkout = () => {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !duration) {
      setError('All fields are required');
      setSuccess('');
      return;
    }

    const newWorkout = { name, duration };
    const existing = JSON.parse(localStorage.getItem('workouts')) || [];
    existing.push(newWorkout);
    localStorage.setItem('workouts', JSON.stringify(existing));

    setSuccess('Workout added successfully!');
    setError('');
    setName('');
    setDuration('');
    setTimeout(() => navigate('/workouts'), 1000);
  };

  return (
    <div className="container">
      <h2>Add a New Workout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Workout Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Duration (minutes)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <button type="submit">Add Workout</button>
      </form>
    </div>
  );
};

export default AddWorkout;

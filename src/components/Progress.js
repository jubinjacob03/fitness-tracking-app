import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';

Chart.register(...registerables);

const Progress = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const savedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
    setWorkouts(savedWorkouts);
  }, []);

  const data = {
    labels: workouts.map(workout => new Date(workout.date)),
    datasets: [
      {
        label: 'Workout Duration (minutes)',
        data: workouts.map(workout => workout.duration),
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day'
        }
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Progress Tracking</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Progress;
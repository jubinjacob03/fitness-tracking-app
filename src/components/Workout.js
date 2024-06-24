import React, { useState, useEffect } from "react";
import { fetchExercises } from "../api/exerciseApi";

const Workout = () => {
    const [workout, setWorkout] = useState({ type: "", duration: "", date: "" });
    const [exercises, setExercises] = useState([]);
  
    useEffect(() => {
      setExercises(fetchExercises().exercises);
    }, []);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setWorkout({
        ...workout,
        [name]: value,
      });
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
    existingWorkouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(existingWorkouts));
    setWorkout({ type: "", duration: "", date: "" }); 
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mt-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Log Workout</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">Exercise Type</label>
          <select
            name="type"
            value={workout.type}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select an exercise</option>
            {exercises.length >0 && exercises.map((exercise) => (
              <option key={exercise.id} value={exercise.name}>
                {exercise.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">Duration (minutes)</label>
          <input
            type="number"
            name="duration"
            value={workout.duration}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter duration in minutes"
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={workout.date}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-lg shadow-lg hover:bg-blue-700 transition duration-300">
          Log Workout
        </button>
      </form>
    </div>
  );
};

export default Workout;

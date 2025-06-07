import React, { useState } from 'react';


const Home = () => {
  const [exercises, setExercises] = useState([
    { name: 'Push-ups', sets: 3, reps: 15, done: true },
    { name: 'Squats', sets: 3, reps: 20, done: true },
    { name: 'Plank', sets: 1, reps: 60, done: false },
  ]);
  const [newExercise, setNewExercise] = useState({ name: '', sets: '', reps: '' });
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    const h = height / 100;
    const bmiVal = (weight / (h * h)).toFixed(1);
    setBmi(bmiVal);
  };

  const handleAddExercise = () => {
    if (newExercise.name && newExercise.sets && newExercise.reps) {
      setExercises([...exercises, { ...newExercise, done: false }]);
      setNewExercise({ name: '', sets: '', reps: '' });
    }
  };

  return (

     // above bar 

    <div className="min-h-screen bg-gray-50 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard title="Workouts" value="47" icon="🧬" />
        <StatCard title="Days Active" value="23" icon="📅" />
        <StatCard title="Gym Buddies" value="8" icon="👥" />
        <StatCard title="Calories Burned" value="12.5K" icon="❤️" />
      </div>


        {/*  streak tracker  */}


      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">💪 Streak Tracker</h2>
          <p className="text-5xl font-bold text-center text-green-600">7</p>
          <p className="text-center text-sm mb-2">Days Strong!</p>
          <div className="flex justify-between text-sm mb-2">
            <span>Best Streak: 15</span>
            <span>This Week: 4/5</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
          </div>
          <button className="w-full py-2 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold">
            Log Today’s Workout
          </button>
        </div>




      {/*  custmize workout plan  */}
  <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">📋 Today's Workout</h2>
          <ul className="space-y-2 mb-4">
            {exercises.map((ex, idx) => (
              <li
                key={idx}
                className={`p-3 border rounded-lg flex justify-between items-center ${
                  ex.done ? 'line-through text-gray-400' : ''
                }`}
              >
                <span>{ex.name}</span>
                <span className="text-sm">{ex.sets} sets × {ex.reps} reps</span>
              </li>
            ))}
          </ul>
          <div className="mb-2 text-sm font-medium">+ Add Exercise</div>
          <div className="grid grid-cols-3 gap-2 mb-2">
            <input
              type="text"
              placeholder="Name"
              className="border p-2 rounded"
              value={newExercise.name}
              onChange={(e) => setNewExercise({ ...newExercise, name: e.target.value })}
            />
            <input
              type="number"
              placeholder="Sets"
              className="border p-2 rounded"
              value={newExercise.sets}
              onChange={(e) => setNewExercise({ ...newExercise, sets: e.target.value })}
            />
            <input
              type="number"
              placeholder="Reps"
              className="border p-2 rounded"
              value={newExercise.reps}
              onChange={(e) => setNewExercise({ ...newExercise, reps: e.target.value })}
            />
          </div>
          <button onClick={handleAddExercise} className="w-full py-2 bg-green-500 text-white rounded-lg">
            Add Exercise
          </button>
        </div>

{/* bmi  calculation  */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">📏 BMI Calculator</h2>
          <div className="flex flex-col gap-3 mb-4">
            <input
              type="number"
              placeholder="Height (cm)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="border p-2 rounded"
            />
            <input
              type="number"
              placeholder="Weight (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="border p-2 rounded"
            />
            <button onClick={calculateBMI} className="bg-green-500 text-white py-2 rounded">
              Calculate BMI
            </button>
            {bmi && <div className="text-center font-bold text-xl">Your BMI: {bmi}</div>}
          </div>
          <div className="text-sm">
            <h3 className="font-medium mb-1">❤️ BMI Categories</h3>
            <ul className="space-y-1">
              <li>Underweight: Below 18.5</li>
              <li>Normal: 18.5 – 24.9</li>
              <li>Overweight: 25.0 – 29.9</li>
              <li className="text-red-600">Obese: 30.0+</li>
            </ul>
          </div>
        </div>


      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon }) => (
  <div className="bg-white p-4 rounded-xl shadow text-center">
    <div className="text-3xl mb-1">{icon}</div>
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-sm text-gray-500">{title}</div>
  </div>
);

export default Home;

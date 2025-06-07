import { useEffect, useState } from 'react';
import ExerciseCard from "../ ExerciseCard"

export default function WorkoutSection() {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercises = () => {
      fetch('/exercises.json')
        .then((res) => res.json())
        .then((data) => {
          console.log('Fetched data:', data);
          // adjust this line based on data structure:
          setExercises(data);
        })
        .catch((err) => {
          console.error('Error fetching exercises:', err);
        });
    };
  
    fetchExercises();
  }, []);
  

  if (loading) {
    return <p className="text-center text-lg p-4">Loading Exercises...</p>;
  }
  console.log('Exercises array:', exercises);

  return (
   
      <div className="flex flex-wrap justify-center">
        {console.log('Exercises array:', exercises)}  {/* 👈 TEMPORARY */}
        {exercises.length === 0 && <p>Loading Exercises...</p>}
        {exercises.map((ex) => (
          <ExerciseCard key={ex.id} exercise={ex} />
        ))}
      </div>
   
    
  );
}

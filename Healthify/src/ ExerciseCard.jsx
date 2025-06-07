export default function ExerciseCard({ exercise }) {
  return (
    <div className="p-4 shadow rounded bg-white w-64 m-2">
      <img
        src={exercise.image || 'https://via.placeholder.com/150'} // Fallback if image missing
        alt={exercise.name}
        className="h-40 w-full object-cover mb-2"
      />
      <h2 className="text-xl font-semibold mb-1">{exercise.name}</h2>
      <p className="text-sm text-gray-600">
        {exercise.description || 'No description provided.'} {/* Fallback */}
      </p>
    </div>
  );
}

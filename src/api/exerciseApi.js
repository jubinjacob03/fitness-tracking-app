// export const fetchExercises = async () => {
//     const response = await fetch('https://exercisedb.p.rapidapi.com/exercises', {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
//         'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//       }
//     });
//     const data = await response.json();
//     return data;
//   };

// NOT WORKING, SO USING DEMO API JSON FILE

export const fetchExercises = () => ({
    "exercises": [
      {
        "id": 1,
        "name": "Push-up",
        "duration": 5,
        "calories": 10
      },
      {
        "id": 2,
        "name": "Pull-up",
        "duration": 5,
        "calories": 10
      },
      {
        "id": 3,
        "name": "Squat",
        "duration": 5,
        "calories": 10
      },
      {
        "id": 4,
        "name": "Lunge",
        "duration": 5,
        "calories": 10
      },
      {
        "id": 5,
        "name": "Plank",
        "duration": 5,
        "calories": 10
      },
      {
        "id": 6,
        "name": "Crunch",
        "duration": 5,
        "calories": 10
      },
      {
        "id": 7,
        "name": "Deadlift",
        "duration": 5,
        "calories": 10
      },
      {
        "id": 8,
        "name": "Burpee",
        "duration": 5,
        "calories": 10
      },
      {
        "id": 9,
        "name": "Mountain Climber",
        "duration": 5,
        "calories": 10
      },
      {
        "id": 10,
        "name": "Jumping Jack",
        "duration": 5,
        "calories": 10
      }
    ]
  });

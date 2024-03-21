import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Axios = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((res) => {
        setMeals(res.data.meals);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {meals.map((meal) => (
        <img key={meal.idMeal} src={meal.strMealThumb} alt={meal.strMeal} width={400} />
      ))}
    </div>
  );
};

export default Axios;

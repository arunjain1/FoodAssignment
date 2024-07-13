import { useState, useEffect } from 'react';

const useMeal = (apiEndPoint,query) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mealList, setMealList] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${apiEndPoint}${query!==""?`?c=${query}`:""}`);
        const data = await response.json();
        console.log("meal", data);
        setMealList([data]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, [query]);

  return { loading, error, mealList };
};

export default useMeal;

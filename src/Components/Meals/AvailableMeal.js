import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeal.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const mealsFetch = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://fakehttp-3cfce-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const responseData = await response.json();

      const loadedData = [];

      for (let key in responseData) {
        loadedData.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedData);
      setIsLoading(false);
    };
    mealsFetch().catch((err) => {
      setIsLoading(false);
      setError(err.message);
    });
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    >
      {meal.name}
    </MealItem>
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {error ? <p className={classes.err}>faild to fatch</p> : ""}
        {isLoading ? (
          <p className={classes.loading}>Loading</p>
        ) : (
          <ul>{mealsList}</ul>
        )}
      </Card>
    </section>
  );
};

export default AvailableMeals;

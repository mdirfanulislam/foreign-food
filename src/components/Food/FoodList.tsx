import { use } from "react";
import Food from "./Food";

export interface FoodDetail {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strCountry: string;
  strInstructions: string;
  strMealThumb: string;
  strMeasure1: string;
}

interface mealsData {
  meals: FoodDetail[];
}

interface FoodDetailProps {
  foodsPromise: Promise<mealsData>;
  handleAddToCart: (newFood: string) => void;
  FoodCount: string[];
  searchFood: string;
}

const FoodList = ({
  foodsPromise,
  handleAddToCart,
  FoodCount,
  searchFood,
}: FoodDetailProps) => {
  const foodsUse = use(foodsPromise);
  const foods = foodsUse.meals;

  const filterdFoods = foods.filter((food) =>
    food.strMeal.toLowerCase().includes(searchFood.toLowerCase()),
  );

  return (
    <section>
      {filterdFoods.length === 0 ? (
        <p className="text-3xl text-center mt-10 text-red-500 font-bold">
          Search Value Not Match! Try With Different Value!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {filterdFoods.map((food, index) => (
            <Food
              key={index}
              food={food}
              handleAddToCart={handleAddToCart}
              isInCart={FoodCount.includes(food.idMeal)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default FoodList;

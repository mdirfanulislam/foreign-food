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
}

const FoodList = ({
  foodsPromise,
  handleAddToCart,
  FoodCount,
}: FoodDetailProps) => {
  const foodsUse = use(foodsPromise);
  const foods = foodsUse.meals;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {foods.map((food, index) => (
          <Food
            key={index}
            food={food}
            handleAddToCart={handleAddToCart}
            isInCart={FoodCount.includes(food.idMeal)}
          />
        ))}
      </div>
    </>
  );
};

export default FoodList;

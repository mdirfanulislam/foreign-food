import type { FoodDetail } from "./FoodList";

interface foodProps {
  food: FoodDetail;
  handleAddToCart: (newFood: string) => void;
  isInCart: boolean;
}

const Food = ({ food, handleAddToCart, isInCart }: foodProps) => {
  return (
    <>
      <div className="card bg-white w-full max-w-sm shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden border border-gray-100">
        <figure className="relative h-48 overflow-hidden">
          <img
            src={food.strMealThumb}
            alt={food.strMeal}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </figure>

        <div className="card-body p-5 flex flex-col justify-between text-gray-800 bg-white">
          <div>
            <span className="badge badge-sm bg-cyan-50 text-cyan-700 border-cyan-200 font-semibold mb-2">
              {food.strCategory}
            </span>
            <h2 className="card-title text-xl font-bold text-gray-900 line-clamp-1 mb-1">
              {food.strMeal}
            </h2>
            <p className="font-mono text-sm text-gray-500 flex items-center gap-1">
              {food.strCountry}
            </p>
          </div>

          <div className="card-actions justify-end mt-4">
            <button
              onClick={() => handleAddToCart(food.idMeal)}
              disabled={isInCart}
              className="btn btn-info btn-block sm:btn-wide text-white bg-cyan-500 hover:bg-cyan-600 border-none font-semibold shadow-sm"
            >
              {isInCart ? "Added" : "Add To Cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Food;

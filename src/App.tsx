import { Suspense, useState } from "react";
import "./App.css";
import Nav from "./components/Navbar/Nav";
import FoodList from "./components/Food/FoodList";

const fetchFoods = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a",
  );
  return res.json();
};

function App() {
  const [FoodCount, setFoodCount] = useState<string[]>([]);

  const handleAddToCart = (newFood: string): void => {
    const newFoodCount = [...FoodCount, newFood];
    setFoodCount(newFoodCount);
  };

  const foodsPromise = fetchFoods();

  return (
    <section className="min-h-screen bg-gray-50 flex flex-col">
      <header className="sticky top-0 z-100 bg-white shadow-sm overflow-visible">
        <nav className="max-w-380 mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
          <Nav FoodCount={FoodCount} />
        </nav>
      </header>

      <main className="flex-1 max-w-380 w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Suspense
          fallback={
            <div className="flex flex-col items-center justify-center min-h-[40vh] gap-3">
              <span className="loading loading-spinner loading-lg text-cyan-500"></span>
              <h3 className="text-gray-500 font-medium animate-pulse">
                Preparing delicious food...
              </h3>
            </div>
          }
        >
          <FoodList
            foodsPromise={foodsPromise}
            handleAddToCart={handleAddToCart}
            FoodCount={FoodCount}
          />
        </Suspense>
      </main>
    </section>
  );
}

export default App;

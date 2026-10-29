interface FoodCountProps {
  FoodCount: string[];
}

export default function Nav({ FoodCount }: FoodCountProps) {
  return (
    <div className="navbar bg-white w-full px-4 sm:px-6 flex items-center justify-between gap-4 border-b border-gray-100">
      <div className="flex-none">
        <a
          href="/"
          className="text-lg sm:text-xl font-extrabold text-orange-400 px-2"
        >
          Foreign Food
        </a>
      </div>

      <div className="flex-1 max-w-md mx-auto">
        <div className="form-control relative w-full">
          <input
            type="text"
            placeholder="Search recipes..."
            className="input input-bordered w-full h-10 bg-white text-gray-800 placeholder-gray-400 border-gray-200 focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400 transition-all rounded-xl pl-9 pr-4 text-sm"
          />
          <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
        </div>
      </div>

      <div className="flex-none">
        <div className="dropdown dropdown-end block z-50">
          <div
            tabIndex={0}
            role="button"
            className="text-orange-500 flex items-center justify-center"
          >
            <div className="indicator">
              <i className="fa-solid fa-shopping-cart text-lg sm:text-xl"></i>
              <span className="badge badge-sm badge-info font-bold text-white indicator-item scale-90 sm:scale-100">
                {FoodCount.length}
              </span>
            </div>
          </div>

          <div className="card card-compact dropdown-content bg-white z-50 mt-3 w-52 shadow-xl border border-gray-100 rounded-xl">
            <div className="card-body p-4 text-gray-800">
              <span className="text-base font-bold text-gray-900">
                {FoodCount.length} Items
              </span>
              <h3 className="text-orange-500 font-extrabold">Order ID :</h3>
              {FoodCount.map((food) => (
                <p className="text-orange-500">{food}</p>
              ))}
              <div className="card-actions">
                <button className="btn btn-info btn-sm btn-block text-white bg-cyan-500 hover:bg-cyan-600 border-none font-semibold shadow-sm">
                  View Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

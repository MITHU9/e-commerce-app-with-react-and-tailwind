/* eslint-disable react/prop-types */
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, handleOrderPopup }) => {
  return (
    <div>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="w-[350px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-md">
            <div className="flex justify-between">
              <h1 className="text-xl font-semibold">Order Now</h1>
              <div>
                <IoCloseOutline
                  onClick={handleOrderPopup}
                  className="text-2xl cursor-pointer"
                />
              </div>
            </div>

            <div className="mt-3 flex flex-col gap-2">
              {/* Order Form */}
              {/* Add your order form fields here */}
              <input
                className="outline-none border px-2 py-2 rounded-full dark:bg-gray-800 dark:border-gray-500"
                type="text"
                placeholder="Name"
              />
              <input
                className="outline-none border dark:border-gray-500 px-2 py-2 rounded-full dark:bg-gray-800"
                type="text"
                placeholder="Email"
              />
              <input
                className="outline-none border px-2 py-2 rounded-full dark:bg-gray-800 dark:border-gray-500"
                type="text"
                placeholder="Phone Number"
              />
              <textarea
                className="outline-none border p-1 rounded-xl dark:bg-gray-800 dark:border-gray-500"
                placeholder="Address"
                rows="4"
              />
              <button className="w-full py-2 text-white bg-primary hover:bg-primary-dark transition-all duration-200 rounded-xl font-semibold">
                Submit
              </button>

              {/* Order Summary */}
              {/* Add your order summary component here */}
              <h2 className="text-xl font-bold">Order Summary</h2>
              <div className="font-semibold">
                <p className="dark:text-white/50">Total Items: 4</p>
                <p className="dark:text-white/50">Subtotal: $100</p>
                <p className="dark:text-white/50">Shipping: $5</p>
                <p className="dark:text-white/50">Total: $105</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;

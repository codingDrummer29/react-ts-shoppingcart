import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utils/formatCurrency";
import CartItem from "./CartItem";
import storeItems from "../data/items.json";

type ShoppingCartProps = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <>
      {/* ----- Page backdrop ----- */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed top-0 z-30 w-screen h-screen transition-opacity bg-black opacity-25`}
      ></div>

      {/* ----- Drawer component ----- */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed top-0 right-80 md:right-96 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 md:w-96`}
      >
        {/* --- Header | Title - Close --- */}
        <div className="flex justify-between p-1 items-center mb-4">
          <h5 className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
            Cart
          </h5>
          <button
            onClick={closeCart}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        {/* --- Cart items --- */}
        <div className="flex flex-col gap-4 w-full px-1">
          {cartItems.map((item, index) => (
            <CartItem key={index} {...item} />
          ))}
        </div>

        {/* --- Total value --- */}
        <div className="flex justify-end text-lg font-semibold">
          <span>Total: </span>
          <span>
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </span>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;

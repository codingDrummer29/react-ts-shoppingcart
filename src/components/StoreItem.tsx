import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utils/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

const StoreItem = ({ id, name, price, imageUrl }: StoreItemProps) => {
  const {
    getItemQuantiy,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeCartItem,
  } = useShoppingCart();

  const quantity = getItemQuantiy(id);

  return (
    <>
      <div className="flex flex-col gap-4 w-full h-full bg-white shadow rounded">
        {/* --- item image --- */}
        <div className="w-full">
          <img src={imageUrl} alt={name} className="h-52 w-full object-cover" />
        </div>

        {/* --- name | price --- */}
        <div className="flex justify-between align-baseline px-4">
          <span className="text-lg">{name}</span>
          <span className="italic fornt-medium text-gray-400">
            {formatCurrency(price)}
          </span>
        </div>

        {/* --- Add to cart --- */}
        <div className="mt-aouto w-full px-4 pb-4">
          {quantity === 0 ? (
            <>
              <button
                className="w-full p-2 text-center bg-blue-500 hover:bg-white text-white hover:text-blue-500 border border-blue-500 rounded-md transition-colors"
                onClick={() => increaseItemQuantity(id)}
              >
                Add To Cart
              </button>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-3 w-full items-center">
                {/* - Add | Increase/Decrease - */}
                <div className="flex gap-4 items-center">
                  <button
                    className="bg-blue-500 text-white rounded-md p-2"
                    onClick={() => decreaseItemQuantity(id)}
                  >
                    -
                  </button>
                  <div className="">
                    <span className="text-lg font-semibold">{quantity}</span>
                    <span className=""> in cart</span>
                  </div>
                  <button
                    className="bg-blue-500 text-white rounded-md p-2"
                    onClick={() => increaseItemQuantity(id)}
                  >
                    +
                  </button>
                </div>

                {/* - Remove - */}
                <button
                  className="w-20 bg-red-500 text-white rounded-md p-2"
                  onClick={() => removeCartItem(id)}
                >
                  Remove
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default StoreItem;

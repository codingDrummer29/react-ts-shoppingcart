import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utils/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeCartItem } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (item == null) return null;

  return (
    <div key={id} className="grid grid-cols-3 items-center gap-3">
      {/* --- image --- */}
      <div className="col-span-1">
        <img src={item.imageUrl} alt="" className="w-full aspect-auto" />
      </div>

      {/* --- Item name | Price --- */}
      <div className="col-span-1 flex flex-col items-start">
        {/* - Name - */}
        <div className="">
          <span className="font-medium">{item.name} </span>
          <span className="text-xs text-gray-600">x{quantity}</span>
        </div>

        {/* - Item price - */}
        <span className="text-gray-400">{formatCurrency(item.price)}</span>
      </div>

      {/* --- Item total price | Remove --- */}
      <div className="col-span-1 flex justify-end items-center gap-2">
        {/* - Price - */}
        <span>{formatCurrency(item.price * quantity)}</span>

        {/* - Remove button - */}
        <button
          type="button"
          onClick={() => removeCartItem(id)}
          className="text-ceter rounded border border-gray-900 bg-white text-black hover:text-white hover:bg-red-500 hover:border-red-500 w-6 h-6"
        >
          <span>x</span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;

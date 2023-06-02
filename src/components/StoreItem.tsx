import { formatCurrency } from "../utils/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

const StoreItem = ({ id, name, price, imageUrl }: StoreItemProps) => {
  return (
    <>
      <div className="flex flex-col gap-4 w-full bg-white shadow rounded">
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
      </div>
    </>
  );
};

export default StoreItem;

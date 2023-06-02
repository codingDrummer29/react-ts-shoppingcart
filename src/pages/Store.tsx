import storeItems from "../data/items.json";
import StoreItem from "../components/StoreItem";

const Store = () => {
  return (
    <>
      <h1 className="text-xl font-medium italic mb-6">Store</h1>

      {/* ----- Items ----- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-4">
        {storeItems.map((item, index) => {
          return (
            <div key={index} className="col-span-1 w-full">
              <StoreItem {...item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Store;

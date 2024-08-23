import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { saveProduct } from "../../store/productSlice";

function AddProduct() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [barang, setBarang] = useState<string>("");
  const [price, setPrice] = useState<number>();

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
        setIsLoading(true)
        dispatch(saveProduct({barang, price: price ?? 0}))
        setIsLoading(false)
        navigate("/product/get-product");
    } catch (error) {
        setIsLoading(true)
        console.log("something wrong when create new data")
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Barang
          </label>
          <input
            autoFocus
            required
            type="text"
            placeholder="Input barang"
            onChange={(e) => setBarang(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Price
          </label>
          <input
            required
            type="number"
            placeholder="Input price"
            onChange={(e) => setPrice(Number(e.target.value))}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isLoading ? "Create" : "Loading...."}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;

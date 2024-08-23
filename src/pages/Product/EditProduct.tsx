import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getProduct,
  productSelectors,
  updateProduct,
} from "../../store/productSlice";
import { AppDispatch, RootState } from "../../store/store";

function EditProduct() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [barang, setBarang] = useState<string>("");
  const [price, setPrice] = useState<number>();

  const { id } = useParams();

  const product = useSelector((state: RootState) =>
    productSelectors.selectById(state, id ?? "")
  );

  useEffect(() => {
    dispatch(getProduct);

    if (product) {
      setBarang(product.barang);
      setPrice(product.price);
    }
  }, [dispatch, product]);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await dispatch(updateProduct({ id: id ?? "", barang, price: price ?? 0 }));
    navigate("/product/get-product");
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
            value={barang}
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
            defaultValue={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;

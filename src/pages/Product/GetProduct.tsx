import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import {
  deleteProduct,
  getProduct,
  productSelectors,
} from "../../store/productSlice";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function GetProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  //   const products = useSelector((state: RootState) => state.product);
  const products = useSelector(productSelectors.selectAll);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      setIsLoading(false);
      await dispatch(getProduct());
    } catch (error) {
      setIsLoading(true);
      console.log("error when catching data product");
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("product = ", products);

  return (
    <div>
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <div className="overflow-x-auto p-4">
          <div>
            <button onClick={() => navigate("/product/add-product")} className="px-10 py-2 bg-green-500 rounded-lg text-white mb-4">add</button>
          </div>
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b-2 border-gray-200 text-left">
                  No
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-200 text-left">
                  Name
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-200 text-left">
                  Price
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-200 text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b border-gray-200">
                    {index + 1}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {product.barang}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {product.price}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    <Link
                      to={`/product/edit/${product.id}`}
                      className="text-blue-500 hover:underline mr-2"
                    >
                      edit
                    </Link>
                    <button
                      onClick={() => dispatch(deleteProduct(product.id))}
                      className="text-red-500 hover:underline"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default GetProduct;

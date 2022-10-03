import { PlusIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import ScreenHeader from '../../components/ScreenHeader';
import Spinner from '../../components/Spinner';
import { clearMessage } from '../../store/reducers/globalReducer';
import { useGetProductsQuery } from '../../store/services/productService';
import Wrapper from './Wrapper';

const Products = () => {
  let { page } = useParams();
  if (!page) {
    page = 1;
  }
  const { data = [], isFetching } = useGetProductsQuery(page);
  console.log(data);
  const { success } = useSelector((state) => state.globalReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (success) {
      toast.success(success);
    }
    return () => {
      dispatch(clearMessage());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const deleteProductHandler = async () => {};
  return (
    <Wrapper>
      <ScreenHeader>
        <Link to="/dashboard/create-product" className="btn-dark">
          Add Products <PlusIcon className="w-5 h-5 inline-block ml-2" />
        </Link>
        <Toaster />
      </ScreenHeader>
      {isFetching ? (
        <Spinner />
      ) : data?.products?.length > 0 ? (
        <>
          <div>
            <table className="w-full bg-gray-900 rounded-md">
              <thead>
                <tr className="border-b border-gray-800 text-left">
                  <th className="p-3 uppercase text-sm font-medium">image</th>
                  <th className="p-3 uppercase text-sm font-medium">name</th>
                  <th className="p-3 uppercase text-sm font-medium">price</th>
                  <th className="p-3 uppercase text-sm font-medium">stock</th>
                  <th className="p-3 uppercase text-sm font-medium">edit</th>
                  <th className="p-3 uppercase text-sm font-medium">delete</th>
                </tr>
              </thead>
              <tbody>
                {data?.products?.map((product) => (
                  <tr
                    className="border-b border-gray-800 text-left"
                    key={product._id}
                  >
                    <td className="p-3 capitalize text-sm font-normal text-gray-400">
                      <img
                        src={`/images/${product.image1}`}
                        alt={product.image}
                        className="w-24 rounded object-cover"
                      />
                    </td>
                    <td className="p-3 capitalize text-sm font-normal text-gray-400">
                      {product.title}
                    </td>
                    <td className="p-3 capitalize text-sm font-normal text-gray-400">
                      {product.price} ฿
                    </td>
                    <td className="p-3 capitalize text-sm font-normal text-gray-400">
                      {product.stock}
                    </td>
                    <td className="p-3 capitalize text-sm font-normal text-gray-400">
                      <Link
                        to={`/dashboard/update-product/${product._id}`}
                        className="btn btn-warning"
                      >
                        edit
                      </Link>
                    </td>
                    <td className="p-3 capitalize text-sm font-normal text-gray-400">
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteProductHandler(product._id)}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            page={parseInt(page)}
            perPage={data.perPage}
            count={data.count}
            path="dashboard/products"
          />
        </>
      ) : (
        'No product!'
      )}
    </Wrapper>
  );
};

export default Products;

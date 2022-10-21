import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link, useParams } from 'react-router-dom';
import DetailsCard from '../../components/home/DetailsCard';
import Nav from '../../components/home/Nav';
import ProductLoader from '../../components/home/ProductLoader';
import { useGetProductQuery } from '../../store/services/productService';

const Product = () => {
  const { name } = useParams();
  const { data, isFetching } = useGetProductQuery(name);
  return (
    <>
      <Nav />
      <div className="my-container mt-24">
        {isFetching ? (
          <ProductLoader />
        ) : (
          <>
            <ul className="flex items-center">
              <li className="capitalize text-gray-600">
                <Link to="/">Home</Link>
              </li>
              <li>
                <ArrowRightIcon className="w-4 h-4 block mx-2" />
              </li>
              <li className="capitalize text-gray-600">
                <Link to={`/cat-products/${data.category}`}>
                  {data.category}
                </Link>
              </li>
              <li>
                <ArrowRightIcon className="w-4 h-4 block mx-2" />
              </li>
              <li className="capitalize text-gray-600">
                <Link to={`/product/${data.title}`}>{data.title}</Link>
              </li>
            </ul>
            <DetailsCard product={data} />
          </>
        )}
      </div>
    </>
  );
};

export default Product;

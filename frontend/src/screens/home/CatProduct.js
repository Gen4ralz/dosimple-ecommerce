import { useParams } from 'react-router-dom';
import Header from '../../components/home/Header';
import Nav from '../../components/home/Nav';
import ProductCard from '../../components/home/ProductCard';
import Pagination from '../../components/Pagination';
import Skeleton from '../../components/skeleton/Skeleton';
import Text from '../../components/skeleton/Text';
import Thumbnail from '../../components/skeleton/Thumbnail';
import { useCatProductsQuery } from '../../store/services/homeProducts';

const CatProduct = () => {
  const { name, page = 1 } = useParams();
  const { data, isFetching } = useCatProductsQuery({
    name,
    page: parseInt(page),
  });
  return (
    <>
      <Nav />
      <div className="mt-[70px]">
        <Header>#{name}</Header>
      </div>
      <div className="my-container my-10">
        {isFetching ? (
          <div className="flex flex-wrap -mx-4 mb-10">
            {[1, 2, 3, 4].map(
              (
                item //varies by number of product
              ) => (
                <div
                  className="w-6/12 sm:w-4/12 md:w-3/12 p-4 lg:w-4/12 xl:w-3/12"
                  key={item}
                >
                  <Skeleton>
                    <Thumbnail height="320px" />
                    <Text mt="10px" />
                    <Text mt="10px" />
                  </Skeleton>
                </div>
              )
            )}
          </div>
        ) : data.count > 0 ? (
          <>
            <p className="text-lg font-medium text-gray-700">
              {data.count} products found!
            </p>
            <div className="flex flex-wrap -mx-5">
              {data.products.map((product) => {
                return <ProductCard product={product} key={product._id} />;
              })}
            </div>
            <Pagination
              page={parseInt(page)}
              perPage={data.perPage}
              count={data.count}
              path={`cat-products/${name}`}
              theme="light"
            />
          </>
        ) : (
          <div className="alert-danger">No products found in ${name}</div>
        )}
      </div>
    </>
  );
};

export default CatProduct;

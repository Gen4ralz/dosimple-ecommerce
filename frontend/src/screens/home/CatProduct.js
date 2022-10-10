import { Link, useParams } from 'react-router-dom';
import Header from '../../components/home/Header';
import Nav from '../../components/home/Nav';
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
  console.log(data);
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
                    <Thumbnail />
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
                const percentage = product.discount / 100;
                const discountPrice =
                  product.price - product.price * percentage;
                return (
                  <div
                    className="w-full md:w-3/12 sm:w-6/12 px-5 py-10"
                    key={product._id}
                  >
                    <Link to="/">
                      <div className="w-full">
                        <img
                          src={`/images/${product.image1}`}
                          alt="products"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="capitalize text-base font-medium my-3">
                        {product.title}
                      </p>
                      <div className="flex justify-between">
                        <span className="font-bold text-red-700">
                          {discountPrice} ฿
                        </span>
                        <span className="font-bold text-gray-400 line-through">
                          {product.price} ฿
                        </span>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="alert-danger">No products found in ${name}</div>
        )}
      </div>
    </>
  );
};

export default CatProduct;

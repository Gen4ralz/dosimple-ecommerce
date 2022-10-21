import parser from 'html-react-parser';
import htmlFormat from 'html-to-formatted-text';
import DetailsImage from './DetailsImage';
import Quantity from './Quantity';

const DetailsCard = ({ product }) => {
  const discountPrice = product.price - product.discount;
  let desc = parser(product.description);
  desc = htmlFormat(desc);
  return (
    <div className="flex flex-wrap -mx-5">
      <div className="w-full order-2 md:order-1 md:w-6/12 p-5">
        <div className="flex flex-wrap">
          <DetailsImage image={product.image1} />
          <DetailsImage image={product.image2} />
          <DetailsImage image={product.image3} />
        </div>
      </div>
      <div className="w-full order-1 md:order-2 sm:w-6/12 p-5">
        <h1 className="text-xl font-bold text-gray-800 capitalize">
          {product.title}
        </h1>
        <div className="flex my-5 justify-between">
          <span className="text-xl font-bold text-red-500">
            {discountPrice} ฿
          </span>
          <span className="text-lg line-through text-gray-500">
            {product.price} ฿
          </span>
        </div>
        {product.sizes.length > 0 && (
          <>
            <h3 className="text-base font-medium capitalize text-gray-600 mb-2">
              sizes
            </h3>
            <div className="flex flex-wra -mx-1">
              {product.sizes.map((size) => (
                <div
                  className="p-1 ml-1 border border-gray-300 rounded mb-2"
                  key={size.name}
                >
                  <span className="text-sm uppercase text-gray-900 font-semibold">
                    {size.name}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
        {product.colors.length > 0 && (
          <>
            <h3 className="text-base font-medium capitalize text-gray-600 py-2">
              colors
            </h3>
            <div className="flex flex-wrap -mx-1">
              {product.colors.map((color) => (
                <div
                  key={color.name}
                  className="border border-gray-300 rounded m-1 p-1 cursor-pointer"
                >
                  <span
                    className="min-w-[40px]  min-h-[40px] rounded block"
                    style={{ backgroundColor: color.color }}
                  >
                    {color.name}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
        <div className="flex -mx-3">
          <div className="w-full sm:w-6/12 p-3">
            <Quantity />
          </div>
          <div className="w-full sm:w-6/12 p-3">
            <button className="btn btn-indigo">add to cart</button>
          </div>
        </div>
        <h3 className="mt-4 text-base font-medium capitalize text-gray-600 mb-2">
          description
        </h3>
        <p className="mt-4 leading-[27px]">{desc}</p>
      </div>
    </div>
  );
};

export default DetailsCard;

const DetailsCard = ({ product }) => {
  const discountPrice = product.price - product.discount;
  return (
    <div className="flex flex-wrap -mx-5">
      <div className="w-full sm:w-6/12 p-5">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-6/12 p-1">
            <img
              src={`/images/${product.image1}`}
              alt="image1"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full sm:w-6/12 p-1">
            <img
              src={`/images/${product.image2}`}
              alt="image2"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full sm:w-6/12 p-1">
            <img
              src={`/images/${product.image3}`}
              alt="image3"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-full sm:w-6/12 p-5">
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
                  className="p-1 ml-1 border border-gray-300 rounded"
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
            <h3 className="text-base font-medium capitalize text-gray-600 mb-2">
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
                    S
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
        <h3 className="text-base font-medium capitalize text-gray-600 mb-2">
          description
        </h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default DetailsCard;

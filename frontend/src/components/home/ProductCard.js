import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const percentage = product.discount / 100;
  const discountPrice = product.price - product.price * percentage;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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
        <p className="capitalize text-base font-medium my-3">{product.title}</p>
        <div className="flex justify-between">
          <span className="font-bold text-red-700">{discountPrice} ฿</span>
          <span className="font-bold text-gray-500 line-through">
            {product.price} ฿
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;

import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import ScreenHeader from '../../components/ScreenHeader';
import Spinner from '../../components/Spinner';
import { useAllCategoriesQuery } from '../../store/services/categoryService';
import Wrapper from './Wrapper';

const CreateProduct = () => {
  const { data = [], isFetching } = useAllCategoriesQuery();
  return (
    <Wrapper>
      <ScreenHeader>
        <Link to="/dashboard/products" className="btn-dark">
          <ArrowLeftIcon className="w-5 h-5 inline-block mr-2" /> Products List
        </Link>
      </ScreenHeader>
      <div className="flex felx-wrap -mx-3">
        <div className="w-full xl:w-8/12 p-3">
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 p-3">
              <label htmlFor="title" className="label mb-4">
                title
              </label>
              <input
                type="text"
                name="title"
                className="form-control"
                id="title"
              />
            </div>
            <div className="w-full md:w-6/12 p-3">
              <label htmlFor="price" className="label mb-4">
                price
              </label>
              <input
                type="number"
                name="price"
                className="form-control"
                id="price"
              />
            </div>
            <div className="w-full md:w-6/12 p-3">
              <label htmlFor="discount" className="label mb-4">
                discount
              </label>
              <input
                type="number"
                name="discount"
                className="form-control"
                id="discount"
              />
            </div>
            <div className="w-full md:w-6/12 p-3">
              <label htmlFor="stock" className="label mb-4">
                stock
              </label>
              <input
                type="number"
                name="stock"
                className="form-control"
                id="stock"
              />
            </div>
            <div className="w-full md:w-6/12 p-3">
              <label htmlFor="categories" className="label mb-4">
                categories
              </label>
              {isFetching ? (
                <Spinner />
              ) : (
                data?.categories?.length > 0 && (
                  <select
                    name="catergories"
                    id="categories"
                    className="form-control"
                  >
                    <option value="">Choose category</option>
                    {data?.categories?.map((category) => (
                      <option key={category._id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                )
              )}
            </div>
          </div>
        </div>
        <div className="w-full xl:w-4/12 p-3">Colors and images</div>
      </div>
    </Wrapper>
  );
};

export default CreateProduct;

import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ScreenHeader from '../../components/ScreenHeader';
import Spinner from '../../components/Spinner';
import { useAllCategoriesQuery } from '../../store/services/categoryService';
import Wrapper from './Wrapper';
import { TwitterPicker } from 'react-color';
import { v4 as uuidv4 } from 'uuid';
import Colors from '../../components/Color';
import SizesList from '../../components/SizesList';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  useGetProductQuery,
  useUpdateProductMutation,
} from '../../store/services/productService';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setSuccess } from '../../store/reducers/globalReducer';
import parser from 'html-react-parser';

const UpdateProduct = () => {
  const { id } = useParams();
  const { data: product, isFetching: fetching } = useGetProductQuery(id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data = [], isFetching } = useAllCategoriesQuery();
  const [value, setValue] = useState('');
  const [state, setState] = useState({
    title: '',
    price: 0,
    discount: 0,
    stock: 0,
    category: '',
    colors: [],
  });
  const [sizes] = useState([
    { name: 'S' },
    { name: 'M' },
    { name: 'L' },
    { name: 'XL' },
    { name: 'Free Size' },
  ]);
  const [sizeList, setSizeList] = useState([]);

  const inputHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const saveColorsHandler = (color) => {
    const filtered = state.colors.filter((clr) => clr.color !== color.hex);
    setState({
      ...state,
      colors: [...filtered, { color: color.hex, id: uuidv4() }],
    });
  };
  const removeColorsHanlder = (color) => {
    const filtered = state.colors.filter((clr) => clr.color !== color.color);
    setState({ ...state, colors: filtered });
  };
  const chooseSizeHandler = (sizeObject) => {
    const filtered = sizeList.filter((size) => size.name !== sizeObject.name);
    setSizeList([...filtered, sizeObject]);
  };
  const removeSizeHandler = (name) => {
    const filtered = sizeList.filter((size) => size.name !== name);
    setSizeList(filtered);
  };

  const [updateProduct, response] = useUpdateProductMutation();

  const submitHandler = (e) => {
    e.preventDefault();
    updateProduct(state);
  };

  useEffect(() => {
    if (!response.isSuccess) {
      response?.error?.data?.errors.map((err) => {
        return toast.error(err.msg);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response?.error?.data?.errors]);

  useEffect(() => {
    setState({ ...state, description: value });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    if (response?.isSuccess) {
      dispatch(setSuccess(response?.data?.msg));
      navigate('/dashboard/products');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response?.isSuccess]);

  useEffect(() => {
    if (!fetching) {
      setState(product);
      setSizeList(product.sizes);
      setValue(parser(product.description));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  return (
    <Wrapper>
      <ScreenHeader>
        <Link to="/dashboard/products" className="btn-dark">
          <ArrowLeftIcon className="w-5 h-5 inline-block mr-2" /> Products List
        </Link>
      </ScreenHeader>
      <Toaster position="top-center" reverseOrder={true} />
      {fetching ? (
        <Spinner />
      ) : (
        <div className="flex felx-wrap -mx-3">
          <form className="w-full xl:w-8/12 p-3" onSubmit={submitHandler}>
            <h3 className="pl-3 capitalize text-lg font-medium text-gray-400">
              Update Product
            </h3>
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
                  value={state.title}
                  onChange={inputHandler}
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
                  value={state.price}
                  onChange={inputHandler}
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
                  value={state.discount}
                  onChange={inputHandler}
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
                  value={state.stock}
                  onChange={inputHandler}
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
                      name="category"
                      id="categories"
                      className="form-control"
                      value={state.category}
                      onChange={inputHandler}
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
              <div className="w-full md:w-6/12 p-3">
                <label htmlFor="colors" className="label">
                  Choose Colors
                </label>
                <TwitterPicker onChangeComplete={saveColorsHandler} />
              </div>
              <div className="w-full p-3">
                <label htmlFor="sizes" className="label">
                  Choose Sizes
                </label>
                {sizes.length > 0 && (
                  <div className="flex flex-wrap -mx-3 mb-3">
                    {sizes.map((size) => (
                      <div
                        key={size.name}
                        className="size"
                        onClick={() => chooseSizeHandler(size)}
                      >
                        {size.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="w-full p-3">
                <label htmlFor="description" className="label">
                  Description
                </label>
                <ReactQuill
                  theme="snow"
                  id="description"
                  value={value}
                  onChange={setValue}
                  placeholder="Enter description.."
                />
              </div>
              <div className="w-full p-3">
                <input
                  type="submit"
                  value={response.isLoading ? 'loading...' : 'save product'}
                  disabled={response.isLoading ? true : false}
                  className="btn btn-indigo"
                />
              </div>
            </div>
          </form>
          <div className="w-full xl:w-4/12 p-3 mt-3">
            <Colors colors={state.colors} remove={removeColorsHanlder} />
            <SizesList list={sizeList} removeSize={removeSizeHandler} />
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default UpdateProduct;

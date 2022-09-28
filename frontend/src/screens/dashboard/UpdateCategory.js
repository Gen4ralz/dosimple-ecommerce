import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ScreenHeader from '../../components/ScreenHeader';
import Spinner from '../../components/Spinner';
import { setSuccess } from '../../store/reducers/globalReducer';
import {
  useFetchCategoryQuery,
  useUpdateCategoryMutation,
} from '../../store/services/categoryService';
import Wrapper from './Wrapper';

const UpdateCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState('');
  const { id } = useParams();
  const { data, isFetching } = useFetchCategoryQuery(id);

  useEffect(() => {
    data?.category && setState(data?.category?.name);
  }, [data?.category]);

  const [saveCategory, response] = useUpdateCategoryMutation();
  const errors = response?.error?.data?.errors
    ? response?.error?.data?.errors
    : [];

  const updateSubmitHandler = (e) => {
    e.preventDefault();
    saveCategory({ name: state, id });
  };

  useEffect(() => {
    if (response?.isSuccess) {
      dispatch(setSuccess(response?.data?.message));
      navigate('/dashboard/categories');
    }
  }, [dispatch, navigate, response?.data?.message, response?.isSuccess]);

  return (
    <Wrapper>
      <ScreenHeader>
        <Link to="/dashboard/categories" className="btn-dark">
          <ArrowLeftIcon className="w-5 h-5 inline-block mr-2" /> Categories
          List
        </Link>
      </ScreenHeader>

      {isFetching ? (
        <Spinner />
      ) : (
        <form className="w-full md:w-8/12" onSubmit={updateSubmitHandler}>
          <h3 className="text-lg mb-4">Update category</h3>
          {errors.length > 0 &&
            errors.map((error, key) => (
              <div key={key}>
                <p className="alert-danger mb-4">{error.msg}</p>
              </div>
            ))}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Category Name..."
              name="category"
              className="form-control"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="">
            <input type="submit" value="Update" className="btn btn-indigo" />
          </div>
        </form>
      )}
    </Wrapper>
  );
};

export default UpdateCategory;

import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ScreenHeader from '../../components/ScreenHeader';
import { useCreateMutation } from '../../store/services/categoryService';
import Wrapper from './Wrapper';

const CreateCategory = () => {
  const navigate = useNavigate();
  const [state, setState] = useState();
  const [saveCategory, data] = useCreateMutation();
  const errors = data?.error?.data?.errors ? data?.error?.data?.errors : [];
  const submitCategoryHandler = (e) => {
    e.preventDefault();
    saveCategory({ name: state });
  };
  useEffect(() => {
    if (data?.isSuccess) {
      navigate('/dashboard/categories');
    }
  }, [data?.isSuccess, navigate]);
  return (
    <Wrapper>
      <ScreenHeader>
        <Link to="/dashboard/categories" className="btn-dark">
          <ArrowLeftIcon className="w-5 h-5 inline-block mr-2" /> Categories
          List
        </Link>
      </ScreenHeader>
      <form className="w-full md:w-8/12 " onSubmit={submitCategoryHandler}>
        <h3 className="text-lg mb-4">Create category</h3>
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
            name=""
            className="form-control"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="">
          <input
            type="submit"
            value={data.isLoading ? 'Loading...' : 'Create Category'}
            className="btn-indigo"
          />
        </div>
      </form>
    </Wrapper>
  );
};

export default CreateCategory;

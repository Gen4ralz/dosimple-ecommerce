import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import ScreenHeader from '../../components/ScreenHeader';
import Wrapper from './Wrapper';

const CreateCategory = () => {
  return (
    <Wrapper>
      <ScreenHeader>
        <Link to="/dashboard/categories" className="btn-dark">
          <ArrowLeftIcon className="w-5 h-5 inline-block mr-2" /> Categories
          List
        </Link>
      </ScreenHeader>
      <form className="w-full md:w-8/12 ">
        <h3 className="text-lg mb-4">Create category</h3>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Category Name..."
            name=""
            className="form-control"
          />
        </div>
        <div className="">
          <input type="submit" value="create category" className="btn-indigo" />
        </div>
      </form>
    </Wrapper>
  );
};

export default CreateCategory;

import { PlusIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ScreenHeader from '../../components/ScreenHeader';
import Wrapper from './Wrapper';
import { clearMessage } from '../../store/reducers/globalReducer';
import { useEffect } from 'react';

const Categories = () => {
  const { success } = useSelector((state) => state.globalReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(clearMessage());
    };
  }, [dispatch]);

  return (
    <Wrapper>
      <ScreenHeader>
        <Link to="/dashboard/create-category" className="btn-dark">
          Add categories <PlusIcon className="w-5 h-5 inline-block ml-2" />
        </Link>
      </ScreenHeader>
      {success && <div className="alert-success mb-4">{success}</div>}
      Hello
    </Wrapper>
  );
};

export default Categories;

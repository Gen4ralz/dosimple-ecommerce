import { PlusIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import ScreenHeader from '../../components/ScreenHeader';
import { clearMessage } from '../../store/reducers/globalReducer';
import { useGetProductsQuery } from '../../store/services/productService';
import Wrapper from './Wrapper';

const Products = () => {
  let { page } = useParams();
  if (!page) {
    page = 1;
  }
  const { data = [], isFetching } = useGetProductsQuery(page);
  console.log(data);
  const { success } = useSelector((state) => state.globalReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (success) {
      toast.success(success);
    }
    return () => {
      dispatch(clearMessage());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Wrapper>
      <ScreenHeader>
        <Link to="/dashboard/create-product" className="btn-dark">
          Add Products <PlusIcon className="w-5 h-5 inline-block ml-2" />
        </Link>
        <Toaster />
      </ScreenHeader>
    </Wrapper>
  );
};

export default Products;

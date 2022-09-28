import { PlusIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import ScreenHeader from '../../components/ScreenHeader';
import Wrapper from './Wrapper';

const Products = () => {
  return (
    <Wrapper>
      <ScreenHeader>
        <Link to="/dashboard/create-product" className="btn-dark">
          Add Products <PlusIcon className="w-5 h-5 inline-block ml-2" />
        </Link>
      </ScreenHeader>
    </Wrapper>
  );
};

export default Products;

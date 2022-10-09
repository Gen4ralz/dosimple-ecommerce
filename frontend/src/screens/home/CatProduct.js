import { useParams } from 'react-router-dom';
import Header from '../../components/home/Header';
import Nav from '../../components/home/Nav';
import { useCatProductsQuery } from '../../store/services/homeProducts';

const CatProduct = () => {
  const { name, page = 1 } = useParams();
  const { data, isFetching } = useCatProductsQuery({
    name,
    page: parseInt(page),
  });
  console.log(data);
  return (
    <>
      <Nav />
      <div className="mt-[70px]">
        <Header>#{name}</Header>
      </div>
    </>
  );
};

export default CatProduct;

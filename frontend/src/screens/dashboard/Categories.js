import { useEffect } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import ScreenHeader from '../../components/ScreenHeader';
import Wrapper from './Wrapper';
import { clearMessage } from '../../store/reducers/globalReducer';
import { useGetQuery } from '../../store/services/categoryService';
import Spinner from '../../components/Spinner';

const Categories = () => {
  const { page } = useParams();
  console.log(page);
  const { success } = useSelector((state) => state.globalReducer);
  const dispatch = useDispatch();
  const { data = [], isLoading } = useGetQuery(page ? page : 1);
  console.log(data, isLoading);

  useEffect(() => {
    return () => {
      dispatch(clearMessage());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <ScreenHeader>
        <Link to="/dashboard/create-category" className="btn-dark">
          Add categories <PlusIcon className="w-5 h-5 inline-block ml-2" />
        </Link>
      </ScreenHeader>
      {success && <div className="alert-success mb-4">{success}</div>}
      {isLoading ? (
        <Spinner />
      ) : (
        data?.categories?.length > 0 && (
          <div>
            <table className="w-full bg-gray-900 rounded-md">
              <thead>
                <tr className="border-b border-gray-800 text-left">
                  <th className="p-3 uppercase text-sm font-medium">name</th>
                  <th className="p-3 uppercase text-sm font-medium">edit</th>
                  <th className="p-3 uppercase text-sm font-medium">delete</th>
                </tr>
              </thead>
              <tbody>
                {data?.categories?.map((category) => (
                  <tr key={category._id} className="odd:bg-gray-800">
                    <td className="p-3 capitalize text-sm font-normal text-gray-400">
                      {category.name}
                    </td>
                    <td className="p-3 capitalize text-sm font-normal text-gray-400">
                      <button>edit</button>
                    </td>
                    <td className="p-3 capitalize text-sm font-normal text-gray-400">
                      <button>delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      )}
    </Wrapper>
  );
};

export default Categories;

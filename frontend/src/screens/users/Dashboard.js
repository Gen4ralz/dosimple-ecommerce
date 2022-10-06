import Nav from '../../components/home/Nav';
import Header from '../../components/home/Header';
import AccountList from '../../components/home/AccountList';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { user } = useSelector((state) => state.authReducer);
  return (
    <>
      <Nav />
      <div className="mt-[70px]">
        <Header>my account</Header>
        <div className="my-container mt-[80px]">
          <div className="flex felx-wrap -mx-6">
            <div className="w-full p-6 md:w-4/12">
              <AccountList />
            </div>
            <div className="w-full md:w-8/12 p-6">
              <h1 className="heading">name</h1>
              <span className="block mt-3 capitalize font-base text-sm">
                {user?.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

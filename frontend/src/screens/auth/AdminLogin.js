import { useEffect, useState } from 'react';
import { useAuthLoginMutation } from '../../store/services/authService';
import { useDispatch } from 'react-redux';
import { setAdminToken } from '../../store/reducers/authReducer';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const updateHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const [login, response] = useAuthLoginMutation();
  console.log('my response', response);
  const errors = response?.error?.data?.errors
    ? response?.error?.data?.errors
    : [];
  const submitHandler = (e) => {
    e.preventDefault();
    login(state);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (response.isSuccess) {
      localStorage.setItem('admin-token', response?.data?.token);
      dispatch(setAdminToken(response?.data?.token));
      navigate('/dashboard/products');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response.isSuccess]);
  return (
    <div className="bg-blackdark h-screen flex justify-center items-center">
      <form
        className="bg-blackgrey p-5 w-10/12 sm:w-8/12 md:w-6/12 lg:w-3/12  rounded-md"
        onSubmit={submitHandler}
      >
        <h1 className="mb-4 text-white font-semibold capitalize text-lg">
          Admin login
        </h1>
        {errors.length > 0 &&
          errors.map((error, key) => (
            <div key={key}>
              <p className="text-red-700 text-sm font-medium">{error.msg}</p>
            </div>
          ))}
        <div className="my-4">
          <input
            type="email"
            name="email"
            className="w-full bg-blackdark p-3 rounded outline-none text-white"
            placeholder="Enter email"
            onChange={updateHandler}
            value={state.email}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            className="w-full bg-blackdark p-3 rounded outline-none text-white"
            placeholder="Enter password"
            onChange={updateHandler}
            value={state.password}
          />
        </div>
        <div className="mt-4">
          <input
            type="submit"
            value={response.isLoading ? 'Loading...' : 'Sign In'}
            className="capitalize bg-indigo-500 w-full py-3 rounded-lg text-white font-semibold cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;

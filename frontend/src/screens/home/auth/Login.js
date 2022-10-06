import { Link, useNavigate } from 'react-router-dom';
import Nav from '../../../components/home/Nav';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useUserLoginMutation } from '../../../store/services/authService';
import { useDispatch } from 'react-redux';
import { setUserToken } from '../../../store/reducers/authReducer';
import { useForm } from '../../../hooks/Form';
import { showError } from '../../../utils/ShowError';
import Header from '../../../components/home/Header';

const Login = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const { state, onChange } = useForm({
    email: '',
    password: '',
  });

  const [loginUser, response] = useUserLoginMutation();
  const submitHandler = (e) => {
    e.preventDefault();
    loginUser(state);
  };
  useEffect(() => {
    if (response.isError) {
      setErrors(response?.error?.data?.errors);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response?.error?.data]);

  const dispatch = useDispatch();
  useEffect(() => {
    if (response.isSuccess) {
      localStorage.setItem('userToken', response?.data?.token);
      dispatch(setUserToken(response?.data?.token));
      navigate('/user');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response.isSuccess]);

  return (
    <>
      <Nav />
      <div className="mt-[70px] pb-[80px]">
        <Header>sign in</Header>
        <div className="flex flex-wrap justify-center">
          <motion.div
            initial={{ opacity: 0, x: '-100vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 p-6"
          >
            <form
              className="bg-white rounded-lg -mt-20 border border-gray-200 p-5"
              onSubmit={submitHandler}
            >
              <h1 className="heading mb-5">Sign In</h1>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`form-input ${
                    showError(errors, 'email')
                      ? 'border-rose-600 bg-rose-50'
                      : 'border- gray - 300'
                  }`}
                  value={state.email}
                  onChange={onChange}
                />
                {showError(errors, 'email') && (
                  <span className="error">{showError(errors, 'email')}</span>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={`form-input ${
                    showError(errors, 'password')
                      ? 'border-rose-600 bg-rose-50'
                      : 'border- gray - 300'
                  }`}
                  value={state.password}
                  onChange={onChange}
                />
                {showError(errors, 'password') && (
                  <span className="error">{showError(errors, 'password')}</span>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="submit"
                  value={`${response.isLoading ? 'Loading...' : 'sign in'}`}
                  className="btn btn-indigo w-full"
                  disabled={response.isLoading ? true : false}
                />
              </div>
              <div>
                <p>
                  Don't have account ?
                  <span className="ml-3 capitalize font-medium text-base text-green-900">
                    <Link to="/register">register</Link>
                  </span>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default Login;

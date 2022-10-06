import { Link, useNavigate } from 'react-router-dom';
import Nav from '../../../components/home/Nav';
import Header from '../Header';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useUserRegisterMutation } from '../../../store/services/authService';
import { useDispatch } from 'react-redux';
import { setUserToken } from '../../../store/reducers/authReducer';
import { setSuccess } from '../../../store/reducers/globalReducer';

const Register = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [saveRegister, response] = useUserRegisterMutation();

  const onChangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    saveRegister(state);
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
      dispatch(setSuccess(response?.data?.msg));
      navigate('/user');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response.isSuccess]);

  const showError = (name) => {
    const exist = errors.find((err) => err.param === name);
    if (exist) {
      return exist.msg;
    } else {
      return false;
    }
  };
  return (
    <>
      <Nav />
      <div className="mt-[70px] pb-[80px]">
        <Header>Register</Header>
        <div className="flex flex-wrap justify-center">
          <motion.div
            initial={{ opacity: 0, x: '-100vw' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 p-6"
          >
            <form
              onSubmit={submitHandler}
              className="bg-white rounded-lg -mt-20 border border-gray-200 p-10"
            >
              <h1 className="heading mb-5">Register</h1>
              <div className="mb-4">
                <label htmlFor="name" className="form-label">
                  name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={`form-input ${
                    showError('name')
                      ? 'border-rose-600 bg-rose-50'
                      : 'border- gray - 300'
                  }`}
                  value={state.name}
                  onChange={onChangeHandler}
                />
                {showError('name') && (
                  <span className="error">{showError('name')}</span>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`form-input ${
                    showError('email')
                      ? 'border-rose-600 bg-rose-50'
                      : 'border- gray - 300'
                  }`}
                  value={state.email}
                  onChange={onChangeHandler}
                />
                {showError('email') && (
                  <span className="error">{showError('email')}</span>
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
                    showError('password')
                      ? 'border-rose-600 bg-rose-50'
                      : 'border- gray - 300'
                  }`}
                  value={state.password}
                  onChange={onChangeHandler}
                />
                {showError('password') && (
                  <span className="error">{showError('password')}</span>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="submit"
                  value={`${response.isLoading ? 'Loading...' : 'sign up'}`}
                  className="btn btn-indigo w-full"
                  disabled={response.isLoading ? true : false}
                />
              </div>
              <div>
                <p>
                  Already have an account ?
                  <span className="ml-3 capitalize font-medium text-base text-green-900">
                    <Link to="/login">sign in</Link>
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
export default Register;

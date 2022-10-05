import { Link } from 'react-router-dom';
import Nav from '../../../components/home/Nav';
import Header from '../Header';
import { motion } from 'framer-motion';

const Register = () => {
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
            <form className="bg-white rounded-lg -mt-20 border border-gray-200 p-10">
              <h1 className="heading mb-5">Register</h1>
              <div className="mb-4">
                <label htmlFor="name" className="form-label">
                  name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-input"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-input"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-input"
                />
              </div>
              <div className="mb-4">
                <input
                  type="submit"
                  value="sign in"
                  className="btn btn-indigo w-full"
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

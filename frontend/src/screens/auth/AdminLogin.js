const AdminLogin = () => {
  return (
    <div className="bg-blackdark h-screen flex justify-center items-center">
      <form className="bg-blackgrey p-5 w-10/12 sm:w-8/12 md:w-6/12 lg:w-3/12  rounded-md">
        <h1 className="mb-4 text-white font-semibold capitalize text-lg">
          Admin login
        </h1>
        <div className="mb-4">
          <input
            type="email"
            name=""
            className="w-full bg-blackdark p-3 rounded outline-none text-white"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name=""
            className="w-full bg-blackdark p-3 rounded outline-none text-white"
            placeholder="Enter password"
          />
        </div>
        <div className="mt-4">
          <input
            type="submit"
            value="sign in"
            className="capitalize bg-indigo-500 w-full py-3 rounded-lg text-white font-semibold cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;

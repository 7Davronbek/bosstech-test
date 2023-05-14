const Login = () => {
  return (
    <div className="Login py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <h5 className="text-center mb-4">LOGIN</h5>
            <form>
              <label htmlFor="Login">Login</label>
              <input
                className="form-control mb-4"
                id="Login"
                type="text"
                required
              />

              <label htmlFor="Email">Email</label>
              <input
                className="form-control mb-4"
                id="Email"
                type="email"
                required
              />

              <label htmlFor="Phone Number">Phone Number</label>
              <input
                className="form-control mb-4"
                id="Phone Number"
                type="number"
                required
              />

              <label htmlFor="Password">Password</label>
              <input
                className="form-control mb-4"
                id="Password"
                type="password"
                required
              />

              <label htmlFor="Name">Name</label>
              <input
                className="form-control mb-4"
                id="Name"
                type="text"
                required
              />

              <button type="submit" className="btn btn-outline-dark d-flex ms-auto px-4 py-2">LOGIN</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

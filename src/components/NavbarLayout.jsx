/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const NavbarLayout = (props) => {
  return (
    <>
      <div className="NavbarLayout py-4">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <h6>
                <Link to="/">LOGO</Link>
              </h6>
            </div>
            <div className="col-5 ms-auto d-flex align-items-center justify-content-end">
                <Link to='/profile'>Profile</Link>
                <Link to='/login'>Login</Link>
                <button className="btn btn-outline-dark mx-4">Logout</button>
            </div>
          </div>
        </div>
      </div>

      {props.children}
    </>
  );
};

export default NavbarLayout;

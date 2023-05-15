/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";

const NavbarLayout = (props) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("TEST_USER_INFORMATION");
    navigate("/login", { replace: true });
  };
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
            <div className="col-lg-5 ms-auto d-flex align-items-center justify-content-end">
              <Link className="ms-4" to="/">
                Main
              </Link>
              <Link className="ms-4" to="/profile">
                Profile
              </Link>
              <Link className="ms-4" to="/dogs">
                Dogs
              </Link>
              <button onClick={logout} className="btn btn-outline-dark mx-4">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {props.children}
    </>
  );
};

export default NavbarLayout;

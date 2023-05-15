import { useEffect, useState } from "react";
import NavbarLayout from "../components/NavbarLayout";

const Profile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUser = JSON.parse(localStorage.getItem("TEST_USER_INFORMATION"));
    setUser(getUser);
  }, []);
  return (
    <NavbarLayout>
      <div className="Profile Login ">
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <h5>Profile</h5>
            </div>
            <div className="col-lg-6 text-center mx-auto my-5">
              <div className="cards">
                <h5 className="mb-3">Name: {user?.name}</h5>
                <h6 className="mb-3">Login: @{user?.login}</h6>
                <h6 className="mb-3">Birthday: {user.birthday}</h6>
                <a className="d-block mb-2" href={`tel:${user?.phone}`}>Phone number: <b>{user.phone}</b></a>
                <a className="d-block mb-2" href={`mailto:${user?.email}`}>Email: <b>{user.email}</b></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavbarLayout>
  );
};

export default Profile;

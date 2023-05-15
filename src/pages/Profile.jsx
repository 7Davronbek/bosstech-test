import NavbarLayout from "../components/NavbarLayout";

const Profile = () => {
  return (
    <NavbarLayout>
      <div className="Profile Login" >
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h5>Profile</h5>
            </div>
            <div className="col-lg-6 text-center">
                <div className="cards">
                </div>
            </div>
          </div>
        </div>
      </div>
    </NavbarLayout>
  );
};

export default Profile;

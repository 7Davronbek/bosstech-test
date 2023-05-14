import { useEffect, useState } from "react";
import NavbarLayout from "../components/NavbarLayout";
import axios from "axios";

const Main = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    setTimeout(async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(data);
    }, 1000);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <NavbarLayout>
      <div className="Main">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">Welcome!</div>

            {users.length > 0 ? (
              users.map((item) => (
                <div key={item.id} className="col-lg-3 mb-4 ">
                  <div className="cards">
                    <div className="d-flex align-items-center mb-3">
                      <img
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                        src="/images/user.jpg"
                        alt=""
                      />
                      <div className="ms-3">
                      <h5 className="">{item.name}</h5>
                      <h6>@{item.username}</h6>
                      </div>
                    </div>
                    <a className="d-block" target="_blank" href={`mailto:${item.email}`} rel="noreferrer">{item.email}</a>
                    <a className="d-block" target="_blank" href={`tel:${item.phone}`} rel="noreferrer">{item.phone}</a>
                    <a className="d-block" target="_blank" href={`http://${item.website}`} rel="noreferrer">{item.website}</a>
                  </div>
                </div>
              ))
            ) : (
              <div className="spinner spinner-dark spinners-lg"></div>
            )}
          </div>
        </div>
      </div>
    </NavbarLayout>
  );
};

export default Main;

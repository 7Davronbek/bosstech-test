import { useEffect, useState } from "react";
import NavbarLayout from "../components/NavbarLayout";
import axios from "axios";
import { API_DOGS } from "../contstants";

const Dogs = () => {
  const [dogs, setDogs] = useState([]);
  const getDogs = async () => {
    const { data } = await axios.get(API_DOGS);
    setDogs(data.message);
  };

  useEffect(() => {
    getDogs();
  }, []);
  return (
    <NavbarLayout>
      <div className="Dogs">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <h5>Dogs</h5>
            </div>
            {dogs.length > 0 ? (
              dogs.map((item, index) => (
                <div key={index} className="col-lg-4 mb-4 ">
                  <div className="cards">
                    <img
                      style={{
                        width: "100%",
                        height: "300px",
                        borderRadius: "12px",
                        objectFit: "cover",
                      }}
                      src={item}
                      alt="Dogs"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))
            ) : (
              <h5 className="text-center">
                Loading{" "}
                <span className="spinner-border spinner-border-sm"></span>
              </h5>
            )}
            <div className="col-lg-4 mb-4">
              <div className="cards">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavbarLayout>
  );
};

export default Dogs;

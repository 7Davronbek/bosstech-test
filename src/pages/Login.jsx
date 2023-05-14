import { useEffect, useState } from "react";
import InputMask from "react-input-mask";

const Login = () => {
  const [login, setLogin] = useState("");
  const [loginError, setLoginError] = useState("");

  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("+998");
  const [phoneError, setPhoneError] = useState("");

  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const [name, setName] = useState("");

  const [birthday, setBirthday] = useState("");
  const [birthdayError, setBirthdayError] = useState("");

  const [user, setUser] = useState([]);

  const onlyLettersAndNumbers = (e) => {
    setLogin(e.target.value);
    const isLetter = /^[A-Za-z0-9]*$/.test(e.target.value);
    isLetter && e.target.value.length >= 6
      ? setLoginError("")
      : setLoginError("Alphanumeric characters, at least 6, no spaces!");
  };

  const phoneCheck = (e) => {
    setPhone(e.target.value);
    e.target.value.length !== 17
      ? setPhoneError("Phone number is required!")
      : setPhoneError("");
  };

  const checkPassword = (e) => {
    setPassword(e.target.value);
    const isLetter = /^[A-Za-z0-9]*$/.test(e.target.value);
    const isCapital = /[A-Z]/.test(e.target.value);
    const isNumber = /[0-9]/.test(e.target.value);
    isLetter && isCapital && isNumber && e.target.value.length >= 8
      ? setPasswordError("")
      : setPasswordError(
          "Alphanumeric characters, at least 8, no spaces, at least one capital letter and number!"
        );
  };

  const getAge = (e) => {
    setBirthday(e.target.value);
    Math.floor((new Date() - new Date(e.target.value).getTime()) / 3.15576e10) <
    18
      ? setBirthdayError("You are under 18, you cannot register!")
      : setBirthdayError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: user.length + 1,
      login,
      email,
      phone,
      name,
      birthday,
    };
    setUser((prev) => [...prev, newUser]);
    localStorage.setItem("TEST_USER_INFORMATION", JSON.stringify(user));
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="Login py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <h5 className="text-center mb-4">LOGIN</h5>
            <form onSubmit={handleSubmit}>
              <label htmlFor="Login">Login</label>
              <input
                value={login}
                onChange={onlyLettersAndNumbers}
                className="form-control mb-2"
                id="Login"
                type="text"
                required
              />
              <h6 className="text-danger mb-4">{loginError}</h6>

              <label htmlFor="Email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control mb-4"
                id="Email"
                type="email"
                required
              />

              <label htmlFor="Phone Number">Phone Number</label>
              <InputMask
                className="form-control mb-2"
                id="Phone Number"
                required
                value={phone}
                onChange={phoneCheck}
                mask="+998 99 999 99 99"
                maskChar=""
              />
              <h6 className="text-danger mb-4">{phoneError}</h6>

              <label htmlFor="Password">Password</label>
              <input
                className="form-control mb-2"
                id="Password"
                type={`${show ? "text" : "password"}`}
                required
                value={password}
                onChange={checkPassword}
              />
              <b onClick={() => setShow(!show)}> {show ? "hide" : "show"}</b>
              <h6 className="text-danger mb-4">{passwordError}</h6>

              <label htmlFor="Name">Name</label>
              <input
                className="form-control mb-2"
                id="Name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <h6 className="text-danger mb-4">
                {name.length > 0 && name.length < 2
                  ? "At least 2 characters!"
                  : ""}
              </h6>

              <label htmlFor="Birthday">Day of Birthday</label>
              <input
                className="form-control mb-2"
                id="Birthday"
                type="date"
                required
                value={birthday}
                onChange={getAge}
              />
              <h6 className="text-danger mb-4">{birthdayError}</h6>

              <button
                type="submit"
                className="btn btn-outline-dark d-flex ms-auto px-4 py-2"
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

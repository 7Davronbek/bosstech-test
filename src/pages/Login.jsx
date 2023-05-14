
const Login = () => {
  return (
    <div className='Login'>
      <div className="container">
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <h5 className="text-center">LOGIN</h5>
                <form>
                    <label htmlFor="Login">Login</label>
                    <input id="Login" type="text" required />
                    
                    <label htmlFor="Email">Email</label>
                    <input id="Email" type="email" required />
                    
                    <label htmlFor="Phone Number">Phone Number</label>
                    <input id="Phone Number" type="number" required />

                    <label htmlFor="Password">Password</label>
                    <input id="Password" type="password" required />

                    <label htmlFor="Name">Name</label>
                    <input id="Name" type="text" required />
                    

                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login

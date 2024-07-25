
const Login = () => {
  return (
    <>
      <div className="container">
        <div className="left">
            <img src="" alt="" />
        </div>
        <div className="right">
            <div className="title">
                <h2>Login to your account</h2>
                <p>Don’t have an account? <span>Sign Up</span></p>
            </div>
            <div className="login-with">
                <p>Login with Google</p>
                <p>Login with Facebook</p>
            </div>
            <div className="log">
                <input type="email"  placeholder="Email"/>
                <input type="password" placeholder="Password" />
                <button type="submit"> Log in</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login

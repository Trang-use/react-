// import './register.css';

function Register ()  {
    return (
      <div className="register-container">
        <form className="register-form">
          <h2> REGISTER </h2>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">register</button>
        </form>
      </div>
    );
  }
  
  export default Register;
  
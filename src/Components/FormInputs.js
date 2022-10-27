import React, { useState } from 'react'

export default function FormInputs() {

  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    console.log(formValues)
  }

  const validate = (values) => {
    const error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      error.username = "Username is Required";
    }
    if (!values.email) {
      error.email = "Email is Required";
    } else if (!regex.test(values.email)) {
      error.email = "Please enter a valid Email ID";
    }
    if (!values.password) {
      error.password = "Password is Required";
    } else if ((values.password).length < 4) {
      error.password = "Password must be 4 or more characters";
    } else if ((values.password).length > 10) {
      error.password = "Password must be less than 10 characters";
    }
    return error;
  }

  return (

    <div className="container">
      {/* <pre style={{ color: 'white' }}>{JSON.stringify(formValues, undefined, 2)}</pre> */}
      <div className="box">
        <div className="title">
          <h1>Sign In</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-data row-10">
            <div className="col-sm-10 col-md-12 col-lg-12 m-auto">
              <label className="form-label">Username</label>
              <input type="text" className="form-input" placeholder='Enter username' name="username" value={formValues.username} onChange={handleChange} />

            </div>
            <div style={{ color: 'red', marginLeft: '15px', fontSize: '14px', fontStyle: 'italic' }}>{formErrors.username}</div>
          </div>

          <div className="form-data row-10">
            <div className=" col-sm-10 col-md-12 col-lg-12 m-auto">
              <label className="form-label">Email ID</label>
              <input type="text" className="form-input" placeholder='Enter email id' name="email" value={formValues.email} onChange={handleChange} />
            </div>
            <div style={{ color: 'red', marginLeft: '15px', fontSize: '14px', fontStyle: 'italic' }}>{formErrors.email}</div>
          </div>

          <div className="form-data row-10">
            <div className=" col-sm-10 col-md-12 col-lg-12 m-auto">
              <label className="form-label">Password</label>
              <input type="password" className="form-input" placeholder='Enter password' name="password" value={formValues.password} onChange={handleChange} />
            </div>
            <div style={{ color: 'red', marginLeft: '15px', fontSize: '14px', fontStyle: 'italic' }}>{formErrors.password}</div>
            <div className="form-links">
              <a href="xyz">Forgot Password?</a>
            </div>
          </div>

          {/* <div className="form-data row-10">
            <div className=" col-sm-10 col-md-10 col-lg-12 m-auto">
              <div className="form-checkbox">
                <input className="form-checkbox-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-checkbox-label" htmlFor="flexCheckDefault">
                  Remember Me
                </label>
              </div>
            </div>
          </div> */}


          <div className="button ">
            <button type="submit" className="btn btn-dark">Sign In</button>
          </div>

          <div className='bottom-line'>
            <p>Don't have an account? <a href="abc"> Sign Up</a></p>
          </div>
        </form>

      </div>
    </div>

  );
}

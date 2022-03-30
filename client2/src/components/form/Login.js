import React, { useState } from 'react';
import './form.scss';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {login} from '../../action'
import { useEffect } from 'react';



const Login = (props) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [password1, setPassword1] = useState('');

  const submit = (e) => {
    e.preventDefault();

    
    console.log(props)
    
    props.login({login, password: password1})

    
    


  };

  useEffect(() => {
    
    if(props.role.length > 0){
      console.log(props.role)
      switch(props.role[0]){
        case "USER" : return navigate('/student') 
        case "TEACHER" : return navigate('/teacher')
        case "ADMIN" : return navigate('/admin')
        default : return null
      }
    }
    
  }, [props.role])

  console.log(props)
  console.log(props.role && props.role[0] + 'role')


  return (
    <div className="d-flex justify-content-center form">
      <div className="col-md-3 mt-5 form__main">
        <h2 className="text-center">Login</h2>
        <form className="row  needs-validation" noValidate onSubmit={submit}>
          <div className="col-md-4">
            <label
              htmlFor="validationCustom01"
              className="form-label">
              Login
            </label>
            <input
              type="text" className="form-control"
              id="validationCustom01"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustom02" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="validationCustom02"
              value={password1}
              
              onChange={(e) => setPassword1(e.target.value)}
              required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>


          <div className="col-4">
            <button className="btn btn-primary" type="submit">Submit</button>
            <button className="btn btn-primary" onClick={() => navigate('/register')}>register</button>
          </div>
          <div className="col-4">
            <button className="btn btn-primary" onClick={() => navigate('/')}>home</button>
          </div>

        </form>
      </div>

    </div>
  );

};

const mapStateToProps = (state) => {
  return {
    token: state.token,
    role: state.role,
    user: state.user
  };
};

export default connect(mapStateToProps, {login})(Login);
import React, { useState } from 'react';
import './form.scss';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {register} from '../../action'


const initialstate = {
  first_name : '',
  last_name : '',
  login: '',
  password: '',

}

const Register = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(initialstate);
  const [password1, setPassword1] = useState('');
  
  console.log(user)
  const submit = async (e) => {
    e.preventDefault();
    if(user.password === password1){

      
      props.register(user)

      props.reg.login && navigate('/login') 

    }else{
      console.log('not possible password')
    }
    
  };
  console.log(props)


  return (
    <div className="d-flex justify-content-center form" style={{ minHeight: '100vh' }}>
      <div className="col-md-3 mt-5 form__main">
        <h2 className="text-center">Register</h2>
        <form className="row g-2 needs-validation" noValidate onSubmit={submit}>
          <div className="col-md-4">
            <label
              htmlFor="validationCustom01"
              className="form-label">
              First name
            </label>
            <input
              type="text" className="form-control"
              id="validationCustom01"
              value={user.first_name}
              onChange={(e) => setUser({...user, first_name: e.target.value})}
              required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustom02" className="form-label">Last name</label>
            <input
              type="text"
              className="form-control"
              id="validationCustom02"
              value={user.last_name}
              onChange={(e) => setUser({...user, last_name: e.target.value})}
              required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-md-4">
            <label
              htmlFor="validationCustom03"
              className="form-label">
              Login
            </label>
            <input
              type="text" className="form-control"
              id="validationCustom03"
              value={user.login}
              onChange={(e) => setUser({...user, login: e.target.value})}
              required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustom04" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="validationCustom04"
              value={user.password}
              onChange={(e) => setUser({...user, password:e.target.value})}
              required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustom05" className="form-label">Confirm Password</label>
            <input
              type="text"
              className="form-control"
              id="validationCustom05"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>


          <div className="col-4">
            <button className="btn btn-primary" type="submit">Submit</button>
            <button className="btn btn-primary" onClick={() => navigate('/login')}>login</button>
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
    reg: state.register
  };
};

export default connect(mapStateToProps, {register})(Register);
import React from 'react';
import './Navbar.scss';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineCloseSquare, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {
  const navigate = useNavigate();


  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
          <Link to="/" className="navbar-brand">KGD</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <AiOutlineMenu />
            {/*<span className="navbar-toggler-icon"></span>*/}
            {/*<i className="fa-solid fa-ellipsis-vertical"></i>*/}
          </button>
          <div className="collapse navbar-collapse nvb" id="navbarSupportedContent">
            <button className="navbar-toggler nvb-close" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    style={{ position: 'absolute' }}
                    aria-label="Toggle navigation">
              <AiOutlineCloseSquare />
            </button>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/courses" className="nav-link">Courses</Link>
              </li>
              <li className="nav-item">
                <Link to="/news" className="nav-link">News</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>

            </ul>
            <div className="d-flex">
              <button className="btn btn-primary" onClick={() => navigate('/login')}>Login</button>
            </div>


          </div>
        </div>
      </nav>
    </div>
  );

};

export default Navbar;
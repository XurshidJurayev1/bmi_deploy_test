import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "../formSource";
import "../style/dark.scss";
import React, { useContext, useState, useEffect } from "react";
import {connect} from 'react-redux'
import { DarkModeContext } from "../context/darkModeContext";
import AdminOutlet from "./adminDash/AdminOutlet";
import AdminIndex from "./adminDash/AdminIndex";

import DefaultLayout from './DefaultLayout';
import Home from './pages/home';

import Login from './form/Login';
import Register from './form/Register';

import News from './pages/news/News';
import Contact from './pages/contact/Contact';
import Courses from './pages/courses/Courses';


import Notfoundpage from './404/NotFoundpage';

import Profile from './adminDash/main/profile/single/Profile'

import UserList from './adminDash/main/users/pages/list/List'
import UserSingle from './adminDash/main/users/pages/single/Single';
import UserNew from './adminDash/main/users/pages/new/New';

import NewsList from './adminDash/main/new/pages/List'
import NewsAdd from './adminDash/main/new/pages/New'
import NewsSingle from './adminDash/main/new/pages/Single'

import List from './adminDash/pages/list/List'
import Single from './adminDash/pages/single/Single'
import New from './adminDash/pages/new/New'



const App = (props) => {
  const { darkMode } = useContext(DarkModeContext);
  const [admin, setAdmin] = useState(true)
  const [user, setUser] = useState(false)
  const [teacher, setTeacher] = useState(false)

  const func = () => {
    if(props.role.length > 0){
      switch(props.role[0]){
        case "ADMIN" : return setAdmin(true)
        case "USER" : return setUser(true)
        case "TEACHER" : return setTeacher(true)
        default: return  null
      }
    }else{
      return null
    }

  }

  useEffect(() => {
    func()
    console.log(props)
    
  }, [props.role])

  console.log(admin)
  console.log(user)
  console.log(teacher)

  

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>

        {
          admin && 
          <Route path="/admin/*" element={<AdminOutlet/>}>
            <Route index element={<AdminIndex/>}/> 
            <Route path="profile">
              <Route index element={<Profile />} />
              <Route path=":userId" element={<UserSingle />} />
              <Route
                path="edit"
                element={<UserNew inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="users">
              <Route index element={<UserList />} />
              <Route path=":userId" element={<UserSingle />} />
              <Route
                path="new"
                element={<UserNew inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="teachers">
              <Route index element={<List />} />
              <Route path=":teachersId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="news">
              <Route index element={<NewsList />} />
              <Route path=":newsId" element={<NewsSingle />} />
              <Route
                path="new"
                element={<NewsAdd inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path='*' element={<Notfoundpage/>} />
          </Route>
        }

        {
          user && 
          <Route path='/student/*' >
            <Route index element={<h1>USER PAGE</h1>} />
          </Route>
        }

        {
          teacher && 
          <Route path='/teacher/*' >
            <Route index element={<h1>TEACHER PAGE</h1>} />
          </Route>
        }

        <Route path="/" exact={true} element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/disabled" element={<h1>disabled</h1>} />
        </Route>


        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path='*' element={<Notfoundpage/>} />
      

          {/* <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    role: state.role,
    token: state.token
  }
}


export default connect(mapStateToProps, {})(App);

import React, { Component, Fragment } from "react";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwtDecode from "jwt-decode";
import "bootstrap/dist/css/bootstrap.min.css";
import { getItem } from "../../services/storage/storage";
// component layout
import Footer from "../layout/Footer";
// component authorization
// import ForgetPass from '../Authorization/ForgetPass';
import ForgetPassword from "../Authorization/forgetPaasword";
import LogInForm from "../Authorization/loginForm";
import LogOut from "../Authorization/logout";
import ResetPass from "../Authorization/resetpass";
import RegisterForm from "../Authorization/registerForm";
// component pages
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
// import AllCourses from '../pages/courses/allCourses/AllCourses';
import Courses from "../pages/courses/allCourses/courses";
// import SingleCourse from '../pages/courses/singlecourse/SingleCourse';
import CourseInfo from "../pages/courses/singlecourse/courseInfo";
import Education from "../pages/Education";
import Landing from "../pages/Landing/Landing";
import NotFound from "../pages/NotFound";
import Arshive from "../pages/posts/arshive/Arshive";
import SinglePost from "../pages/posts/singlePost/SinglePost";
// component userPanle
import Panel from "../user/panel/Panle";
import IsLogged from "../../services/islogged";
import adminLogIn from "../../screens/login/Login";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

export const Routes = () => {
  const isAdmin = getItem("role");
  return (
    <Fragment>
      <Router>
        <ToastContainer
          transition={Zoom}
          limit={3}
          position="top-center"
          autoClose={7000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick={false}
          rtl
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Switch>
          {/* pages */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/aboutUs" component={AboutUs} />
          <Route exact path="/contactUs" component={ContactUs} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/course/:courseID" component={CourseInfo} />

          {/* authorization */}
          {/* <Route exact path='/logIn' component={LogIn}/> */}
          <Route exact path="/logIn" component={LogInForm} />
          <Route exact path="/register" component={RegisterForm} />
          {/* <Route exact path='/register' component={Register}/> */}
          <Route exact path="/forgetPassword" component={ForgetPassword} />
          <Route exact path="/resetpassword" component={ResetPass} />
          {/* <Route exact path='/forgetPassword' component={ForgetPass}/> */}

          {/* userPanle */}
          <Redirect from="userPanel" to="/logIn" />
          {/* {IsLogged('/userPanel', Panel)} */}
          {/* {isAdmin != "student" && (
            )} */}
          <Route exact path="/admin/login" component={adminLogIn} />
          <Redirect from="/admin" to="/admin/login" />
          {/* {getItem("token") && <Route exact path='/userPanel' component={Panel}/>} */}
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Routes;

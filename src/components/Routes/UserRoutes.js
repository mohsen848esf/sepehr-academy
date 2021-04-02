import React, { Component, Fragment, lazy } from 'react'
import { ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import jwtDecode from 'jwt-decode'
import 'bootstrap/dist/css/bootstrap.min.css'
import { getItem } from '../../services/storage/storage'
// component layout
// component authorization
// import ForgetPass from '../Authorization/ForgetPass';
// import Header from '../../components/layout/header'
import Footer from '../../components/layout/Footer'
import ForgetPassword from '../Authorization/forgetPaasword'
import ForgetPas from '../Authorization/WizardForms/wizard'

import LogInForm from '../Authorization/loginForm'
import LogOut from '../Authorization/logout'
import ResetPass from '../Authorization/resetpass'
import RegisterForm from '../Authorization/registerForm'
// component pages
import AboutUs from '../pages/AboutUs'
import ContactUs from '../pages/ContactUs'
// import AllCourses from '../pages/courses/allCourses/AllCourses';
import Courses from '../pages/courses/allCourses/courses'
// import SingleCourse from '../pages/courses/singlecourse/SingleCourse';
import CourseInfo from '../pages/courses/singlecourse/courseInfo'
import Education from '../pages/Education'
import Landing from '../pages/Landing/Landing'
import NotFound from '../pages/NotFound'
import Arshive from '../pages/posts/arshive/Arshive'
import SinglePost from '../pages/posts/singlePost/SinglePost'
// component userPanle
import Panel from '../user/panel/Panle'
import StudentDashboard from '../user/userPanel/Panel'
import Blogs from '../pages/posts/arshive/Arshive'
import Blog from '../pages/posts/singlePost/SinglePost'
import IsLogged from '../../services/islogged'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
const Header = lazy(() => import('../../components/layout/header'))
const MinFooter = lazy(() => import('../../components/layout/minFooter'))

const LandRoute = ({ component, path, footer = true }) => {
  // const [navActive, setnavActive] = useState(false)
  return (
    <>
      {footer === true ? (
        <Fragment>
          <Header />
          <Route path={path} component={component} />
          <footer className="page-footer font-small academy-footer pt-4">
            <Footer />
            <MinFooter />
          </footer>
        </Fragment>
      ) : (
        <Fragment>
          <Header />
          <div style={{ minHeight: '487px' }}>
            <Route path={path} component={component} />
          </div>
          <footer className="page-footer font-small academy-footer mt-5">
            <MinFooter />
          </footer>
        </Fragment>
      )}
    </>
  )
}
export class Routes extends Component {
  state = {}
  componentDidMount() {
    try {
      const jwt = getItem('token')
      const userRoule = jwtDecode(jwt)
      this.setState({ userRoule })
    } catch (ex) {}
  }
  render() {
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
            <LandRoute exact path="/" component={Landing} />
            <LandRoute exact path="/aboutUs" component={AboutUs} />
            <LandRoute exact path="/contactUs" component={ContactUs} />
            <LandRoute exact path="/education" component={Education} />
            <LandRoute exact path="/courses" component={Courses} />
            <LandRoute exact path="/course/:courseID" component={CourseInfo} />
            <LandRoute exact path="/Blogs" component={Blogs} />
            <LandRoute exact path="/Blog/:BlogId" component={Blog} />
            {/* authorization */}
            {/* <Route exact path='/logIn' component={LogIn}/> */}
            <LandRoute
              exact
              path="/logIn"
              component={LogInForm}
              footer={false}
            />
            <LandRoute
              exact
              path="/register"
              component={RegisterForm}
              footer={false}
            />
            {/* <Route exact path='/register' component={Register}/> */}
            <LandRoute
              exact
              path="/forgetPassword"
              component={ForgetPas}
              footer={false}
            />
            <LandRoute
              exact
              path="/resetpassword"
              component={ResetPass}
              footer={false}
            />
            {/* <Route exact path='/forgetPassword' component={ForgetPass}/> */}
            <LandRoute
              path="/student/dashboard"
              component={StudentDashboard}
              footer={false}
            />
            {/* userPanle */}
            {IsLogged('/userPanel', Panel)}
            {/* {getItem("token") && <Route exact path='/userPanel' component={Panel}/>} */}
            <LandRoute path="/not-found" component={NotFound} footer={false} />
            <Redirect to="/not-found" />
          </Switch>
        </Router>
      </Fragment>
    )
  }
}

export default Routes

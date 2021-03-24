import React, { Suspense, lazy } from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { ToastContainer, Zoom } from 'react-toastify'

import { history } from './history'
import Spinner from './components/@vuexy/spinner/Loading-spinner'
import { ContextLayout } from './core/utils/context/Layout'
import VerticalLayout from './layouts/VerticalLayout'
import { Fragment } from 'react'

// Route-based code splitting
const Header = lazy(() => import('./components/layout/header'))
const Footer = lazy(() => import('./components/layout/Footer'))
const Home = lazy(() => import('./components/pages/Landing/Landing'))
const loginUser = lazy(() => import('./components/Authorization/loginForm'))
const regUser = lazy(() => import('./components/Authorization/registerForm'))
const logOut = lazy(() => import('./components/Authorization/logout'))

const courses = lazy(() =>
  import('./components/pages/courses/allCourses/courses'),
)
const CourseInfo = lazy(() =>
  import('./components/pages/courses/singlecourse/courseInfo'),
)
const NotFound = lazy(() => import('./components/pages/NotFound'))

const login = lazy(() => import('./screens/login/Login'))
const register = lazy(() =>
  import('./screens/registerEmployee/registerEmployee'),
)

const Dashboard = lazy(() => import('./screens/Dashboard/Dashboard'))
const termList = lazy(() => import('./screens/termList/termList'))
const createTerm = lazy(() => import('./screens/termList/term/CreateNewTerm'))
const editTerm = lazy(() => import('./screens/termList/term/termEdit'))

const CreateCourse = lazy(() => import('./screens/Courses/courseForm'))
const students = lazy(() => import('./screens/student/studentList'))
const studentProfile = lazy(() => import('./screens/student/studentProfile'))

const courseList = lazy(() => import('./screens/Courses/CoursesList'))
const EditCourse = lazy(() => import('./screens/Courses/EditCourse'))

const News = lazy(() => import('./screens/news/NewsForm'))

// Set Layout and Component Using App Route
const RouteConfig = ({
  component: Component,
  fullLayout,
  permission,
  user,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      return (
        <ContextLayout.Consumer>
          {(context) => {
            return (
              <VerticalLayout {...props} permission="admin">
                <Suspense fallback={<Spinner />}>
                  <Component {...props} />
                </Suspense>
              </VerticalLayout>
            )
          }}
        </ContextLayout.Consumer>
      )
    }}
  />
)
// const mapStateToProps = state => {
//   return {
//     user: state.auth.login.userRole
//   }
// }

const AppRoute = RouteConfig
const LandRoute = ({ component, path, footer = true }) => {
  return (
    <>
      {footer === true ? (
        <Fragment>
          <Header />
          <Route path={path} component={component} />
          <Footer />
        </Fragment>
      ) : (
        <Fragment>
          <Header />
          <Route path={path} component={component} />
        </Fragment>
      )}
    </>
  )
}

class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
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
          <LandRoute exact path="/" component={Home} />
          <Redirect from="/landing" to="/" />

          <LandRoute path="/courses" component={courses} />
          <LandRoute path="/course/:courseID" component={CourseInfo} />
          {/* <LandRoute path="/logIn" component={loginUser} footer={false} />
          <LandRoute path="/register" component={regUser} footer={false} /> */}
          <Route path="/logout" component={logOut} />
          <Redirect from="/logIn" to="/logout" />
          <Redirect from="/register" to="/logout" />
          <Redirect from="/forgetPass" to="/logout" />
          <Redirect from="/resetPass" to="/logout" />
          <Redirect from="/userPanel" to="/logout" />

          <Route path="/admin/login" component={login} fullLayout />
          <Route path="/admin/register" component={register} fullLayout />

          <Redirect from="/admin/login" to="/logout" />
          <Redirect from="/admin/register" to="/logout" />

          <AppRoute path="/admin/dashboard" component={Dashboard} />
          <AppRoute path="/admin/termList" component={termList} />
          <AppRoute path="/admin/createTerm" component={createTerm} />
          <AppRoute path="/admin/editterm/:termId" component={editTerm} />

          <AppRoute path="/admin/CreateCourse" component={CreateCourse} />
          <AppRoute path="/admin/coursesList" component={courseList} />
          <AppRoute path="/admin/EditCourse/:courseId" component={EditCourse} />

          <AppRoute path="/admin/News/:pageName" component={News} />

          <AppRoute path="/admin/students" component={students} />
          <AppRoute
            path="/admin/studentProfile/:studentId"
            component={studentProfile}
          />
          <AppRoute path="/not-found" component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter

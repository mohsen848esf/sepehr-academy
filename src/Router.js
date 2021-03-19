import React, { Suspense, lazy } from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { ToastContainer, Zoom } from 'react-toastify'

import { history } from './history'
import Spinner from './components/@vuexy/spinner/Loading-spinner'
import { ContextLayout } from './core/utils/context/Layout'
import VerticalLayout from './layouts/VerticalLayout'

// Route-based code splitting
const Home = lazy(() => import('./components/pages/Landing/Landing'))
const loginUser = lazy(() => import('./components/Authorization/loginForm'))
const regUser = lazy(() => import('./components/Authorization/registerForm'))

const courses = lazy(() =>
  import('./components/pages/courses/allCourses/courses'),
)
const CourseInfo = lazy(() =>
  import('./components/pages/courses/singlecourse/courseInfo'),
)
const NotFound = lazy(() => import('./components/pages/NotFound'))

const login = lazy(() => import('./screens/login/Login'))
const logOut = lazy(() => import('./screens/LogOut/logOut'))
const register = lazy(() =>
  import('./screens/registerEmployee/registerEmployee'),
)

const Dashboard = lazy(() => import('./screens/Dashboard/Dashboard'))
const termList = lazy(() => import('./screens/termList/termList'))
const createTerm = lazy(() => import('./screens/termList/term/CreateNewTerm'))
const editTerm = lazy(() => import('./screens/termList/term/termEdit'))

const CreateCourse = lazy(() => import('./screens/addCourse/courseForm'))
const students = lazy(() => import('./screens/student/studentList'))
const studentProfile = lazy(() => import('./screens/student/studentProfile'))

const courseList = lazy(() => import('./screens/student/courseList'))

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
          <Route exact path="/" component={Home} />
          <Redirect from="/langing" to="/" />
          <Route path="/courses" component={courses} />
          <Route path="/course/:courseID" component={CourseInfo} />
          <Route path="/admin/login" component={login} fullLayout />
          <Route path="/admin/logOut" component={login} fullLayout />
          <Route path="/admin/register" component={register} fullLayout />

          <Route path="/logIn" component={loginUser} fullLayout />
          <Route path="/register" component={regUser} fullLayout />

          <AppRoute path="/admin/dashboard" component={Dashboard} />
          <AppRoute path="/admin/termList" component={termList} />
          <AppRoute path="/admin/createTerm" component={createTerm} />
          <AppRoute path="/admin/editterm/:termId" component={editTerm} />

          <AppRoute path="/admin/addCourse" component={CreateCourse} />
          <AppRoute path="/admin/courses/:studentId?" component={courseList} />
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

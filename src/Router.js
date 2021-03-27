import React, { Suspense, lazy, useEffect, useState } from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { ToastContainer, Zoom } from 'react-toastify'

import { history } from './history'
import Spinner from './components/@vuexy/spinner/Loading-spinner'
import { ContextLayout } from './core/utils/context/Layout'
import VerticalLayout from './layouts/VerticalLayout'
import { Fragment } from 'react'

// Route-based code splitting
const Header = lazy(() => import('./components/layout/header'))
// const Footer = lazy(() => import('./components/layout/Footer'))
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

const LodinEmployee = lazy(() => import('./screens/login/login'))
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

const NewsList = lazy(() => import('./screens/news/newsList'))
const AddNews = lazy(() => import('./screens/news/NewsForm'))
const EditNews = lazy(() => import('./screens/news/EditNews'))

const EmployeeList = lazy(() => import('./screens/Employee/EmployeeList'))
const EmployeeProfile = lazy(() => import('./screens/Employee/EmployeeProfile'))

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
  const [navActive, setnavActive] = useState(false)
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

          <LandRoute
            path="/admin/login"
            component={LodinEmployee}
            fullLayout
            footer={false}
          />
          <LandRoute
            path="/admin/register"
            component={register}
            fullLayout
            footer={false}
          />

          {/* <Redirect from="/admin/login" to="/logout" />
          <Redirect from="/admin/register" to="/logout" /> */}

          <AppRoute path="/admin/dashboard" component={Dashboard} />
          <AppRoute path="/admin/termList" component={termList} />
          <AppRoute path="/admin/createTerm" component={createTerm} />
          <AppRoute path="/admin/editterm/:termId" component={editTerm} />

          <AppRoute path="/admin/CreateCourse" component={CreateCourse} />
          <AppRoute path="/admin/coursesList" component={courseList} />
          <AppRoute path="/admin/EditCourse/:courseId" component={EditCourse} />

          <AppRoute path="/admin/News/List" component={NewsList} />
          <AppRoute path="/admin/News/createNews" component={AddNews} />
          <AppRoute path="/admin/News/editNews/:newsId" component={EditNews} />

          <AppRoute path="/admin/students" component={students} />
          <AppRoute
            path="/admin/studentProfile/:studentId"
            component={studentProfile}
          />

          <AppRoute path="/admin/Employee/List" component={EmployeeList} />
          <AppRoute
            path="/admin/Employee/EmployeeProfile/:employeetId"
            component={EmployeeProfile}
          />

          <AppRoute path="/not-found" component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter

import React, { Component, Fragment } from 'react'
import AdminRoutes from './Router'
import axios from 'axios'
import AuthService from './services/AuthService'
import { getItem, setItem, clearStorage } from './services/storage/storage'
import UserRoutes from './components/Routes/UserRoutes'
import Routes from './components/Routes/Routes'
import { ToastContainer, cssTransition, Zoom } from 'react-toastify'
// import AdminRoute from './admin/Router'
import 'react-toastify/dist/ReactToastify.css'

import './components/@vuexy/rippleButton/RippleButton'

import 'react-perfect-scrollbar/dist/css/styles.css'
import 'prismjs/themes/prism-tomorrow.css'

const isLogedd = getItem('token')
const userRole = getItem('role')
const App = (props) => {
  return (
    <Fragment>
      {isLogedd ? (
        userRole == 'student' ? (
          <UserRoutes />
        ) : (
          <AdminRoutes />
        )
      ) : (
        <Routes />
      )}
      {/* <AdminRoutes /> */}
    </Fragment>
  )
}

export default App

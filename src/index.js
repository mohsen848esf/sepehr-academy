import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { Layout } from './core/utils/context/Layout'
import * as serviceWorker from './serviceWorker'
import Spinner from './components/@vuexy/spinner/Fallback-spinner'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import './assets/css/mdb.rtl.min.css'
const LazyApp = lazy(() => import('./App'))

// configureDatabase()
ReactDOM.render(
  <Suspense fallback={<Spinner />}>
    <Layout>
      <LazyApp />
    </Layout>
  </Suspense>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

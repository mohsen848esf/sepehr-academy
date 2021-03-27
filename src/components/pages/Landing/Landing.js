import React, { useEffect, useState, Fragment } from 'react'
import Navar from '../../layout/header'
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBIcon,
  MDBCardUp,
  MDBAvatar,
  MDBRotatingCard,
  MDBSelect,
} from '../../../assets/css/mdbreact'
import { BrowserRouter as Router } from 'react-router-dom'
import WithUs from './withUs'
import Assortment from './assortment'
import OurServices from './ourServices'
import Courses from './courses'
import TopProfessors from './TopProfessors'

import '../../../assets/css/manual/pages/landingPage.css'
const Landing = () => {
  const [state, setState] = useState(false)
  const [flipped1, setFlipped1] = useState(false)

  const handleFlipping = (id) => () => {
    const cardId = `flipped${id}`
    setFlipped1(!flipped1)
  }
  const toggleCollapse = () => {
    setState(!state)
  }
  return (
    <section className="landing">
      {/* <Navar /> */}
      {/* header */}

      {/* content */}

      <WithUs />
      <Assortment />
      <OurServices />
      <Courses />
      <TopProfessors />
      {/* section4 */}

      {/* <footer className="page-footer font-small blue pt-4">
        <div className="container container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">Footer Content</h5>
              <p>
                Here you can use rows and columns here to organize your footer
                content.
              </p>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
        </div>
      </footer>
     */}
    </section>
  )
}
export default Landing

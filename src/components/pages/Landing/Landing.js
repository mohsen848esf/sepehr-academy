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
      {/* section4 */}
      <div className="row">
        <div className="col-lg-6">
          <img className="img-fluid"></img>
        </div>
        <div className="col-lg-6">
          <di className="col-lg-4">
            <MDBContainer>
              <MDBRow between>
                <MDBCol style={{ minHeight: '26rem', maxWidth: '22rem' }}>
                  <MDBRotatingCard
                    flipped={flipped1}
                    className="text-center h-100 w-100"
                  >
                    <MDBCard className="face front">
                      <div className="mx-auto white" circle>
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                          alt=""
                          className="rounded-circle"
                        />
                      </div>
                      <MDBCardBody>
                        <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
                        <p className="font-weight-bold blue-text">
                          Web developer
                        </p>
                        <a
                          href="#!"
                          className="rotate-btn text-dark"
                          data-card="card-1"
                          onClick={handleFlipping(1)}
                        >
                          <MDBIcon icon="redo" /> Click here to rotate
                        </a>
                      </MDBCardBody>
                    </MDBCard>
                    <MDBCard className="face back" style={{ height: '400px' }}>
                      <MDBCardBody>
                        <h4 className="font-weight-bold">About me</h4>
                        <hr />
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Maxime quae, dolores dicta. Blanditiis rem amet
                          repellat, dolores nihil quae in mollitia asperiores ut
                          rerum repellendus, voluptatum eum, officia laudantium
                          quaerat?
                        </p>
                        <hr />
                        <ul className="list-inline py-2">
                          <li className="list-inline-item">
                            <a href="#!" className="p-2 fa-lg fb-ic">
                              <MDBIcon fab icon="facebook-f" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#!" className="p-2 fa-lg tw-ic">
                              <MDBIcon fab icon="twitter" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#!" className="p-2 fa-lg gplus-ic">
                              <MDBIcon fab icon="google-plus" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#!" className="p-2 fa-lg li-ic">
                              <MDBIcon fab icon="linkedin" />
                            </a>
                          </li>
                        </ul>
                        <a
                          href="#!"
                          className="rotate-btn text-dark"
                          data-card="card-1"
                          onClick={handleFlipping(2)}
                        >
                          <MDBIcon icon="undo" /> Click here to rotate back
                        </a>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBRotatingCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </di>
          <di className="col-lg-4"></di>
          <di className="col-lg-4"></di>
        </div>
      </div>

      <footer className="page-footer font-small blue pt-4">
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
    </section>
  )
}
export default Landing

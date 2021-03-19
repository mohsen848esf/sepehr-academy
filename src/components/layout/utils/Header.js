import React, { Component, Fragment } from 'react'
import '../../assets/css/manual/layout/Header.css'
import { NavLink, Link } from 'react-router-dom'
import {
  getItem,
  removeItem,
  clearStorage,
} from '../../../services/storage/storage'

class Header extends Component {
  logOut = () => {
    clearStorage()
    this.props.history.replace('/logIn')
  }
  render() {
    return (
      <Fragment>
        <header className="header">
          {getItem('token') ? (
            <div className="profile ">
              <div className="profile-title">
                <p>
                  <Link to="/userPanel">پنل </Link>
                  <span onClick={() => this.logOut()}> خروج</span>
                </p>
              </div>
              <img
                src={
                  require('../../assets/images/pages/landingPage/section_5/Dr b.jpg')
                    .default
                }
                alt=""
              />
            </div>
          ) : (
            <ul className="log-reg ">
              <li className="log">
                <Link to="/logIn">ورود</Link>
              </li>
              <li className="reg">
                <Link to="/register">ثبت نام</Link>
              </li>
            </ul>
          )}
          <div className="menuIcon">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>

          <nav className="nav-right">
            <ul className="menu">
              <li className="self">
                <NavLink to="/">خانه</NavLink>
              </li>
              <li>
                <NavLink to="/education">آموزش</NavLink>
              </li>
              <li>
                <NavLink to="/">مالی</NavLink>
              </li>
              <li>
                <NavLink to="/aboutUs">درباره ما</NavLink>
              </li>
              <li>
                <NavLink to="/contactUs">تماس با ما</NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </Fragment>
    )
  }
}

export default Header

import React from 'react'
import logo from '../../../assets/img/logo/logo.png'
import M from '../../../assets/img/logo/M.png'
import shape1 from '../../../assets/img/logo/Shape1.png'
import shape2 from '../../../assets/img/logo/Shape2.png'
import '../../../assets/scss/components/app-loader.scss'
import './Spinner.css'
class SpinnerComponent extends React.Component {
  render() {
    return (
      // <div className="fallback-spinner vh-100 coustom-spinner-Box ">
      //   <img
      //     className="fallback-logo coustom-spinner-shape1"
      //     src={shape1}
      //     alt="logo"
      //   />

      //   <img
      //     className="fallback-logo coustom-spinner-shape2"
      //     src={shape2}
      //     alt="logo"
      //   />

      //   <img className="fallback-logo coustom-spinner-M" src={M} alt="logo" />

      //   <div className="loading">
      //     <div className="effect-1 effects"></div>
      //     <div className="effect-2 effects"></div>
      //     <div className="effect-3 effects"></div>
      //   </div>
      // </div>
      <div className="fallback-spinner vh-100">
        <img className="fallback-logo " src={logo} alt="logo" />

        <div className="loading">
          <div className="effect-1 effects"></div>
          <div className="effect-2 effects"></div>
          <div className="effect-3 effects"></div>
        </div>
      </div>
    )
  }
}

export default SpinnerComponent

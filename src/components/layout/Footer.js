import React, { Component ,Fragment } from 'react';
import '../../assets/css/manual/layout/Footer.css';


class Footer extends Component {
    render() {
        return (
            <Fragment>
                <footer className="footer" dir="rtl">

                    <div id="map-canvas" className="google-map col-md-12"></div>

                    <div className="contact-us ">
                        <div className="contact-us-box ">
                            <div className="items phone">
                                <img src={require('../../assets/images/layout/telephone.svg').default} alt="  "/>
                                <a href="#">01134343434</a> 
                            </div>
                            <div className="items location">
                                <img src={require('../../assets/images/layout/pin.svg').default} alt="  "/>
                                <a href="#">خیابان 18 دی روبروی خیام</a>                           
                            </div>
                            <div className="items email">
                                <img src={require('../../assets/images/layout/email.svg').default} alt="  "/>
                                <a href="#">runtimeTerror@gmail.com</a>                         
                            </div>
                            <div className="items social-networks-icon">
                                <img src={require('../../assets/images/layout/telegram.svg').default} alt=""/>
                                <img src={require('../../assets/images/layout/whatsapp.svg').default} alt=""/>
                                <img src={require('../../assets/images/layout/instagram.svg').default} alt=""/>
                            </div>
                        </div>
                    </div>
                </footer>

            </Fragment>
        )
    }
}

export default Footer;


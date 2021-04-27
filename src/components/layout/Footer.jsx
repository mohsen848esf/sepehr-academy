import React from "react";
import { Card, CardHeader, CardTitle, CardBody, Row, Col } from "reactstrap";
import {
  Circle,
  FeatureGroup,
  LayerGroup,
  LayersControl,
  Map,
  Marker,
  Popup,
  Rectangle,
  TileLayer,
  Tooltip,
} from "react-leaflet";

import "../../assets/scss/plugins/extensions/maps.scss";
import { Phone } from "react-feather";
import { Button } from "bootstrap";

const { BaseLayer, Overlay } = LayersControl;
const Footer = () => {
  const position = [36.567021, 53.062304];
  const rectangle = [
    [36.566, 53.062303],
    [36.567, 53.062301],
  ];
  return (
    <Row>
      <Col sm="12">
        {/* <Card className="overflow-hidden">
          <CardBody> */}
        <div className="academy-footerMap">
          <div className="academy-footerMap-contactUs">
            <Row className=" academy-footerMap-contactUsItemsBox">
              <Row className=" academy-footerMap-contactUs-Item">
                <Col className="col-lg-3 col-md-3 col-sm-3 col-3">
                  {" "}
                  <div className="user-img ml-xl-0 ml-2 academy-footerMap-contactUs-ItemIcon">
                    <img
                      className="img-fluid rounded-circle "
                      height="36"
                      width="36"
                      src={
                        require("../../assets/images/pages/landingPage/telephone.svg")
                          .default
                      }
                      alt="pic"
                    />
                  </div>
                </Col>
                <Col className="col-lg-9 col-md-9 col-sm-9 col-9 academy-footerMap-contactUs-Item-title">
                  <h5>01134723545</h5>
                </Col>
              </Row>
              <Row className=" academy-footerMap-contactUs-Item">
                <Col className="col-lg-3 col-md-3 col-sm-3 col-3">
                  {" "}
                  <div className="user-img ml-xl-0 ml-2 academy-footerMap-contactUs-ItemIcon">
                    <img
                      className="img-fluid rounded-circle "
                      height="36"
                      width="36"
                      src={
                        require("../../assets/images/pages/landingPage/pin.svg")
                          .default
                      }
                      alt="pic"
                    />
                  </div>
                </Col>
                <Col className="col-lg-9 col-md-9 col-sm-9 col-9 academy-footerMap-contactUs-Item-title">
                  <span>خیابان 18 دی روبروی خیام</span>
                </Col>
              </Row>
              <Row className=" academy-footerMap-contactUs-Item">
                <Col className="col-lg-3 col-md-3 col-sm-3 col-3">
                  {" "}
                  <div className="user-img ml-xl-0 ml-2 academy-footerMap-contactUs-ItemIcon">
                    <img
                      className="img-fluid rounded-circle "
                      height="36"
                      width="36"
                      src={
                        require("../../assets/images/pages/landingPage/email.svg")
                          .default
                      }
                      alt="pic"
                    />
                  </div>
                </Col>
                <Col className="col-lg-9 col-md-9 col-sm-9 col-9 academy-footerMap-contactUs-Item-title">
                  <span>sepehrAcademy@gmail.com</span>
                </Col>
              </Row>
              <Row className="contactUsItemsBox-dashed" />
              <Row className=" academy-footerMap-contactUs-Item Bottom">
                <Col className="col-3 contactUs-ItemBottomCol ">
                  {" "}
                  <div className="user-img ml-xl-0 ml-2 academy-footerMap-contactUs-ItemIcon">
                    <img
                      className="img-fluid rounded-circle "
                      height="45"
                      width="45"
                      src={
                        require("../../assets/images/pages/landingPage/telegram.svg")
                          .default
                      }
                      alt="pic"
                    />
                  </div>
                </Col>

                <Col className="col-3 contactUs-ItemBottomCol ">
                  {" "}
                  <div className="user-img ml-xl-0 ml-2 academy-footerMap-contactUs-ItemIcon">
                    <img
                      className="img-fluid rounded-circle "
                      height="45"
                      width="45"
                      src={
                        require("../../assets/images/pages/landingPage/whatsapp.svg")
                          .default
                      }
                      alt="pic"
                    />
                  </div>
                </Col>

                <Col className="col-3 contactUs-ItemBottomCol ">
                  {" "}
                  <div className="user-img ml-xl-0 ml-2 academy-footerMap-contactUs-ItemIcon">
                    <img
                      className="img-fluid rounded-circle "
                      height="45"
                      width="45"
                      src={
                        require("../../assets/images/pages/landingPage/instagram.svg")
                          .default
                      }
                      alt="pic"
                    />
                  </div>
                </Col>
              </Row>
              <Row className=" academy-footerMap-contactUs-xs">
                <Col className="col-2  ">
                  {" "}
                  <div className="user-img ml-xl-0 ml-2 ">
                    <img
                      className="img-fluid rounded-circle "
                      height="45"
                      width="45"
                      src={
                        require("../../assets/images/pages/landingPage/telephone.svg")
                          .default
                      }
                      alt="pic"
                    />
                  </div>
                </Col>

                <Col className="col-2  ">
                  {" "}
                  <div className="user-img ml-xl-0 ml-2 ">
                    <img
                      className="img-fluid rounded-circle "
                      height="45"
                      width="45"
                      src={
                        require("../../assets/images/pages/landingPage/pin.svg")
                          .default
                      }
                      alt="pic"
                    />
                  </div>
                </Col>

                <Col className="col-2 academy-footerMap-contactUs-xs-left ">
                  {" "}
                  <div className="user-img ml-xl-0 ml-2 ">
                    <img
                      className="img-fluid rounded-circle "
                      height="45"
                      width="45"
                      src={
                        require("../../assets/images/pages/landingPage/email.svg")
                          .default
                      }
                      alt="pic"
                    />
                  </div>
                </Col>

                <Col className="col-2 academy-footerMap-contactUs-xs-right ">
                  {" "}
                  <div className="user-img ml-xl-0 ml-2 ">
                    <img
                      className="img-fluid rounded-circle "
                      height="45"
                      width="45"
                      src={
                        require("../../assets/images/pages/landingPage/telegram.svg")
                          .default
                      }
                      alt="pic"
                    />
                  </div>
                </Col>

                <Col className="col-2  ">
                  {" "}
                  <div className="user-img ml-xl-0 ml-2 academy-footerMap-contactUs-ItemIcon">
                    <img
                      className="img-fluid rounded-circle "
                      height="45"
                      width="45"
                      src={
                        require("../../assets/images/pages/landingPage/whatsapp.svg")
                          .default
                      }
                      alt="pic"
                    />
                  </div>
                </Col>

                <Col className="col-2  ">
                  {" "}
                  <div className="user-img ml-xl-0 ml-2 ">
                    <img
                      className="img-fluid rounded-circle "
                      height="45"
                      width="45"
                      src={
                        require("../../assets/images/pages/landingPage/instagram.svg")
                          .default
                      }
                      alt="pic"
                    />
                  </div>
                </Col>
              </Row>
            </Row>
          </div>
          <Map center={position} zoom={18} style={{ display: "none" }}>
            <TileLayer
              attribution='&ampcopy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Tooltip
                direction="bottom"
                offset={[50, 20]}
                opacity={1}
                permanent
              >
                آکادمی سپهر
              </Tooltip>
            </Marker>
          </Map>
          <Map center={position} zoom={18}>
            <LayersControl position="topright">
              <BaseLayer checked name="OpenStreetMap.Mapnik">
                <TileLayer
                  attribution='&ampcopy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </BaseLayer>
              <BaseLayer name="OpenStreetMap.BlackAndWhite">
                <TileLayer
                  attribution='&ampcopy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                />
              </BaseLayer>
              <Overlay name="Marker with popup">
                <Marker position={position}>
                  {/* <Popup>You're here.</Popup> */}
                  <Tooltip
                    direction="bottom"
                    offset={[50, 20]}
                    opacity={1}
                    permanent
                  >
                    آکادمی سپهر
                  </Tooltip>
                </Marker>
              </Overlay>
              <Overlay checked name="Layer group with circles">
                <LayerGroup>
                  <Circle center={position} fillColor="blue" radius={30} />
                  <Circle
                    center={position}
                    fillColor="red"
                    radius={20}
                    stroke={false}
                  />
                  {/* <LayerGroup>
                    <Circle
                      center={[36.567021, 53.062304]}
                      color="green"
                      fillColor="green"
                      radius={20}
                    />
                  </LayerGroup> */}
                </LayerGroup>
              </Overlay>
              <Overlay name="Feature group">
                <FeatureGroup color="purple">
                  <Popup>Popup </Popup>
                  <Circle center={[36.567021, 53.062304]} radius={20} />
                  <Rectangle bounds={rectangle} />
                </FeatureGroup>
              </Overlay>
            </LayersControl>
          </Map>
        </div>
        {/* </CardBody>
        </Card> */}
      </Col>
    </Row>
  );
};

export default Footer;

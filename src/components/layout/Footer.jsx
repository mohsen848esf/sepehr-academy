import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const position = [36.567021, 53.062304];
const Footer = () => {
  return (
    <>
      <footer className="page-footer font-small blue pt-4">
        <div className="container container-fluid text-center text-md-left">
          <div className="row">
            {/* <div center={position} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </div> */}
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          {"© 2020 Copyright:" + " "}
          <a href="#">SepehrAcademy</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;

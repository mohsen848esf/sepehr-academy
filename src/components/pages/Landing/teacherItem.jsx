import React from "react";
import "./TeacherItem.css";

const teacherItem = () => {
  return (
    <div className="container my-4 mb-4 TeachersContainer ">
      <div className="TeachersContainer-title">
        <h2>اساتید برتر </h2>
        <span> بهترین اساتید مازندران </span>
      </div>
      <hr />
      <div className="container my-5 mb-4 TeachersCard d-flex justify-content-center">
        <div className="smallTeacherItem LeftItem">
          <div className="smallTeacherItemBody TopToBottom">
            <div className="smallTeacherItemImage-Box d-flex align-items-center justify-content-center mb-2">
              <img
                src={
                  require("../../../assets/img/portrait/small/2.jpg").default
                }
                alt="porfileImg"
                className="img-fluid img-border rounded-circle box-shadow-1 "
                height="70"
                width="70"
              />
            </div>
            <div className="smallTeacherItem-description ">
              <h5 className="smallTeacherItem-name text-center mb-2">
                مهندس ...
              </h5>
              <span className="smallTeacherItem-Expertise ">مدرس آموزشگاه</span>
            </div>
          </div>
        </div>
        <div className="smallTeacherItem LeftItem">
          <div className="smallTeacherItemBody BottomToTop">
            <div className="smallTeacherItemImage-Box d-flex align-items-center justify-content-center mb-2">
              <img
                src={
                  require("../../../assets/img/portrait/small/3.jpg").default
                }
                alt="porfileImg"
                className="img-fluid img-border rounded-circle box-shadow-1 "
                height="70"
                width="70"
              />
            </div>
            <div className="smallTeacherItem-description ">
              <h5 className="smallTeacherItem-name text-center mb-2">
                مهندس ...
              </h5>
              <span className="smallTeacherItem-Expertise ">مدرس آموزشگاه</span>
            </div>
          </div>
        </div>
        <div className="smallTeacherItem LeftItem">
          <div className="smallTeacherItemBody CenterToBottom">
            <div className="smallTeacherItemImage-Box d-flex align-items-center justify-content-center mb-2">
              <img
                src={
                  require("../../../assets/img/portrait/small/4.jpg").default
                }
                alt="porfileImg"
                className="img-fluid img-border rounded-circle box-shadow-1 "
                height="70"
                width="70"
              />
            </div>
            <div className="smallTeacherItem-description ">
              <h5 className="smallTeacherItem-name text-center mb-2">
                مهندس ...
              </h5>
              <span className="smallTeacherItem-Expertise ">مدرس آموزشگاه</span>
            </div>
          </div>
        </div>
        <div className="bigTeacherItem ">
          <div className="bigTeacherItemBody">
            <div className="bigTeacherItemImage-Box d-flex align-items-center justify-content-center mb-2">
              <img
                src={
                  require("../../../assets/img/portrait/small/1.jpg").default
                }
                alt="porfileImg"
                className="img-fluid img-border rounded-circle box-shadow-1 "
              />
            </div>
            <div className="bigTeacherItem-description ">
              <h4 className="bigTeacherItem-name text-center mb-2">دکتر ...</h4>
              <span className="bigTeacherItem-Expertise ">
                مدیر و مدرس آموزشگاه
              </span>
            </div>
          </div>
        </div>

        <div className="smallTeacherItem RightItem">
          <div className="smallTeacherItemBody CenterToTop">
            <div className="smallTeacherItemImage-Box d-flex align-items-center justify-content-center mb-2">
              <img
                src={
                  require("../../../assets/img/portrait/small/5.jpg").default
                }
                alt="porfileImg"
                className="img-fluid img-border rounded-circle box-shadow-1 "
                height="70"
                width="70"
              />
            </div>
            <div className="smallTeacherItem-description ">
              <h5 className="smallTeacherItem-name text-center mb-2">
                مهندس ...
              </h5>
              <span className="smallTeacherItem-Expertise ">مدرس آموزشگاه</span>
            </div>
          </div>
        </div>
        <div className="smallTeacherItem RightItem">
          <div className="smallTeacherItemBody TopToBottom">
            <div className="smallTeacherItemImage-Box d-flex align-items-center justify-content-center mb-2">
              <img
                src={
                  require("../../../assets/img/portrait/small/6.jpg").default
                }
                alt="porfileImg"
                className="img-fluid img-border rounded-circle box-shadow-1 "
                height="70"
                width="70"
              />
            </div>
            <div className="smallTeacherItem-description ">
              <h5 className="smallTeacherItem-name text-center mb-2">
                مهندس ...
              </h5>
              <span className="smallTeacherItem-Expertise ">مدرس آموزشگاه</span>
            </div>
          </div>
        </div>
        <div className="smallTeacherItem RightItem">
          <div className="smallTeacherItemBody BottomToTop">
            <div className="smallTeacherItemImage-Box d-flex align-items-center justify-content-center mb-2">
              <img
                src={
                  require("../../../assets/img/portrait/small/7.jpg").default
                }
                alt="porfileImg"
                className="img-fluid img-border rounded-circle box-shadow-1 "
                height="70"
                width="70"
              />
            </div>
            <div className="smallTeacherItem-description ">
              <h5 className="smallTeacherItem-name text-center mb-2">
                مهندس ...
              </h5>
              <span className="smallTeacherItem-Expertise ">مدرس آموزشگاه</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default teacherItem;

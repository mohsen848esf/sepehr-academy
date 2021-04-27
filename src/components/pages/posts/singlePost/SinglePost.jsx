import React, { useEffect, useState, Fragment } from "react";
import { getAllNews, getNewsById } from "../../../../services/News.api";

import RightInformation from "./rightInfo";
import CenterInformation from "./centerInfo";
import { getUserID } from "../../../../services/storage/storage";
import Modals from "../../../layout/modal";
import "../../../../assets/css/manual/pages/course-info.css";

const SnigleBlog = ({ match }) => {
  const [Blog, setBlog] = useState(null);
  const [Blogs, setBlogs] = useState([]);
  const [ModalAddTerm, setModalAddTerm] = useState(false);
  const [Bought, setBought] = useState(false);

  const BlogData = async () => {
    const res = await getNewsById(match.params.BlogId);
    setBlog(res);
  };
  useEffect(() => {
    BlogData();
  }, []);
  const getBlogs = async () => {
    const allBlogs = await getAllNews();
    setBlogs(allBlogs);
  };
  useEffect(() => {
    getBlogs();
  }, []);
  //   console.log(match);
  //   console.log(Blog);
  return (
    <Fragment>
      <section class="container Course-body my-5">
        <div class="Course-style   justify-content-center row">
          {/* <h5>{Course["Course"].CourseName}</h5> */}
          {Blog && (
            <>
              {" "}
              <div class="col-md-8  col-sm-12 col-12 right-style">
                <CenterInformation BlogInfo={Blog} />
              </div>
            </>
          )}
          {Blogs && (
            <div class="col-lg-4 col-md-4 col-sm-12 col-12 Blog-left-style">
              <div className="row">
                <RightInformation Blogs={Blogs} />
              </div>
            </div>
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default SnigleBlog;

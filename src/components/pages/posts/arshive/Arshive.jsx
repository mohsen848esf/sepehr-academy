import React, { useEffect, useState } from "react";
import Pagination from "../../../layout/pagination";
import SearchBox from "../../../layout/searchBox";
import { paginate } from "../../../layout/utils/paginate";
import { Link } from "react-router-dom";
import _ from "lodash";
import { getAllNews, getNewsById } from "../../../../services/News.api";
import "./Blogs.css";
import Select from "react-select";
import {
  Button,
  Row,
  Col,
  FormGroup,
  Input,
  Card,
  CardBody,
  Badge,
  CardHeader,
  CardTitle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import {
  Grid,
  List,
  Search,
  Star,
  Heart,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "react-feather";
import classnames from "classnames";
import BlogItemGrid from "./ItemsDemo";
import "../../../../assets/scss/pages/app-ecommerce-shop.scss";
import "../../../../assets/scss/plugins/forms/react-select/_react-select.scss";

const Arshive = () => {
  const [Blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [activeTab, setActiveTab] = useState("1");
  const [active, setActive] = useState("1");
  const [Category, setCategory] = useState("");
  //   const [totalCount, setTotalCount] = useState(6);
  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  const toggle = (tab, cat) => {
    if (active !== tab) {
      setActive(tab);
      setCategory(cat);
      setCurrentPage(1);
      setSearchQuery("");
    }
  };
  const getBlogs = async () => {
    const allBlogs = await getAllNews();
    setBlogs(allBlogs);
  };
  useEffect(() => {
    getBlogs();
  }, []);
  //   useEffect(() => {
  //     getBlogs();
  //   }, []);

  const handleSearch = (query) => {
    setCategory("");
    setSearchQuery(query);
    setCurrentPage(1);
  };
  const handlePagechange = (page) => {
    setCurrentPage(page);
  };

  const getPagedData = () => {
    let filtered = Blogs;
    if (searchQuery) {
      filtered = Blogs.filter((c) =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (Category) {
      filtered =
        Category === "All"
          ? Blogs
          : Blogs.filter((c) => c.category === Category);
      if (Category === "others") {
        filtered = Blogs.filter(
          (c) =>
            c.category !== "خبر" &&
            c.category !== "مقاله" &&
            c.category !== "برترین خبر"
        );
      }
    }
    // const sorted = _.orderBy(filtered);

    const AllBlogs = paginate(filtered, currentPage, pageSize);
    return { totalCount: filtered.length, data: AllBlogs };
  };
  const { totalCount, data: AllBlogs } = getPagedData();

  return (
    <div className="container Blogs-bibContainer">
      <Card>
        <CardHeader className="justify-content-center">
          <h3 className="text-center">بلاگ</h3>
        </CardHeader>
        <CardHeader className="">
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: activeTab === "1",
                    })}
                    onClick={() => {
                      toggleTab("1");
                    }}
                  >
                    <Grid size={15} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: activeTab === "2",
                    })}
                    onClick={() => {
                      toggleTab("2");
                    }}
                  >
                    <List size={15} />
                  </NavLink>
                </NavItem>
              </Nav>

              <div className=" position-relative has-icon-left">
                <input
                  type="text"
                  name="query"
                  className="form-control border-bottom my-3"
                  style={{
                    border: "none",
                    borderBottom: "1px solid #dee2e6 !important",
                  }}
                  placeholder="جستجو کنید ..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.currentTarget.value)}
                />

                <div
                  className="form-control-position searchBox "
                  style={{ top: "18%" }}
                >
                  <Search size={15} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <Nav tabs className="justify-content-center ">
              <NavItem className="mx-2">
                <NavLink
                  className={classnames({
                    active: active === "1",
                  })}
                  onClick={() => {
                    toggle("1", "All");
                  }}
                >
                  بلاگ ها
                </NavLink>
              </NavItem>
              <NavItem className="mx-2">
                <NavLink
                  className={classnames({
                    active: active === "2",
                  })}
                  onClick={() => {
                    toggle("2", "خبر");
                  }}
                >
                  اخبار
                </NavLink>
              </NavItem>
              <NavItem className="mx-2">
                <NavLink
                  className={classnames({
                    active: active === "3",
                  })}
                  onClick={() => {
                    toggle("3", "مقاله");
                  }}
                >
                  مقالات
                </NavLink>
              </NavItem>
              <NavItem className="mx-2">
                <NavLink
                  className={classnames({
                    active: active === "4",
                  })}
                  onClick={() => {
                    toggle("4", "برترین خبر");
                  }}
                >
                  برترین اخبار
                </NavLink>
              </NavItem>
              <NavItem className="mx-2">
                <NavLink
                  className={classnames({
                    active: active === "5",
                  })}
                  onClick={() => {
                    toggle("5", "others");
                  }}
                >
                  دیگر
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </CardHeader>
        <CardBody className="">
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <div className="row my-5 courses">
                {AllBlogs.length === 0 ? (
                  <p className="d-flex justify-content-center">خبری یافت نشد</p>
                ) : (
                  AllBlogs.map((Blog) => <BlogItemGrid Blog={Blog} />)
                )}
              </div>
            </TabPane>
          </TabContent>
          <div className=" my-5 d-flex justify-content-center">
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePagechange}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Arshive;

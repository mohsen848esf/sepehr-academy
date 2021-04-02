import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Nav,
  NavLink,
  NavItem,
  Navbar,
  UncontrolledDropdown,
  Badge,
  Media,
  TabContent,
  TabPane,
  UncontrolledTooltip,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
} from "reactstrap";
import {
  Edit,
  Trash,
  Plus,
  Trash2,
  Bars,
  Eye,
  Code,
  Menu,
  CheckSquare,
  MessageSquare,
  Mail,
  Calendar,
  Star,
  Search,
  Bell,
  PlusSquare,
  DownloadCloud,
  AlertTriangle,
  CheckCircle,
  File,
  Power,
  User,
  Heart,
  Home,
  List,
  AlignJustify,
  X,
  Layers,
  Info,
  Check,
} from "react-feather";
import classnames from "classnames";
import { Fragment } from "react";
import "./SideNavHeader.css";
const TodoSidebar = ({
  active,
  handleToggle,
  activeTab,
  setActiveTab,
  handleChange,
}) => {
  return (
    <Fragment>
      <Card className="SideNavHeader">
        {" "}
        <span
          className="d-flex justify-content-end mr-2 mt-2 cursor-pointer"
          onClick={() => handleChange()}
        >
          <X size={15} />{" "}
        </span>
        <Card
          className={`border-0 ${true == true && "nav-vertical"}`}
          style={{ margin: "0 ", boxShadow: "none" }}
        >
          <Nav className=" nav-left mr-0 mr-sm-3 userPanel-rightSide" tabs>
            <NavItem className="mb-5">
              {" "}
              <div className="profile-img-container d-flex align-items-center justify-content-center ">
                <img
                  src={
                    require("../../../assets/img/logo/myLogoSmall.png").default
                  }
                  alt="porfileImg"
                  className="img-fluid img-border rounded-circle box-shadow-1 "
                />
              </div>
            </NavItem>
            <NavItem className="userPanel-rightSide-opstion">
              <NavLink
                className={classnames({
                  active: active === "/",
                })}
                onClick={() => {
                  handleToggle("/", "/");
                }}
                id="Home"
              >
                <Home size={16} />
                <span className="d-md-inline-block align-middle ml-3 ">
                  خانه
                </span>
              </NavLink>
              {}
            </NavItem>
            <NavItem className="userPanel-rightSide-opstion">
              <NavLink
                className={classnames({
                  active: active === "/courses",
                })}
                onClick={() => {
                  handleToggle("/courses", "/courses");
                }}
                id="Education"
              >
                <Edit size={16} />
                <span className="d-md-inline-block  align-middle ml-3 ">
                  آموزش
                </span>
              </NavLink>
            </NavItem>
            <NavItem className="userPanel-rightSide-opstion">
              <NavLink
                className={classnames({
                  active: active === "/blogs",
                })}
                onClick={() => {
                  handleToggle("/blogs", "/Blogs");
                }}
                id="myCourses"
              >
                <List size={16} />
                <span className="d-md-inline-block align-middle ml-3">
                  بلاگ ها
                </span>
              </NavLink>
            </NavItem>
            <NavItem className="userPanel-rightSide-opstion">
              <NavLink
                className={classnames({
                  active: active === "m",
                })}
                onClick={() => {
                  handleToggle("m", "/");
                }}
              >
                <AlignJustify size={16} />
                <span className="d-md-inline-block align-middle ml-3">
                  مالی
                </span>
              </NavLink>
            </NavItem>
            <NavItem className="userPanel-rightSide-opstion">
              <NavLink
                className={classnames({
                  active: active === "t",
                })}
                onClick={() => {
                  handleToggle("t", "/");
                }}
              >
                <List size={16} />
                <span className="d-md-inline-block align-middle ml-3">
                  تماس با
                </span>
              </NavLink>
            </NavItem>
          </Nav>
        </Card>
      </Card>
    </Fragment>
    // <React.Fragment>
    //   <span className="sidebar-close-icon" onClick={() => handleChange()}>
    //     <X size={15} />
    //   </span>
    //   <div className="todo-app-menu">
    //     <div className="add-task">
    //       <Button.Ripple
    //         block
    //         className="btn-block my-1"
    //         color="primary"
    //         // onClick={() => {
    //         //   this.props.addTask("open");
    //         //   this.props.mainSidebar(false);
    //         // }}
    //       >
    //         Add Task
    //       </Button.Ripple>
    //     </div>
    //     <PerfectScrollbar
    //       className="sidebar-menu-list"
    //       options={{
    //         wheelPropagation: false,
    //       }}
    //     >
    //       <ListGroup className="font-medium-1">
    //         {/* <ListGroupItem
    //             className="border-0 pt-0"
    //             action
    //             // onClick={() => {
    //             //   this.props.changeFilter("all");
    //             // }}
    //             active={
    //               this.props.routerProps.location.pathname === "/todo/all"
    //                 ? true
    //                 : false
    //             }
    //           >
    //             <Layers size={22} />
    //             <span className="align-middle ml-1">All</span>
    //           </ListGroupItem> */}
    //       </ListGroup>
    //       <hr />
    //       <h5 className="mt-2 mb-1 pt-25">Filters</h5>
    //       {/* <ListGroup className="font-medium-1">
    //           <ListGroupItem
    //             className="border-0"
    //             onClick={() => {
    //               this.props.changeFilter("starred");
    //             }}
    //             active={
    //               this.props.routerProps.location.pathname === "/todo/starred"
    //                 ? true
    //                 : false
    //             }
    //           >
    //             <Star size={22} />
    //             <span className="align-middle ml-1">Starred</span>
    //           </ListGroupItem>
    //           <ListGroupItem
    //             className="border-0"
    //             onClick={() => {
    //               this.props.changeFilter("important");
    //             }}
    //             active={
    //               this.props.routerProps.location.pathname === "/todo/important"
    //                 ? true
    //                 : false
    //             }
    //           >
    //             <Info size={22} />
    //             <span className="align-middle ml-1">Important</span>
    //           </ListGroupItem>
    //           <ListGroupItem
    //             className="border-0"
    //             onClick={() => {
    //               this.props.changeFilter("completed");
    //             }}
    //             active={
    //               this.props.routerProps.location.pathname === "/todo/completed"
    //                 ? true
    //                 : false
    //             }
    //           >
    //             <Check size={22} />
    //             <span className="align-middle ml-1">Completed</span>
    //           </ListGroupItem>
    //           <ListGroupItem
    //             className="border-0"
    //             onClick={() => {
    //               this.props.changeFilter("trashed");
    //             }}
    //             active={
    //               this.props.routerProps.location.pathname === "/todo/trashed"
    //                 ? true
    //                 : false
    //             }
    //           >
    //             <Trash size={22} />
    //             <span className="align-middle ml-1">Trashed</span>
    //           </ListGroupItem>
    //         </ListGroup>
    //          */}
    //       <hr />
    //       <h5 className="mt-2 mb-1 pt-25">Labels</h5>
    //       {/* <ListGroup className="font-medium-1">
    //           <ListGroupItem
    //             className="border-0"
    //             onClick={() => {
    //               this.props.changeFilter("frontend");
    //             }}
    //             active={
    //               this.props.routerProps.location.pathname === "/todo/frontend"
    //                 ? true
    //                 : false
    //             }
    //           >
    //             <span className="bullet bullet-primary align-middle" />
    //             <span className="align-middle ml-1">Frontend</span>
    //           </ListGroupItem>
    //           <ListGroupItem
    //             className="border-0"
    //             onClick={() => {
    //               this.props.changeFilter("backend");
    //             }}
    //             active={
    //               this.props.routerProps.location.pathname === "/todo/backend"
    //                 ? true
    //                 : false
    //             }
    //           >
    //             <span className="bullet bullet-warning align-middle" />
    //             <span className="align-middle ml-1">Backend</span>
    //           </ListGroupItem>
    //           <ListGroupItem
    //             className="border-0"
    //             onClick={() => {
    //               this.props.changeFilter("doc");
    //             }}
    //             active={
    //               this.props.routerProps.location.pathname === "/todo/doc"
    //                 ? true
    //                 : false
    //             }
    //           >
    //             <span className="bullet bullet-success align-middle" />
    //             <span className="align-middle ml-1">Doc</span>
    //           </ListGroupItem>
    //           <ListGroupItem
    //             className="border-0"
    //             onClick={() => {
    //               this.props.changeFilter("bug");
    //             }}
    //             active={
    //               this.props.routerProps.location.pathname === "/todo/bug"
    //                 ? true
    //                 : false
    //             }
    //           >
    //             <span className="bullet bullet-danger align-middle" />
    //             <span className="align-middle ml-1">Bug</span>
    //           </ListGroupItem>
    //         </ListGroup>
    //        */}
    //     </PerfectScrollbar>
    //   </div>
    // </React.Fragment>
  );
};

export default TodoSidebar;

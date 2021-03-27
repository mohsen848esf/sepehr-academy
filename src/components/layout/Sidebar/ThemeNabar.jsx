import React from "react";
import {
  NavItem,
  NavLink,
  UncontrolledTooltip,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import * as Icon from "react-feather";
const NavbarBookmarks = (props) => {
  return (
    <ul className="navbar-nav d-xl-none">
      <NavItem className="mobile-menu mr-auto">
        <NavLink
          className="nav-menu-main menu-toggle hidden-xs is-active"
          onClick={props.sidebarVisibility} // type:function handle open&close sidebar from menu
        >
          <Icon.Menu className="ficon" />
        </NavLink>
      </NavItem>
    </ul>
  );
};

export default NavbarBookmarks;

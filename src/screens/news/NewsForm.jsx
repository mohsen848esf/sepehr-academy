import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import { User, Plus, Share } from "react-feather";
import NewsList from "./newsList";
import { useState } from "react";
import "../../assets/scss/pages/users.scss";

const NewsForm = (props) => {
  const [activeTab, setActiveTab] = useState("List");
  const newsPage = props.match.params.pageName;
  const toggle = (tab) => {
    setActiveTab(tab);
  };
  return (
    <Row>
      <Col sm="12">
        <Card>
          <CardBody className="pt-2">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: activeTab === "List",
                  })}
                  // onClick={() => {
                  //   toggle("1")
                  // }}
                >
                  <Plus size={16} />
                  <span className="align-middle ml-50">ایجاد دوره جدید</span>
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent activeTab={activeTab}>
              <TabPane tabId="List">
                <NewsList />
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
export default NewsForm;

import React, { useEffect } from "react";
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
import { User, Plus, Share, List } from "react-feather";
import NewsList from "./newsList";
import CreateNews from "./CreateNews";
import { useState } from "react";
import "../../assets/scss/pages/users.scss";

const NewsForm = (props) => {
  const [activeTab, setActiveTab] = useState("1");
  //   const newsPage = props.match.params.pageName;
  //   useEffect(() => {
  //     setActiveTab(newsPage);
  //   }, []);
  const toggle = (tab) => {
    setActiveTab(tab);
    // props.match.params.pageName = tab;
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
                    active: activeTab === "1",
                  })}
                  //   onClick={() => {
                  //     toggle("createNews");
                  //   }}
                >
                  <Plus size={16} />
                  <span className="align-middle ml-50">ایجاد خبر جدید</span>
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent activeTab={activeTab}>
              {/* <TabPane tabId="List">
                <NewsList />
              </TabPane> */}
              <TabPane tabId="1">
                <CreateNews />
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
export default NewsForm;

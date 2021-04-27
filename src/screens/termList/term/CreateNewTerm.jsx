import React from "react"
import {
  Card,
  CardBody,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap"
import classnames from "classnames"
import { User, Plus, Share } from "react-feather"
import CreateTerm from "./createTerm"
import { useState } from "react"
import "../../../assets/scss/pages/users.scss"


const NewTerm = ()=> {
  const [activeTab, setActiveTab] = useState('1')
  const toggle = tab => {
    setActiveTab({
      activeTab: tab
    })
  }
    return (
      <Row>
        <Col sm="12">
          <Card>
            <CardBody className="pt-2">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active:activeTab === "1"
                    })}
                    // onClick={() => {
                    //   toggle("1")
                    // }}
                  >
                    <Plus size={16} />
                    <span className="align-middle ml-50">ایجاد ترم جدید</span>
                  </NavLink>
                </NavItem>

              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <CreateTerm />
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
}
export default NewTerm

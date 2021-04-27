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
import EditTerm from "./editTermInformation"
import { useState } from "react"
import "../../../assets/scss/pages/users.scss"


const TermEdit = ({match})=> {
  const [activeTab, setActiveTab] = useState('1')
  // const [termData, setTerm] = useState([])
  const termId = match.params.termId;

  // const TermInfo = async () => {
  //       const data = await getTermById(termId);
  //       setTerm({ termData: data })
  // }
  // useEffect(() => {
  //     TermInfo()
      
  // }, [])
  console.log(termId)
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
                    <span className="align-middle ml-50">ویرایش ترم</span>
                  </NavLink>
                </NavItem>

              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <EditTerm termID={termId} />
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
}
export default TermEdit

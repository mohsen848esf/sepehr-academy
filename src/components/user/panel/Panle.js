import React, { Component, Fragment } from 'react';
import Rightside from '../rightSide/rightSide'
import UserCourseList from '../courses/userCourseList'
import CoursesList from '../courses/coursesList'
import EditProfile from '../editProfile/EditProfile'
import Dashboard from '../dashboard/dashboard'
import '../../../assets/css/manual/user/PanleForm.css';
class Panle extends Component {
    state = {
        selectedTab: {_id: 'Dashboard-panel' , name: 'داشبورد'},
        // items:[]
    }
    handleTabSelect = item => {
        this.setState({ selectedTab: item });
        if(item["_id"] === "closePanel") this.props.history.replace("/")
    };
    render() {
        return (
            <Fragment >
                <div className="body" dir="rtl"></div>
                <div className="shape" dir="rtl">	
                    <div id="particles-js">
                        <canvas className="particles-js-canvas-el" width="1349" height="500"></canvas>
                    </div>
                    <div className="panel-body">
                    <div style={{margin:" 0 auto"}} className="userPanel   text-right  d-flex flex-row flex-wrap justify-content-start align-items-stretch  align-items-stretch ">
                        
                            <Rightside onItemSelect={this.handleTabSelect} selectedTab={this.state.selectedTab}/>
                        <div className="left-panel col-md-9 col-12 border-right border-top p-2">
                            <div className="tab-content h-100  " id="v-pills-tabContent">
                                <Dashboard selectedTab={this.state.selectedTab}/>
                                <EditProfile selectedTab={this.state.selectedTab}  />
                                <UserCourseList selectedTab={this.state.selectedTab} />
                                <CoursesList selectedTab={this.state.selectedTab} />
                        
                        
                            </div>
                        </div>
                    </div>
                </div>
                </div> 
            </Fragment>
        )
    }
}

export default Panle;

import React, { Component, Fragment } from 'react';
import { setItem ,getCurrentUser , postCurrentUser } from '../../../services/storage/storage';
import ListGroup from './listGroup'
import '../../../assets/css/manual/user/RightSide.css'


class RightSide extends Component {

    state={
      user: {},
      items: [
        {_id: 'Dashboard-panel' , name: 'داشبورد'},
        {_id: 'edit-profile' , name: 'ویرایش پروفایل'},
        {_id: 'my-courses' , name: 'دوره های من'},
        {_id: 'courses-list' , name: 'دوره ها'},
        {_id: 'closePanel' , name: 'بستن'},
      ],
        userImage: 'https://avatars.githubusercontent.com/u/1?v=4'

    }

    componentDidMount() {
        const user = getCurrentUser();
        this.setState({user})


    }
    render() {
        const {firstName , lastName , userName } = this.state.user;
        return (
            <Fragment>
                <div className="right-panel col-md-3  col-12 d-flex flex-md-column flex-row justify-content-start align-items-center text-center">
                  <img  className="userImg col-md-6  mt-md-4 mt-3  shadow" src={this.state.userImage}/>
                  <div className="userFname mt-2 mr-md-0 mr-3 weight-600"><h5>{firstName + " " + lastName}</h5><h5>{userName}@</h5></div>
              
              <div className="button-box  nav flex-md-column flex-row nav-pills my-md-4 mt-auto mr-md-0 mr-auto" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <ListGroup
                      items={this.state.items}
                      selectedItem={this.props.selectedTab}
                      onItemSelect={this.props.onItemSelect}
                    />
                    {/* <a className="button  nav-link  my-2 edit-profile" id="v-pills-editProfile-tab" data-toggle="pill" href="#v-pills-editProfile" role="tab" aria-controls="v-pills-editProfile" aria-selected="true">                         
                      <h5  className="title" >ویرایش پروفایل</h5>
                      <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                    </a>

                    <a className="button  nav-link  my-2 my-courses" id="v-pills-myCourses-tab" data-toggle="pill" href="#v-pills-myCourses" role="tab" aria-controls="v-pills-myCourses" aria-selected="false">                     
                      <h5  className="title">دوره های من</h5>
                      <i className="fa fa-inbox" aria-hidden="true"></i>
                    </a>

                    <a className="button  nav-link active my-2 courses-list" id="v-pills-allCourses-tab" data-toggle="pill" href="#v-pills-allCourses" role="tab" aria-controls="v-pills-allCourses" aria-selected="false">              
                      <h5  className="title">دوره ها</h5>
                      <i className="fa fa-tasks" aria-hidden="true"></i>
                     </a>
                    
                    <a className="button  nav-link my-2 log-out" id="v-pills-logout-tab" data-toggle="pill" href="#v-pills-logout" role="tab" aria-controls="v-pills-logout" aria-selected="false">             
                      <h5  className="title">خروج</h5>
                      <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
                    </a>
                   */}
              </div>
                </div>
 
            </Fragment>
        )
    }
}

export default RightSide

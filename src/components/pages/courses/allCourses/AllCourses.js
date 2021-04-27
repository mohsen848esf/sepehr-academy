import React, { Component, Fragment } from 'react';
import '../../../../assets/css/manual/pages/AllCourses.css';
import Header from '../../../layout/Header';
import { Link } from 'react-router-dom'

class AllCourses extends Component {
    constructor(){
        super();
        this.state={
            id: '1',
            courseName: 'reactJs',
            teacherName: 'دکتر بحرالعلومی',
            courseImage: 'https://avatars.githubusercontent.com/u/1?v=4'

        }
    }
    render() {
        const {id , courseName , teacherName , courseImage} = this.state;

        return (
            <Fragment>
                <section className="all-courses">
                    <div className="container pt-5 mt-5">
                        <div className="row toz card shadow p-3 mb-5 bg-white">
                            <div className="card-img">
                            <img className="" src={require("../../../../assets/images/pages/landingPage/3911318.png").default} alt=""/>
                            </div>
                            <div className="card-body">
                            <p className="card-text"> آکادمی سپهر با داشتن بیش از 20 سال سابقه در زمینه آموزش برنامه نویسی
                                و انجام پروژه های بی نظیر پیشگام در صنعت برنامه نویسی بوده
                            </p>
                            </div>
                        </div>
                        <div className="row courses">
                        <div className="card shadow-sm" style={{width: "18rem"}}>
                            <div className="card-img">
                            <img className="" src={courseImage} alt=""/>
                            </div>
                            <div className="card-body">
                            <h5 className="card-title">{courseName}</h5>
                            <table className="table table-sm">
                                <tbody>
                                <tr>
                                    <th scope="col">مدرس:</th>
                                    <td>{teacherName}</td>
                                </tr>
                                </tbody>
                            </table>    
                            <Link to="/course/:id" className="btn btn-primary">بیشتر</Link>
                            </div>
                        </div>
                        {/* <div className="card shadow-sm" style={{width: "18rem"}}>
                            <div className="card-img">
                            <img className="" src="./images/pages/landingPage/angular.png" alt=""/>
                            </div>
                            <div className="card-body">
                            <h5 className="card-title">angular</h5>
                            <table className="table table-sm">
                                <tbody>
                                <tr>
                                    <th scope="col">مدرس:</th>
                                    <td>دکتر بحرالعلومی</td>
                                </tr>
                                </tbody>
                            </table>    
                            <Link to="#" className="btn btn-primary">بیشتر</Link>
                            </div>
                        </div>
                        <div className="card shadow-sm" style={{width: "18rem"}}>
                            <div className="card-img">
                            <img className="" src="./images/pages/landingPage/angular.png" alt=""/>
                            </div>
                            <div className="card-body">
                            <h5 className="card-title">angular</h5>
                            <table className="table table-sm">
                                <tbody>
                                <tr>
                                    <th scope="col">مدرس:</th>
                                    <td>دکتر بحرالعلومی</td>
                                </tr>
                                </tbody>
                            </table>    
                            <Link to="#" className="btn btn-primary">بیشتر</Link>
                            </div>
                        </div>
                        <div className="card shadow-sm" style={{width: "18rem"}}>
                            <div className="card-img">
                            <img className="" src="./images/pages/landingPage/angular.png" alt=""/>
                            </div>
                            <div className="card-body">
                            <h5 className="card-title">angular</h5>
                            <table className="table table-sm">
                                <tbody>
                                <tr>
                                    <th scope="col">مدرس:</th>
                                    <td>دکتر بحرالعلومی</td>
                                </tr>
                                </tbody>
                            </table>    
                            <Link to="#" className="btn btn-primary">بیشتر</Link>
                            </div>
                        </div>
                        <div className="card shadow-sm" style={{width: "18rem"}}>
                            <div className="card-img">
                            <img className="" src="../../../../assets/images/pages/landingPage/angular.png" alt=""/>
                            </div>
                            <div className="card-body">
                            <h5 className="card-title">angular</h5>
                            <table className="table table-sm">
                                <tbody>
                                <tr>
                                    <th scope="col">مدرس:</th>
                                    <td>دکتر بحرالعلومی</td>
                                </tr>
                                </tbody>
                            </table>    
                            <Link to="#" className="btn btn-primary">بیشتر</Link>
                            </div>
                        </div>
                        <div className="card shadow-sm" style={{width: "18rem"}}>
                            <div className="card-img">
                            <img className="" src="../../../../assets/images/pages/landingPage/angular.png" alt=""/>
                            </div>
                            <div className="card-body">
                            <h5 className="card-title">angular</h5>
                            <table className="table table-sm">
                                <tbody>
                                <tr>
                                    <th scope="col">مدرس:</th>
                                    <td>دکتر بحرالعلومی</td>
                                </tr>
                                </tbody>
                            </table>    
                            <Link to="#" className="btn btn-primary">بیشتر</Link>
                            </div>
                        </div>
                         */}
                        </div>
                    </div>

                </section>

            </Fragment>
        )
    }
}

export default AllCourses


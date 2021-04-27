import React, { Component , Fragment} from 'react';
import '../../../assets/css/manual/user/panel-all-courses.css'
import ReactIcone from '../../../assets/images/pages/landingPage/React.png';


class AllCourses extends Component {
    constructor(){
        super();
        this.state={
            courseId: '1',
            courseImage: '',
            courseName: 'reactمحسن اسفندیاری',
            courseLevel:'کارگاه',
            coursePrice:'9999990',
            startDate: '۱۸/۰۹/۱۳۹۹',
            courseStatus:'اتمام دوره'
            
        }
    }    
    render() {
        const { courseId , courseImage , courseName , courseLevel , coursePrice , startDate , courseStatus } = this.state;
        return (
            <Fragment>
                <div className="  tab-pane fade allCourses-panel " id="v-pills-allCourses" role="tabpanel" aria-labelledby="v-pills-allCourses-tab">
                    <header className="panel-header"><h2>  لیست دوره های من</h2></header>

                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-10 table-responsive">
                          <table className="table table-sm">
                            <thead>
                              <tr>
                                <th scope="col">تصویر</th>
                                <th scope="col">نام دوره ها</th>
                                <th scope="col">سطح</th>
                                <th scope="col">قیمت</th>
                                <th scope="col">تاریخ آغاز</th>
                                <th scope="col">وضعیت</th>
                                <th scope="col">خرید</th>       
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td><img src={ReactIcone} className="rounded-circle" alt="Cinque Terre"/>
                                </td>
                                <td>{courseName}</td>
                                <td>{courseLevel}</td>
                                <td>{coursePrice} +  ریال</td>
                                <td>{startDate}</td>
                                <td>{courseStatus}</td>
                                <td>
                                  <button type="button" className="btn btn-primary"><i className="fa fa-cart-plus"></i></button>
                                </td>
                              </tr>
                              <tr>
                                <td><img src={ReactIcone} className="rounded-circle" alt="Cinque Terre"/>
                                </td>
                                <td>{courseName}</td>
                                <td>{courseLevel}</td>
                                <td>{coursePrice} +  ریال</td>
                                <td>{startDate}</td>
                                <td>{courseStatus}</td>
                                <td>
                                  <button type="button" className="btn btn-primary"><i className="fa fa-cart-plus"></i></button>
                                </td>
                              </tr>
                              <tr>
                                <td><img src={ReactIcone} className="rounded-circle" alt="Cinque Terre"/>
                                </td>
                                <td>{courseName}</td>
                                <td>{courseLevel}</td>
                                <td>{coursePrice} +  ریال</td>
                                <td>{startDate}</td>
                                <td>{courseStatus}</td>
                                <td>
                                  <button type="button" className="btn btn-primary"><i className="fa fa-cart-plus"></i></button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  
                  </div>				  

            </Fragment>
        )
    }
}

export default AllCourses;
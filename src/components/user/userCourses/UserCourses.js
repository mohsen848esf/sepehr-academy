import React, { Component, Fragment } from 'react'
import ReactIcone from '../../../assets/images/pages/landingPage/React.png'
import '../../../assets/css/manual/user/panel-my-courses.css'

class UserCourses extends Component {
  constructor() {
    super()
    this.state = {
      courseId: '1',
      courseImage: '',
      courseName: 'محسن اسفندیاری',
      courseLevel: 'کارگاه',
      startDate: '۱۸/۰۹/۱۳۹۹',
      courseStatus: 'اتمام دوره',
    }
  }
  render() {
    const {
      courseId,
      courseImage,
      courseName,
      courseLevel,
      startDate,
      courseStatus,
    } = this.state
    return (
      <Fragment>
        <div
          className="  tab-pane fade myCourses-panel show active"
          id="v-pills-myCourses"
          role="tabpanel"
          aria-labelledby="v-pills-myCourses-tab"
        >
          <header className="panel-header"></header>
          <h2> لیست دوره های من</h2>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-md-12 col-sm-12 col-10 table-responsive">
                <table className="table table-sm text-responsive">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">تصویر</th>
                      <th scope="col">نام دوره ها</th>
                      <th scope="col">سطح</th>
                      <th scope="col">تاریخ آغاز</th>
                      <th scope="col">وضعیت</th>
                      <th scope="col">ویرایش</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{courseId}</td>
                      <td>
                        <img
                          src={ReactIcone}
                          className="rounded-circle"
                          alt="Cinque Terre"
                        />
                      </td>
                      <td>{courseName}</td>
                      <td>{courseLevel}</td>
                      <td>{startDate}</td>
                      <td>{courseStatus}</td>
                      <td>
                        <button type="button" className="btn btn-primary">
                          <i className="fa fa-trash"></i>
                        </button>
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

export default UserCourses

import React, { Fragment, useEffect , useState } from 'react';
import { getAllCoursesFromTerms as getCourses, getCourseById, getAllTerms } from '../../../services/student.api'
import { setItem ,getCurrentUser , postCurrentUser } from '../../../services/storage/storage';

const Dashboard = (props) => {
    const [courses, setcourses] = useState([])
    const userInformation = getCurrentUser();
    const {firstName , lastName , email , phoneNumber, birthDate , _id : userId} = userInformation
    const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        birthDate: birthDate,
    }
    const lables = [
        {name: 'firstName' , lable: 'نام'},
        {name: 'lastName' , lable: 'نام خانوادگی'},
        {name: 'email' , lable: 'ایمیل'},
        {name: 'birthDate' , lable: 'تاریخ تولد'},
        {name: 'phoneNumber' , lable: 'شماره همراه'},
    ]
    const getcourse = async () => {
        const allCourses =await getCourses();
        const userCourses = allCourses.filter(co => co.students.find(st => st._id === "5e72a9b3a92daf0013caabdb"));
        setcourses(userCourses);
    }
    const { selectedTab } = props;
    useEffect(() => {
        getcourse()
    }, []);
    const {length: count} = courses
    return (
        <Fragment>
            <div className={selectedTab["_id"] === "Dashboard-panel" ? "tab-pane fade Dashboard-panel show active" : "tab-pane fade Dashboard-panel"} id="v-pills-Dashboard" role="tabpanel" aria-labelledby="v-pills-Dashboard-tab">
                    <h4>مشخصات فردی</h4>
                <div>
                    {lables.map(lable =>
                        <div>
                            <h5>{lable.lable}</h5>
                            <span>{userData[lable.name]}</span>
                        </div>
                        )}
                </div>
                <h4>دوره های شرکت شده {count}</h4>
                <h5>مشخصات دوره ها</h5>
                <div>{courses.map(course => 
                    <div>
                        <p>{course.course.courseName}</p>
                        <span>استاد:{course.teacher.fullName}</span>
                        <span>{" " + "ترم:" + " " + course.title}</span>
                    </div>
                    )}</div>
            </div>              

        </Fragment>
    )
}

export default Dashboard

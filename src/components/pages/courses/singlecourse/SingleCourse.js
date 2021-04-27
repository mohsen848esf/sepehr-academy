import React, { Component } from 'react'
import '../../../../assets/css/manual/pages/course-info.css'

class SingleCourse extends Component {
    state={
        courses:[{
            id: '1',
            courseName: 'reactJs',
            teacherName: 'دکتر بحرالعلومی',
            courseImage: 'https://avatars.githubusercontent.com/u/1?v=4'

        },
        {
            id: '2',
            courseName: 'Angolar',
            teacherName: 'دکتر بحرالعلومی',
            courseImage: 'https://avatars.githubusercontent.com/u/2?v=4'

        },
        {
            id: '3',
            courseName: 'reactJs',
            teacherName: 'دکتر بحرالعلومی',
            courseImage: 'https://avatars.githubusercontent.com/u/3?v=4'

        }]

    }
    render() {
        return (
            <section class="container-fluid course-body">
                <div class="course-style row justify-content-center d-flex">
                    <div class="col-md-8 col-sm-12 col-xs-12 right-style">
                        <div class="col-md-11 col-sm-10 col-xs-12 course-view">
                            <img class="courseImage" src={require("../../../../assets/images/pages/courses/22.png").default} alt=""/>
                        </div>
                        <div class="col-md-11 col-sm-11 col-xs-12 course-description">
                            <div class="col-md-10 col-sm-11 col-xs-11  description-title"><h4>دوره آموزشی React</h4></div>
                            <div class="col-md-10 col-sm-11 col-xs-11  description-text">
                                <p>    ری اکت این امکان را در اختیار توسعه دهندگان می گذارد که وب اپلیکیشن های خیلی بزرگ که می تواند دیتا را تغییر بدهد بدون ری لود صفحه ایجاد کنند.مهم ترین هدف ری اکت را میتوان سادگی،سرعت و مقیاس پذیر بودن دانست.</p>
                            </div>
                        </div>
        
                    </div>
                    <div class="col-md-4 col-sm-12 col-xs-12 left-style">
                        <div class="row">
                            <div class="col-md-9 col-sm-10 col-xs-5 items course-price">
                                <p class="col-md-10 col-sm-10 col-xs-12 price-items">قیمت دوره   خصوصی</p>
                                <div class="col-md-9 col-sm-9 col-xs-10 price-items"><button>دوره محدود</button></div>
                                <p class="col-md-10 col-sm-10 col-xs-12 price-items">امتیاز دوره : 0 از 0</p>
                            </div>

                            <div class="col-md-9 col-sm-10 col-xs-5 items course-access">
                                <div class="row ">
                                    <div class="col-md-12 col-sm-12 col-12 access-items title"><p>دسترسی نامحدود</p></div>
                                    <div class="col-md-4 col-sm-4 col-4 access-items access_icon">
                                    <i class="fa fa-whatsapp" aria-hidden="true"></i>
                                    </div>
                                    <div class="col-md-4 col-sm-4 col-4 access-items access_icon">
                                    <i class="fa fa-instagram" aria-hidden="true"></i>         
                                    </div>
                                    <div class="col-md-4 col-sm-4 col-4 access-items access_icon">
                                    <i class="fa fa-telegram" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-9 col-sm-10 col-xs-4 items course-instructor"><p>مدرس : دکتر بحرالعلوم<i class="fa fa-user" aria-hidden="true"></i></p></div>
                            <div class="col-md-9 col-sm-10 col-xs-3 items course-comments"><p>یک دیدگاه<i class="fa fa-comments-o" aria-hidden="true"></i></p></div>
                            <div class="col-md-9 col-sm-10 col-xs-3 items course-student"><p>دانشجو2<i class="fa fa-graduation-cap" aria-hidden="true"></i></p></div>
                        </div>
                    </div>

                </div>

            </section>
        )
    }
}

export default SingleCourse

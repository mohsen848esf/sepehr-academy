import { setItem, getItem, clearStorage, removeItem } from "./storage/storage";
import http from "./http-service.api";
import { toast } from "react-toastify";

const API_URL = process.env.REACT_APP_PUBLIC_PATH;

// export const getAllTerms =  () => {
//     const res =  http.get(API_URL + "term/getall")
//     console.log(res.data.result)
//     return res.data.result
// };
export const getAllTerms = async () => {
  try {
    const res = await http.get(API_URL + "term/getall");
    return res.data.result;
  } catch (error) {
    return [];
  }
};
export const getAllTeacher = async () => {
  try {
    const res = await http.get(API_URL + "term/getall");

    const teachers = res.data.result.map((re) => re.teacher);
    return teachers;
  } catch (error) {
    return [];
  }
};
export const getTermById = async (termId) => {
  try {
    const res = await http.get(API_URL + `term/${termId}`);
    // const res = await http.get(API_URL + `term/${termId}`)
    return res.data.result;
  } catch (error) {
    return [];
  }
};
export const getTermByTeacher = async (teacherName) => {
  try {
    const res = await http.get(API_URL + "term/getall");
    // const teachers = res.data.result.map(re => (
    //   re.teacher.fullName === teacherName ? re
    // ))
    const teacherTerms = res.data.result.find(
      (re) => re.teacher.fullName === teacherName
    );
    return teacherTerms;
  } catch (error) {
    return [];
  }
};
export const createTerm = async (termData) => {
  try {
    const res = await http.post(API_URL + "term/", termData);
    return res;
  } catch (error) {
    return [];
  }
};

// export const createTerm = async () => {
//   try {
//     const res = await http.post(API_URL + "term/", {
//       title: "ReactJs",
//       cost: 1000,
//       endDate: '1399/12/29',
//       startDate: '1398/12/29',
//       capacity: 8,
//       teacher: '5d8345f60caf360013010b73',
//       course: '5d83475b0caf360013010b76'
//     })
//     return res
//   } catch (error) {
//     return []
//   }
// };
export const updateTerm = async (termId, termData) => {
  try {
    const res = await http.put(API_URL + `term/${termId}`, termData);
    return res;
  } catch (error) {
    return [];
  }
};
// export const updateTerm = async (data) => {
//   try {
//     const res = await http.put(API_URL + "term/", {
//       title: "ReactJs",
//       cost: 1000,
//       endDate: '1399/12/29',
//       startDate: '1398/12/29',
//       capacity: 8,
//       teacher: '5d8345f60caf360013010b73',
//       course: '5d83475b0caf360013010b76'
//     })
//     return res
//   } catch (error) {
//     return []
//   }
// };
export const deleteTerm = async (termId) => {
  try {
    const res = await http.delete(API_URL + `term/${termId}`);
    return res;
  } catch (error) {}
};

export const getAllCourses = async () => {
  try {
    const res = await http.get(API_URL + "course");
    return res.data.result;
  } catch (error) {
    return [];
  }
};
export const getAllCoursesFromTerms = async () => {
  try {
    const res = await http.get(API_URL + "term/getall");
    // const AllCourses = res.data.result.map(re => (
    //   re.course
    // ))
    // console.log("=============================================")
    // res.data.result.map(re => console.log(re.course))
    // m.map(ma => (console.log(ma)))
    return res.data.result;
  } catch (error) {
    return [];
  }
};
export const getCourseById = async (courseId) => {
  try {
    const res = await getAllCoursesFromTerms();
    const course = res.find((res) => res.course._id === courseId);
    return course;
  } catch (error) {
    return [];
  }
};

// export const addCourse = async (courseData) => {
//   try {
//     const res = await http.post(API_URL + "course/add" , courseData)
//     console.log(res.data.result)
//     return res.data.result
//   } catch (error) {

//   }
// };
export const addCourse = async (props) => {
  try {
    const res = await http.post(API_URL + "course/add", {
      courseName: "Vue Js Rookie",
      topics: ["front", "javascript", "typescript"],
      description: "very difficult but easy",
      image: "thisfolder.jpg",
    });
    toast.error(res.data.message[0].message);
    // console.log(res.data.result)
    props.history.replace("");
    return res.data.result;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      toast.error(error.data.message[0].message);
    }
    return [];
  }
};
// export const updateStudentInfo = ()=> {

// }

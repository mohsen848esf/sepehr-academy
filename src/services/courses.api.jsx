import { setItem, getItem, clearStorage, removeItem } from "./storage/storage";
import http from "./http-service.api";
import { toast } from "react-toastify";

const API_URL = process.env.REACT_APP_PUBLIC_PATH;

export const getAllCourses = async () => {
  try {
    const res = await http.get(API_URL + "course");
    return res.data.result;
  } catch (error) {
    return [];
  }
};

export const getCourseById = async (courseId) => {
  try {
    const res = await http.get(API_URL + `course/${courseId}`);
    return res.data.result;
  } catch (error) {
    return [];
  }
};

export const addCourse = async (courseData) => {
  try {
    const res = await http.post(API_URL + "course/add", courseData);
    //   {
    //   courseName: "Vue Js Rookie",
    //   topics: ["front", "javascript", "typescript"],
    //   description: "very difficult but easy",
    //   image: "thisfolder.jpg",
    // });
    toast.error(res.data.message[0].message);
    // console.log(res.data.result)
    window.location("/admin/CoursesList");
    return res.data.result;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      toast.error(error.data.message[0].message);
    }
    return [];
  }
};

export const UpdateCourse = async (courseId, courseData) => {
  try {
    const res = await http.put(API_URL + `course/${courseId}`, courseData);
    //   {
    //   courseName: "Vue Js Rookie",
    //   topics: ["front", "javascript", "typescript"],
    //   description: "very difficult but easy",
    //   image: "thisfolder.jpg",
    // });
    // toast.success(res.data.message[0].message);
    // console.log(res.data.result)
    window.location = "/admin/CoursesList";
    return res.data.result;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      toast.error(error.data.message[0].message);
    }
    return [];
  }
};

export const DeleteCourseById = async (courseId) => {
  try {
    const res = await http.delete(API_URL + `course/${courseId}`);
    // toast.error(res.data.message[0].message);

    return res.data.result;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      toast.error(error.data.message[0].message);
    }
    return [];
  }
};

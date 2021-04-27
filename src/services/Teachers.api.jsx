import { setItem, getItem, clearStorage, removeItem } from "./storage/storage";
import http from "./http-service.api";
import { toast } from "react-toastify";

const API_URL = process.env.REACT_APP_PUBLIC_PATH;

export const getAllTeachers = async () => {
  try {
    const res = await http.get(API_URL + "employee/getallteachers");
    return res.data.result;
  } catch (error) {
    return [];
  }
};

export const getTeacherById = async (teacherId) => {
  try {
    const res = await http.get(API_URL + `employee/${teacherId}`);
    return res.data.result;
  } catch (error) {
    return [];
  }
};

export const UpdateTeacherInformation = async (teacherId, teacherData) => {
  try {
    const res = await http.put(API_URL + `employee/${teacherId}`, teacherData);
    // window.location = "/admin//News/List";
    return res.data.result;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      toast.error(error.data.message[0].message);
    }
    return [];
  }
};

export const DeleteTeacherById = async (teacherId) => {
  try {
    const res = await http.delete(API_URL + `employee/${teacherId}`);
    return res.data.result;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      toast.error(error.data.message[0].message);
    }
    return [];
  }
};

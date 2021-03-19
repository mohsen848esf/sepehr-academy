import axios from "axios";
import {
  setItem,
  getItem,
  clearStorage,
  removeItem,
} from "../../services/storage/storage";
import http from "../../services/http-service.api";
import { toast } from "react-toastify";
const API_URL = process.env.REACT_APP_PUBLIC_PATH;

export const LogInEmployee = (user) => {
  return http.post(API_URL + "auth/employee/login", user);
};
export const RegisterEmployee = (user) => {
  return http.post(API_URL + "auth/employee/register", user);
};
export const getAllStudents = async () => {
  try {
    const res = await http.get(API_URL + "student/getall");
    return res.data.result;
  } catch (error) {
    return [];
  }
};
export const getStudentById = async (studentId) => {
  try {
    const res = await http.get(API_URL + `student/${studentId}`);
    return res.data.result;
  } catch (error) {
    return [];
  }
};

export const addStudentToTerm = async (studentId, termId) => {
  try {
    const res = await http.post(
      API_URL + `term/addStudentToTerm/${studentId}`,
      { termId: termId }
    );
    toast.success(res.data.message[0].message);

    return res;
  } catch (error) {
    toast.warning(error.response.data.message[0].message);
    return [];
  }
};
export const removeStudentFromTerm = async (studentId, termId) => {
  try {
    const res = await http.post(
      API_URL + `term/removeStudentFromTerm/${studentId}`,
      { termId: termId }
    );
    toast.success("کاربر با موفقیت حذف شد");
    return res;
  } catch (error) {
    toast.error(error.response.data.message[0].message);

    return [];
  }
};
// export default {LogInEmploy , }

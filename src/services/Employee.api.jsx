import { setItem, getItem, clearStorage, removeItem } from "./storage/storage";
import http from "./http-service.api";
import { toast } from "react-toastify";

const API_URL = process.env.REACT_APP_PUBLIC_PATH;

export const getAllEmployees = async () => {
  try {
    const res = await http.get(API_URL + "employee/getall");
    return res.data.result;
  } catch (error) {
    return [];
  }
};

export const getEmployeeById = async (employeeId) => {
  try {
    const res = await http.get(API_URL + `employee/${employeeId}`);
    return res.data.result;
  } catch (error) {
    return [];
  }
};

export const UpdateEmployeeInformation = async (employeeId, employeeData) => {
  try {
    const res = await http.put(
      API_URL + `employee/${employeeId}`,
      employeeData
    );
    // window.location = "/admin//News/List";
    return res.data.result;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      toast.error(error.data.message[0].message);
    }
    return [];
  }
};

export const DeleteEmployeeById = async (employeeId) => {
  try {
    const res = await http.delete(API_URL + `employee/${employeeId}`);
    return res.data.result;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      toast.error(error.data.message[0].message);
    }
    return [];
  }
};

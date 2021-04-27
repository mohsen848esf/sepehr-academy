import { setItem, getItem, clearStorage, removeItem } from "./storage/storage";
import http from "./http-service.api";
import { toast } from "react-toastify";

const API_URL = process.env.REACT_APP_PUBLIC_PATH;

export const getAllNews = async () => {
  try {
    const res = await http.get(API_URL + "news");
    return res.data.result;
  } catch (error) {
    return [];
  }
};

export const getNewsById = async (newsId) => {
  try {
    const res = await http.get(API_URL + `news/${newsId}`);
    return res.data.result;
  } catch (error) {
    return [];
  }
};

export const addNews = async (newsData) => {
  try {
    const res = await http.post(API_URL + "news/", newsData);
    // window.location("/admin/News/List");
    return res.data.result;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      toast.error(error.data.message[0].message);
    }
    return [];
  }
};

export const UpdateNews = async (newsId, newsData) => {
  try {
    const res = await http.put(API_URL + `news/${newsId}`, newsData);
    // window.location = "/admin//News/List";
    return res.data.result;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      toast.error(error.data.message[0].message);
    }
    return [];
  }
};

export const DeleteNewsById = async (NewsId) => {
  try {
    const res = await http.delete(API_URL + `news/${NewsId}`);
    return res.data.result;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      toast.error(error.data.message[0].message);
    }
    return [];
  }
};

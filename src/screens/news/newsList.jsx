import React, { Component, useState, useEffect, Fragment } from "react";
import { getAllNews, DeleteNewsById } from "../../services/News.api";
import Modals from "../../components/layout/modal";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import { MDBDataTable, MDBBtn } from "../../assets/css/mdbreact";
import { Card, CardHeader, CardTitle, CardBody, Button } from "reactstrap";
import {
  Edit,
  Edit2,
  Trash,
  // ChevronDown,
  Plus,
  Trash2,
  // Check,
  // ChevronLeft,
  // ChevronRight
} from "react-feather";
const API_URL = process.env.REACT_APP_PUBLIC_PATH;

export const NewsList = () => {
  const [newsData, setNewsData] = useState([]);
  const [Modal, setModal] = useState(false);
  const [DeleteId, setDeleteId] = useState(null);
  const data = {
    columns: [
      {
        label: "تیتر خبر",
        field: "title",
        sort: "asc",
        width: 150,
      },
      {
        label: "متن خبر",
        field: "text",
        sort: "asc",
        width: 270,
      },
      {
        label: " دسته بندی ",
        field: "category",
        sort: "asc",
        width: 200,
      },
      {
        label: "",
        field: "position",
        width: 100,
      },
    ],
    rows: newsData.map((news) => ({
      title:
        news.title.length >= 15 ? news.title.substr(0, 15) + "..." : news.title,
      text:
        news.text.length >= 25 ? news.text.substr(0, 25) + "..." : news.text,
      category:
        news.category.length > 15
          ? news.category.substr(0, 15) + "..."
          : news.category,
      position: (
        <div className="data-list-action">
          <Button
            className="add-new-btn mr-1"
            color="primary"
            onClick={() => handleEditNews(news._id)}
          >
            <Edit2 size={15} className="cursor-pointer" />
          </Button>
          <Button
            className="add-new-btn"
            color="danger"
            onClick={() => handleDeleteNews(news._id)}
          >
            <Trash2 size={15} className="cursor-pointer" />
          </Button>
        </div>
      ),
    })),
  };
  const history = useHistory();
  const NewsItems = async () => {
    const allNews = await getAllNews();
    setNewsData(allNews);
  };
  const handleCreateNews = () => {
    history.push(`/admin/News/createNews`);
  };
  const handleEditNews = (NewsId) => {
    history.push(`/admin/News/editNews/${NewsId}`);
  };
  const handleDeleteNews = (NewsId) => {
    setModal(true);
    setDeleteId(NewsId);
  };
  const doDelete = async () => {
    if (!DeleteId) {
      return;
    }
    try {
      const res = await DeleteNewsById(DeleteId);
      toast.success("خبر با موفقیت پاک شد ");
      const newNews = newsData.filter((news) => news._id !== DeleteId);
      setNewsData(newNews);
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        toast.error("دوباره امتحان کنید ");
      }
    } finally {
      setDeleteId(null);
    }
  };

  useEffect(() => {
    NewsItems();
  }, []);
  return (
    <Fragment>
      <Card>
        <CardHeader>
          <CardTitle> لیست اخبار و مقالات </CardTitle>
          <div className="data-list-header d-flex justify-content-between flex-wrap">
            <div className="actions-left d-flex flex-wrap">
              <Button
                className="add-new-btn"
                color="primary"
                onClick={() => handleCreateNews()}
                outline
              >
                <Plus size={15} />
                <span className="align-middle">ایجاد خبر</span>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <MDBDataTable
            className="MDBTABLE"
            striped
            bordered
            small
            data={data}
          />
        </CardBody>
      </Card>
      <Modals
        modal={Modal}
        setmodal={setModal}
        setChange={doDelete}
        title={"حذف خبر"}
        message={"آیا مطمئنید؟"}
        pic={"trach.png"}
      />
    </Fragment>
  );
};
export default NewsList;

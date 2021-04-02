import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Progress,
  Button,
  CardHeader,
  CardTitle,
  Badge,
} from "reactstrap";
import {
  ChevronsRight,
  BookOpen,
  Clipboard,
  Clock,
  DollarSign,
  Plus,
  PlusSquare,
  ShoppingCart,
  CheckSquare,
  User,
  List,
} from "react-feather";

import { addStudentToTerm } from "../../../../core/api/admin.api";
import { getItem } from "../../../../services/storage/storage";
import CapacityOverview from "../../../layout/capacityOverview";
const RightInfo = ({ Blogs }) => {
  const [Loding, setLoding] = useState(false);

  return (
    <>
      <div className="col-12 BlogsItem-RightItemCol px-2">
        <Card className="‌BlogsItemsCard">
          <CardHeader className="mb-4">
            <p className="fonticon-wrap font-medium-2 text-bold-200">
              <List size={15} className="mr-2 fonticon-wrap" />
              بلاگ ها
            </p>{" "}
          </CardHeader>
          {Blogs &&
            Blogs.map((Blog) => (
              <CardBody className="box-shadow-0 border-bottom my-2">
                <img
                  className="img-fluid rounded-circle mr-2  box-shadow-1"
                  height="42"
                  width="45"
                  src={
                    require("../../../../assets/img/profile/pages/page-01.jpg")
                      .default
                  }
                  alt="pic"
                />
                <div className="CourseInfo-teacherInfo">
                  <p className="font-medium-1 text-bold-400">
                    {" "}
                    {Blog.title.length > 20
                      ? Blog.title.substr(0, 20) + "..."
                      : Blog.title}{" "}
                  </p>
                  <div className="d-flex justify-content-between">
                    <span className="font-medium text-bold-400 ">
                      {" "}
                      {Blog.text.length > 20
                        ? Blog.text.substr(0, 20) + "..."
                        : Blog.text}{" "}
                    </span>
                    <Badge className="py-2 px-3" color="dark">
                      {Blog.category}
                    </Badge>
                  </div>
                </div>
              </CardBody>
            ))}
        </Card>
      </div>
    </>
  );
};

export default RightInfo;

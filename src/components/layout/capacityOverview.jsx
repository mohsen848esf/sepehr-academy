import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import Chart from "react-apexcharts";
import { HelpCircle, Settings, RefreshCw, ChevronDown } from "react-feather";
// import { ChevronDown } from "react-feather";
import "../../assets/scss/pages/card-analytics.scss";
import "./OverView.css";
let $primary = "#7367F0",
  $success = "#28C76F",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $info = "#00cfe8",
  $primary_light = "#9c8cfc",
  $warning_light = "#FFC085",
  $danger_light = "#f29292",
  $info_light = "#1edec5",
  $stroke_color = "#b9c3cd",
  $label_color = "#e7eef7",
  $purple = "#df87f2",
  $white = "#fff";

const GoalOverview = ({
  OverViewTitle,
  capacityTitle,
  capacity,
  InProgressTitle,
  InProgress,
  percent,
}) => {
  const [options, setOptions] = useState({
    chart: {
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        blur: 3,
        left: 1,
        top: 1,
        opacity: 0.1,
      },
    },
    colors: ["#28C76F", "#e7eef7"],
    plotOptions: {
      radialBar: {
        size: 110,
        startAngle: -140,
        endAngle: 150,
        hollow: {
          size: "65%",
        },
        track: {
          background: "#b9c3cd",
          strokeWidth: "50%",
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: 8,
            color: "#b9c3cd",
            fontSize: "1.5rem",
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["#74b0d8"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
  });
  const [options2, setOptions2] = useState({
    chart: {},
    plotOptions: {
      radialBar: {
        size: 150,
        offsetY: 0,
        startAngle: -150,
        endAngle: 180,
        hollow: {
          size: "58%",
        },
        track: {
          background: "#edeef0",
          strokeWidth: "50%",
        },
        dataLabels: {
          value: {
            offsetY: -10,
            color: "#99a2ac",
            fontSize: "1.5rem",
          },
        },
      },
    },
    colors: ["#7dd18e"],
    fill: {
      type: "gradient",
      gradient: {
        // enabled: true,
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["#7367F0"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    // dataLabels: {
    //   enabled: false,
    // },
    stroke: {
      dashArray: 3,
    },
    labels: [""],
  });
  const [series, setSeries] = useState([percent]);
  const [ChangeDemo, setChangeDemo] = useState(true);
  const handleChange = () => {
    setChangeDemo(!ChangeDemo);
  };
  return (
    <Card className="OverViewCard">
      <CardHeader className="OverViewCardHeader">
        <CardTitle>
          <span className="font-medium-2 text-bold-600 mr-3">
            {OverViewTitle}
          </span>{" "}
        </CardTitle>
        <RefreshCw
          size={20}
          className="cursor-pointer text-muted"
          onClick={() => handleChange()}
        />
      </CardHeader>
      {ChangeDemo === true ? (
        <>
          <CardBody className="OverViewBody">
            <Chart
              options={options}
              series={series}
              type="radialBar"
              height={150}
            />
          </CardBody>
          <div className="d-flex mt-2 OverViewText">
            <div className="completed border-bottom border-right text-center w-50 py-1">
              <p className="mb-50">{capacityTitle} </p>
              <span className="font-medium-5 text-bold-600 mb-50">
                {capacity}{" "}
              </span>
            </div>
            <div className="in-progress border-top  text-center w-50 py-1">
              <p className="mb-50">{InProgressTitle}</p>
              <span className="font-medium-5 text-bold-600 mb-50">
                {InProgress}
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <CardBody className="pt-0 OverViewBody">
            <Row style={{ padding: "0 ", margin: "0" }}>
              <Col sm="12" className="d-flex justify-content-center">
                <Chart
                  options={options2}
                  series={series}
                  type="radialBar"
                  height={150}
                  className="support-tracker-card"
                />
              </Col>
            </Row>
          </CardBody>
          <div className="d-flex mt-2 OverViewText">
            <div className="completed border-top border-right text-center w-50 py-1">
              <p className="mb-50">{capacityTitle} </p>
              <span className="font-medium-5 text-bold-600 mb-50">
                {capacity}{" "}
              </span>
            </div>
            <div className="in-progress border-bottom  text-center w-50 py-1">
              <p className="mb-50">{InProgressTitle}</p>
              <span className="font-medium-5 text-bold-600 mb-50">
                {InProgress}
              </span>
            </div>
          </div>
        </>
      )}
    </Card>
  );
};
export default GoalOverview;

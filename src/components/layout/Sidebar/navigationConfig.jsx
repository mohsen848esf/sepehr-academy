import React from "react";
import * as Icon from "react-feather";
const navigationConfig = [
  {
    id: "dashboard",
    title: "پیشخوان",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/admin/dashboard",
  },
  // {
  //   id: "editprofile",
  //   title: "ویرایش پروفایل",
  //   type: "item",
  //   icon: <Icon.UserCheck size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/admin/editprofile"
  // },
  // {
  //   id: "home",
  //   title: "Home",
  //   type: "item",
  //   icon: <Icon.Home size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/"
  // },
  {
    id: "term",
    title: "ترم",
    type: "collapse",
    icon: <Icon.List size={20} />,
    // badge: "warning",
    // badgeText: "5",
    children: [
      {
        id: "termList",
        title: "لیست ترم ها",
        type: "item",
        icon: <Icon.Sunset size={12} />,
        permissions: ["admin"],
        navLink: "/admin/termList",
      },
      {
        id: "createTerm",
        title: "ایجاد ترم جدید",
        type: "item",
        icon: <Icon.Plus size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/admin/createTerm",
      },
    ],
  },
  {
    id: "Courses",
    title: "دوره ها",
    type: "collapse",
    icon: <Icon.List size={20} />,
    // badge: "warning",
    // badgeText: "5",
    children: [
      {
        id: "CoursesList",
        title: "لیست دوره ها",
        type: "item",
        icon: <Icon.Sunset size={12} />,
        permissions: ["admin"],
        navLink: "/admin/CoursesList",
      },
      {
        id: "CreateCourse",
        title: "ایجاد دوره",
        type: "item",
        icon: <Icon.PlusCircle size={12} />,
        permissions: ["admin", "aditor"],
        navLink: "/admin/CreateCourse",
      },
      // {
      //   id: 'addCourse',
      //   title: 'ایجاد دوره',
      //   type: 'item',
      //   icon: <Icon.PlusCircle size={12} />,
      //   permissions: ['admin', 'aditor'],
      //   navLink: '/admin/addCourse',
      // },
    ],
  },
  {
    id: "news",
    title: "اخبار",
    type: "collapse",
    icon: <Icon.List size={20} />,
    // badge: "warning",
    // badgeText: "2",
    children: [
      {
        id: "newsList",
        title: "لیست اخبار ",
        type: "item",
        icon: <Icon.Inbox size={12} />,
        permissions: ["admin"],
        navLink: "/admin/News/List",
      },
      {
        id: "createNews",
        title: "ایجاد خبر ",
        type: "item",
        icon: <Icon.Plus size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/admin/News/createNews",
      },
    ],
  },
  {
    id: "students",
    title: "دانشجو",
    type: "collapse",
    icon: <Icon.Users size={20} />,
    // badge: "warning",
    // badgeText: "2",
    children: [
      {
        id: "studentList",
        title: "لیست دانشجو ",
        type: "item",
        icon: <Icon.Inbox size={12} />,
        permissions: ["admin"],
        navLink: "/admin/students",
      },
      // {
      //   id: 'coursesList',
      //   title: ' لیست دوره ها  ',
      //   type: 'item',
      //   icon: <Icon.Search size={12} />,
      //   permissions: ['admin', 'editor'],
      //   navLink: '/admin/courses',
      // },
    ],
  },
  // {
  //       id: 'teachersList',
  //       title: 'لیست اساتید ',
  //       type: 'item',
  //       icon: <Icon.Inbox size={12} />,
  //       permissions: ['admin'],
  //       navLink: '/admin/Teachers/List',
  //   // badge: "warning",
  //   // badgeText: "2",

  //     },
];

export default navigationConfig;

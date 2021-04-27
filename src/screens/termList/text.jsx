// import React from 'react';
// import DataTable from "react-data-table-component"
// import classnames from "classnames"
// import ReactPaginate from "react-paginate"
// import { history } from "../../../history"
// import {
//   Edit,
//   Trash,
//   ChevronDown,
//   Plus,
//   Check,
//   ChevronLeft,
//   ChevronRight
// } from "react-feather"
// import { getAllCoursesFromTerms as getCourses, getCourseById, getAllTerms } from '../../services/student.api';

// import Sidebar from "./DataListSidebar"
// import Chip from "../../../components/@vuexy/chips/ChipComponent"
// import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy"

// import "../../../assets/scss/plugins/extensions/react-paginate.scss"
// import "../../../assets/scss/pages/data-list.scss"
// import { toast } from 'react-toastify';
// import { Component } from 'react';

// const chipColors = {
//   "on hold": "warning",
//   delivered: "success",
//   pending: "primary",
//   canceled: "danger"
// }

// const selectedStyle = {
//   rows: {
//     selectedHighlighStyle: {
//       backgroundColor: "rgba(115,103,240,.05)",
//       color: "#7367F0 !important",
//       boxShadow: "0 0 1px 0 #7367F0 !important",
//       "&:hover": {
//         transform: "translateY(0px) !important"
//       }
//     }
//   }
// }

// const ActionsComponent = props => {
//   return (
//     <div className="data-list-action">
//       <Edit
//         className="cursor-pointer mr-1"
//         size={20}
//         onClick={() => {
//           toast.success("حله") 
//         }}
//       />
//       <Trash
//         className="cursor-pointer"
//         size={20}
//         onClick={() => {
//           toast.success("حله") 
//         }}
//       />
//     </div>
//   )
// }

// const CustomHeader = props => {
//   return (
//     <div className="data-list-header d-flex justify-content-between flex-wrap">
//       <div className="actions-left d-flex flex-wrap">
//         <Button
//           className="add-new-btn"
//           color="primary"
//           onClick={() => props.handleSidebar(true, true)}
//           outline>
//           <Plus size={15} />
//           <span className="align-middle">اضافه کردن ترم</span>
//         </Button>
//       </div>
//       <div className="actions-right d-flex flex-wrap mt-sm-0 mt-2">
//         <div className="filter-section">
//           <Input type="text"  />
//         </div>
//       </div>
//     </div>
//   )
// }

// class termList extends Component {
//   state = {
//     data: [],
//     searchQuery: '',
//     currentPage: 0,
//     rowSize: 2,
//     columns: [
//       {
//         name: "نام ترم",
//         selector: "termName",
//         sortable: true,
//         minWidth: "120px",
//         cell: row => (
//           <p title={row.title} className="text-truncate text-bold-500 mb-0">
//             {row.title.length >= 8 ? row.title.substr(0,8) + "..." : row.title }
//           </p>
//         )
//       },
//       {
//         name: "نام استاد",
//         selector: "teacherName",
//         sortable: true,
//         minWidth: "120px",
//         cell: row => (
//           <p title={row.teacher.fullName} className="text-truncate text-bold-500 mb-0">
//             {row.teacher.fullName.length >= 8 ?row.teacher.fullName.substr(0,8) + "..." : row.teacher.fullName }
//           </p>
//         )
//       },
//       {
//         name: "نام دوره",
//         selector: "courseName",
//         sortable: true,
//         minWidth: "150px",
//         cell: row => (
//           // <Chip
//           //   className="m-0"
//           //   color={chipColors[row.order_status]}
//           //   text={row.order_status}
//           // />
//           <p title={row.course.courseName} className="text-truncate text-bold-500 mb-0">
//             {row.course.courseName.length >= 10 ?row.course.courseName.substr(0,10) + "..." : row.course.courseName }
//           </p>
//         )
//       },
//       {
//         name: "قیمت ترم",
//         selector: "price",
//         sortable: true,
//         cell: row => `تومان${" " +row.cost}`
//       },
//       {
//         name: "شروع ترم",
//         selector: "startDate",
//         sortable: true,
//         minWidth: "80px",
//         cell: row => (
//           // <Chip
//           //   className="m-0"
//           //   color={chipColors[row.order_status]}
//           //   text={row.order_status}
//           // />
//           <span title={row.startDate} className="text-truncate text-bold-500 mb-0">
//             {row.startDate.split("T")[0].replace("-" , "/")}
//           </span>
//         )
//       },
//       {
//         name: "پیان ترم",
//         selector: "endDate",
//         sortable: true,
//         minWidth: "80px",
//         cell: row => (
//           // <Chip
//           //   className="m-0"
//           //   color={chipColors[row.order_status]}
//           //   text={row.order_status}
//           // />
//           <span title={row.endDate} className="text-truncate text-bold-500 mb-0">
//             {row.endDate.split("T")[0].replace("-" , "/")}
//           </span>
//         )
//       },
//       {
//         name: "Actions",
//         sortable: true,
//         cell: row => (
//           <ActionsComponent
//             row={row}
//             getData={this.props.getData}
//             // parsedFilter={this.props.parsedFilter}
//             currentData={this.handleCurrentData}
//             deleteRow={this.handleDelete}
//           />
//         )
//       }
//     ],
//     allData: [],
//     value: "",
//     rowsPerPage: 4,
//     sidebar: false,
//     currentData: null,
//     selected: [],
//     totalRecords: 0,
//     sortIndex: [],
//     addNew: ""
//   }
//     async componentDidMount() {
//         const allCourses = await getAllTerms();
//         this.setState({ courses: allCourses })
//         console.log("==================================")
//         console.log(this.state.courses)
//   }
//       handleSearch = (query) => {
//         this.setState({ searchQuery: query, currentPage: 1 });
//     };
//     handleSidebar = (boolean, addNew = false) => {
//     this.setState({ sidebar: boolean })
//     if (addNew === true) this.setState({ currentData: null, addNew: true })
//   }
//     handlePagination = page => {
//     let { parsedFilter, getData } = this.props
//     let perPage = parsedFilter.perPage !== undefined ? parsedFilter.perPage : 4
//     let urlPrefix = "/admin/termList"
//     history.push(
//       `${urlPrefix}?page=${page.selected + 1}&perPage=${perPage}`
//     )
//       let {
//       columns,
//       data,
//       allData,
//       totalPages,
//       value,
//       rowsPerPage,
//       currentData,
//       sidebar,
//       totalRecords,
//       sortIndex
//     } = this.state
//   return ( 

//     <div className="data-list list-view">
//               <DataTable
//           columns={columns}
//           data={value.length ? allData : data}
//           pagination
//           paginationServer
//           paginationComponent={() => (
//             <ReactPaginate
//               previousLabel={<ChevronLeft size={15} />}
//               nextLabel={<ChevronRight size={15} />}
//               breakLabel="..."
//               breakClassName="break-me"
//               pageCount={totalPages}
//               containerClassName="vx-pagination separated-pagination pagination-end pagination-sm mb-0 mt-2"
//               activeClassName="active"
//               forcePage={
//                 this.props.parsedFilter.page
//                   ? parseInt(this.props.parsedFilter.page - 1)
//                   : 0
//               }
//               onPageChange={page => this.handlePagination(page)}
//             />
//           )}
//           noHeader
//           subHeader
//           selectableRows
//           responsive
//           pointerOnHover
//           selectableRowsHighlight
//           onSelectedRowsChange={data =>
//             this.setState({ selected: data.selectedRows })
//           }
//           customStyles={selectedStyle}
//           subHeaderComponent={
//             <CustomHeader
//               handleSidebar={this.handleSidebar}
//               handleFilter={this.handleFilter}
//               handleRowsPerPage={this.handleRowsPerPage}
//               rowsPerPage={rowsPerPage}
//               total={totalRecords}
//               index={sortIndex}
//             />
//           }
//           sortIcon={<ChevronDown />}
//           selectableRowsComponent={Checkbox}
//           selectableRowsComponentProps={{
//             color: "primary",
//             icon: <Check className="vx-icon" size={12} />,
//             label: "",
//             size: "sm"
//           }}
//       />
//               <Sidebar
//           show={sidebar}
//           data={currentData}
//           updateData={this.props.updateData}
//           addData={this.props.addData}
//           handleSidebar={this.handleSidebar}
//           thumbView={this.props.thumbView}
//           getData={this.props.getData}
//           dataParams={this.props.parsedFilter}
//           addNew={this.state.addNew}
//         />
//         <div
//           className={classnames("data-list-overlay", {
//             show: sidebar
//           })}
//           onClick={() => this.handleSidebar(false, true)}
//         />
//     </div>

//   );   
// }
 
// export default List;
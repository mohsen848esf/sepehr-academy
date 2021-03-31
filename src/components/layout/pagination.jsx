import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { ChevronLeft, ChevronRight } from "react-feather";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  //   const prevPage = () => {
  //     if (currentPage === 1) {
  //       return;
  //     }
  //     const currentPage = currentPage - 1;
  //   };
  //   const nextPage = () => {
  //     if (currentPage === pages) {
  //       return;
  //     }
  //     const currentPage = currentPage + 1;
  //   };

  return (
    <nav>
      <ul className="pagination">
        {/* <li className="page-item">
          <ChevronLeft size={15} onClick={() => prevPage()} />
        </li> */}
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
        {/* <li className="page-item">
          <ChevronRight size={15} onClick={() => nextPage()} />
        </li> */}
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
export default Pagination;

import React, { Fragment } from "react";

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  selectedItem,
  onItemSelect,
}) => {
  return (
      <Fragment>
          {items.map(item => (
            <a
              style={{cursor: "pointer"}}
              onClick={() => onItemSelect(item)}
              key={item[valueProperty]}
              className={
                item === selectedItem ? `button  nav-link  my-2 active ${item[valueProperty]}` : `button  nav-link  my-2 ${item[valueProperty]}`
              }
            >
              <h5  className="title" >{item[textProperty]} </h5>
            </a>
          ))}
      </Fragment>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;

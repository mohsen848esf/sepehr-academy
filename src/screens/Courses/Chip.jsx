import React from "react";
import { X } from "react-feather";
const Chip = (props) => {
  const closeChip = (e) => {
    // props.removeChip(e.target);
    console.log(e.target.text);
    e.target.closest(".chip").remove();
  };

  return (
    <div
      className={`chip ${props.className} ${
        props.color ? `chip-${props.color}` : null
      }`}
    >
      <div className="chip-body">
        {(!props.avatarImg && props.avatarText) ||
        (!props.avatarImg && props.avatarIcon) ? (
          <div
            className={`avatar ${
              props.avatarColor ? `bg-${props.avatarColor}` : null
            }`}
          >
            <div className="avatar-content">
              {props.avatarText ? props.avatarText : null}
              {props.avatarIcon ? props.avatarIcon : null}
            </div>
          </div>
        ) : props.avatarImg ? (
          <div className="avatar">
            <img src={props.avatarImg} alt="chipImg" height="20" width="20" />
          </div>
        ) : null}
        <div className="chip-text">{props.text}</div>
        {props.closable ? (
          <div className="chip-closable" onClick={(e) => closeChip(e)}>
            {props.closableIcon ? props.closableIcon : <X />}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Chip;

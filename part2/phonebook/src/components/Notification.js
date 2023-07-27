import React from "react";

const Notification = (props) => {
  const noticeStyle = {
    color: props.color || "green",
    padding: "10px",
    border: `3px solid ${props.color || "green"}`,
    borderRadius: "5px",
    backgroundColor: "lightGrey",
  };
  console.log(props.msg);
  return <h3 style={noticeStyle}>{props.msg}</h3>;
};

export default Notification;

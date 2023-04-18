import React from "react";
import ReactLoading from "react-loading";
const Loading = () => {
  return (
    <div>
      <ReactLoading type="spin" color="#3498db" height={40} width={40} />
      <span>Đang tải...</span>
    </div>
  );
};

export default Loading;

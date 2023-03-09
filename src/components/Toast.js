import React from "react";

import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

function Toast({ msg }) {
  const notify = () => toast.error(msg);

  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default Toast;

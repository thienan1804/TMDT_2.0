import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// External files
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStylePage from "./presentations/globalComponents/globalStyle/GlobalStylePage";
// Internal files
// Style

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Example user object, replace this with your actual user data logic
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStylePage>
        <App />
      </GlobalStylePage>
    </BrowserRouter>
    <ToastContainer
      style={{ zIndex: 9999999999999 }}
      position="bottom-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  </React.StrictMode>
);

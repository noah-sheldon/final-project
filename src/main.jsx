import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
<<<<<<< HEAD
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense("ORg4AjUWIQA/Gnt2UVhiQlVPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9nSXxTfkRnW31ed3RcQGQ=");
=======
import { registerLicense } from "@syncfusion/ej2-base";
>>>>>>> a772bb7094273865d506fcafc66b47c6222da68d

registerLicense(import.meta.env.VITE_SYNCFUSION_API);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

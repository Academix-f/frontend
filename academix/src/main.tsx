import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Footer from "./components/General/Footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="flex flex-col min-h-screen">
      <App />
      <Footer />
    </div>
  </React.StrictMode>
);

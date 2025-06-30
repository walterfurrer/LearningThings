import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div id="site">
      <Header />
      <main></main>
      <Footer />
    </div>
  </StrictMode>,
);

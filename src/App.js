import React from "react";
import "./App.css";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Howto from "./pages/Howto";
import ContactUs from "./pages/ContactUs";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <React.Fragment>
      <Header />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"how-to"} element={<Howto />} />
        <Route path={"contact-us"} element={<ContactUs />} />
        <Route path={"terms"} element={<Terms />} />
        <Route path={"privacy"} element={<Privacy />} />

        {/* <Route path="*" element={<InvalidPath />} /> */}
      </Routes>

      <Footer />
    </React.Fragment>
  );
}

export function AppProvider() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;

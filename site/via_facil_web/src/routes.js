import { Fragment } from "react";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import HomeUser from "./components/pages/HomeUser";
import Keychain from "./components/pages/KeychainUser";
import AboutUs from "./components/pages/AboutUs";
import AddCompany from "./components/pages/AddCompany";
import EditUser from "./components/pages/EditUser";
import { isAuthenticated } from "./services/auth";

const Private = ({ Item }) => {
  return isAuthenticated() ? <Item /> : <Home />;
};

const Rotas = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
          <Route exact path="/login" element={<Login />}>
            {" "}
          </Route>
          <Route exact path="/sign-up" element={<SignUp />}>
            {" "}
          </Route>
          <Route exact path="/home-user" element={<Private Item={HomeUser} />}>
            {" "}
          </Route>
          <Route
            exact
            path="/keychain-user"
            element={<Private Item={Keychain} />}
          >
            {" "}
          </Route>
          <Route exact path="/about-us" element={<AboutUs />}>
            {" "}
          </Route>
          <Route
            exact
            path="/add-company"
            element={<Private Item={AddCompany} />}
          >
            {" "}
          </Route>
          <Route exact path="/edit-user" element={<Private Item={EditUser} />}>
            {" "}
          </Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default Rotas;

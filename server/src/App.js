import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import BlogWriting from "./components/BlogWriting/BlogWriting";

const App = () => {
  const [user, setUser] = useState({ value: null });
  const [key, setKey] = useState(0);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      setUser({ value: token });
      setKey(Math.random());
    }
  }, [token]);

  const logout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully!");
  };

  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar logout={logout} user={user} key={key} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/ForgotPassword" component={ForgotPassword} />
        <Route exact path="/BlogWriting" component={BlogWriting} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

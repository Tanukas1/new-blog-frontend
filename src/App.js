import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "./components/header";
/*import Page from "./components/Page";*/
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import AddBlog from "./components/addBlog";
import ViewBlog from "./components/viewBlog";
import ListBlog from "./components/listBlog";
import { BlogProvider } from "./blogContext";
import Footer from "./components/footer";
import ManageBlog from "./components/manage";

function App() {
  return (
    <div>
      <Router>
        <BlogProvider>
          <Header></Header>

          <Route component={Home} path={"/home"}></Route>
          <Route component={Login} path={"/login"}></Route>
          <Route component={Signup} path={"/signup"}></Route>
          <Route component={AddBlog} path={"/AddBlog"}></Route>
          <Route component={ViewBlog} path={"/viewBlog/:id"}></Route>
          <Route component={ListBlog} path={"/listblog"}></Route>
          <Route component={ManageBlog} path={"/manage"}></Route>
          <Route exact path="/">
            <Redirect to="/AddBlog" />
          </Route>
          <Footer></Footer>
        </BlogProvider>
      </Router>
    </div>
  );
}

export default App;

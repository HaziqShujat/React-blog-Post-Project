import "./NavBar.css";
import Button from "./Button";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import BlogInputFields from "./BlogInputFields";
import AboutUS from "./AboutUS";
import Home from "./Home";
import Cards from "./Cards";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function NavBar() {
  const location = useLocation();
  const [isActivePage, setIsActivePage] = useState(false);
  useEffect(() => {
    const decodedPathname = decodeURIComponent(location.pathname);
    setIsActivePage(decodedPathname === "/about us");
  }, [location]);

  const newlocation = useLocation();
  const [home, setHome] = useState(false);
  useEffect(() => {
    const homedecodepath = decodeURIComponent(newlocation.pathname);
    setHome(homedecodepath === "/home");
  }, [newlocation]);

  return (
    <>
      <div className="header">
        <div className="NavBar">
          <h1>The Blog Post</h1>
          <div className="Links">
            <NavLink
              to="/home"
              activeClassName="select"
              style={{ color: home ? "red" : "white" }}
              className={home ? "newactive" : ""}
            >
              Home
            </NavLink>

            <NavLink
              to="/about us"
              activeClassName="selected"
              style={{
                color: isActivePage ? "red" : "white",
              }}
              className={isActivePage ? "active-link" : ""}
            >
              About Us
            </NavLink>
            <Link to="/Cards">Recent Blogs</Link>

            <Button />
          </div>
        </div>
      </div>
      <BlogInputFields />
      <Routes>
        {<Route path="/home" element={<Home />} />}
        <Route path="/about us" element={<AboutUS />} />
        <Route path="/Cards" element={<Cards />} />
      </Routes>
    </>
  );
}

export default NavBar;

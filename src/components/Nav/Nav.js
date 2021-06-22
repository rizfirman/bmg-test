import React, { useEffect, useState } from "react";
import "./Nav.css";
import MovieIcon from "@material-ui/icons/Movie";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav_bar ${show && "nav_white"}`}>
      <h1 className={`nav_logo ${show && "nav_logo2"}`}>
        TheMovieDB
        <MovieIcon />
      </h1>
    </div>
  );
}

export default Nav;

import React, { useState } from "react";
import axios from "axios";
import "./Header.css";

import { Link } from "react-router-dom";

export default function Header({setSearchResults}) {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const apiKey = "39185654-16e7290cf3546e214376e6ba3"; 
      const response = await axios.get("https://pixabay.com/api/", {
        params: {
          key: apiKey,
          q: searchQuery,
        },
      });
      setSearchResults(response.data.hits);
    } catch (error) {
      console.error("Error searching images:", error);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img
          src="pinlogo.jpg"
          className="mx-3"
          alt="logo"
          style={{ width: "50px", height: "50px" }}
        />
        <div className="container">
          <a className="navbar-brand" href="#">
            Pinterest
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/explore"
                >
                  Explore
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/create"
                >
                  Create
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center ml-auto">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search"
                  aria-label="Search"
                  style={{ width: "750px" }}
                />
                
                <button
                  className="btn"
                  type="submit"
                  onClick={handleSearch}
                >
                  <Link id="b" to="/search" style={{textDecoration:"none"}}>
                  Search</Link>
                </button>
                
              </form>
              <a className="btn btn-outline-info mx-2">Login</a>
            </div>
          </div>
        </div>
      </nav>
      
    </>
  );
}

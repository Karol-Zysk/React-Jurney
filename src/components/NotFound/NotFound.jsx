import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      flexDirection: "column",
    }}
  >
    <h1>404 - Not Found!</h1>
    <Link style={{ fontSize: "1.5rem" }} to="/">
      Go Home
    </Link>
  </div>
);

export default NotFound;

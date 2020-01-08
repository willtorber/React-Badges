import React from "react";

import "./styles/NotFound.css";
import img404 from "../images/img404.webp";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="page">
      <div className="center">
        <span>
          <img src={img404} alt="Not found image" className="center" />
        </span>
        <br />
        <h3 style={{ textAlign: "center" }} className="font-weight-bold">
          Ouh!!
        </h3>
        <h2 style={{ textAlign: "center" }} className="font-weight-light">
          Lo que buscas no existe...
        </h2>
        <h5 style={{ textAlign: "center" }}>
          Tranquilo, puedes volver al inicio dando clic
          <span className="font-weight-bold">
            <Link to="/"> aquí</Link>
          </span>
        </h5>
      </div>
    </div>
  );
}

export default NotFound;

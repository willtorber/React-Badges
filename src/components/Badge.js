import React from "react";
import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';
import avatar from '../images/avatar.jpg';


class Badge extends React.Component {
    render() {
      return (
        <div className="Badge">
          <div className="Badge__header">
            <img src={confLogo} alt="Logo de la conferencia" />
          </div>
  
          <div className="Badge__section-name">
            <img
              className="Badge__avatar"
              src={avatar}
              alt="Avatar"
            />
            <h1>
              William Schnaider <br /> Torres Bermon
            </h1>
          </div>
  
          <div className="Badge__section-info">
            <h3>Software Engineerk</h3>
            <div>@willtorber</div>
          </div>
  
          <div className="Badge__footer">#platziconf</div>
        </div>
      );
    }
  }

export default Badge;
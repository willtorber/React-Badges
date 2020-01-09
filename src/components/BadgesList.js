import React from "react";

import "./styles/BadgesList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMailBulk, faEye } from "@fortawesome/free-solid-svg-icons";
import iconTwitter from "../images/icons/twitter-brands.svg";
import Gravatar from "./Gravatar";
import { Link } from "react-router-dom";

class BadgesListItem extends React.Component {
  render() {
    console.log(this.props.badge);

    return (
      <div className="card border-info mb-3 ">
        <div className="card-header">
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <Link to={`/badges/${this.props.badge.id}`}>
            <span className="float-right">
              <FontAwesomeIcon icon={faEye} />
            </span>
          </Link>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-4">
              <Gravatar
                className="BadgesListItem__avatar"
                firstName={this.props.badge.firstName}
                lastName={this.props.badge.lastName}
                avatar={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
              />
            </div>
            <div className="col-8">
              <p className="card-text">
                <span>
                  <FontAwesomeIcon icon={faUser} />
                </span>
                {this.props.badge.jobTitle}
              </p>
              <p className="card-text">
                <span>
                  <FontAwesomeIcon icon={faMailBulk} />
                </span>
                <a href={"mailto:" + this.props.badge.email}>
                  {this.props.badge.email}
                </a>
              </p>
              <p className="card-text">
                <span>
                  <img
                    style={{ width: "18px" }}
                    src={iconTwitter}
                    alt="twitter-logo"
                  />
                </span>
                @{this.props.badge.twitter}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class BadgesList extends React.Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <BadgesListItem badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;

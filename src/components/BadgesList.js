import React from "react";

import "./styles/BadgesList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import iconTwitter from "../images/icons/twitter-brands.svg";

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="card border-info mb-3 ">
        <div className="card-header">
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-4">
              <img
                className="BadgesListItem__avatar"
                src={this.props.badge.avatarUrl}
                alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
              />
            </div>
            <div className="col-8">
              <p class="card-text">
                <span>
                  <FontAwesomeIcon icon={faUser} />
                </span>
                {this.props.badge.jobTitle}
              </p>
              <p class="card-text">
                <span>
                  <FontAwesomeIcon icon={faMailBulk} />
                </span>
                <a href={"mailto:" + this.props.badge.email}>
                  {this.props.badge.email}
                </a>
              </p>
              <p class="card-text">
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

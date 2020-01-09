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

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>

        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </div>
    );
  }

  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>

      <ul className="list-unstyled">
        {filteredBadges.map(badge => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;

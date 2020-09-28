import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Spinner } from "../layout/Spinner";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }
  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
  };
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      html_url,
      login,
      company,
      following,
      Followers,
      public_gists,
      public_repos,
      hireable,
    } = this.props.user;
    const { loading } = this.props;

    if (loading) return <Spinner />;
    return (
      <Fragment>
        <Link className="btn btn-light" to="/">
          Back To Search
        </Link>
        hireable:{" "}
        {hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              alt="avatar"
              style={{ width: "100px" }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-light">
              Visit the Github Profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username:</strong>
                    {login}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company:</strong>
                    {login}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Blog:</strong>
                    {login}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {Followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-info">Public repo: {public_repos}</div>
          <div className="badge badge-light">Public gist: {public_gists}</div>
        </div>
        <Repos repos={this.props.repos} />
      </Fragment>
    );
  }
}

export default User;

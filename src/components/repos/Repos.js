import React from "react";
import PropTypes from "prop-types";
import RepoItem from "../repos/RepoItems";

const Repos = ({ repos }) => {
  return repos.map((repo) => <RepoItem repo={repos} />);
};
Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};
export default Repos;

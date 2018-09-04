import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { game, loading } from "../selectors/initial";
import { actions as startGameActions } from "../services/start";

class BoardContainer extends Component {
  componentWillMount = () => {
    this.props.startGame();
  };
  render() {
    const { loading, game } = this.props;
    if (loading) {
      return <p>Loading...</p>;
    }
    console.log({ game });
    return <div />;
  }
}

const mapStateToProps = function(state) {
  return {
    game: game(state),
    loading: loading(state)
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    startGame: bindActionCreators(startGameActions.fetch, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer);

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { game, loading, error } from "../selectors/selectors";
import { actions as startGameActions } from "../services/start";
import { actions as sow } from "../services/sow";
import Board from "../components/Board";

class BoardContainer extends Component {
  componentWillMount = () => {
    this.props.startGame();
  };

  makeMove = playerIndex => pitNumber => {
    const { game } = this.props;
    this.props.sow({ playerIndex, pitNumber, game });
  };

  render() {
    const { loading, game, error } = this.props;
    if (loading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>{error.toString()}</p>;
    }
    if (game) {
      return (
        <Board
          pits={game.pits}
          kalahas={game.kalahas}
          makeMove={this.makeMove(game.currentPlayerIndex)}
        />
      );
    }
    return <div />;
  }
}

const mapStateToProps = function(state) {
  return {
    game: game(state),
    loading: loading(state),
    error: error(state)
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    startGame: bindActionCreators(startGameActions.fetch, dispatch),
    sow: bindActionCreators(sow.fetch, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer);

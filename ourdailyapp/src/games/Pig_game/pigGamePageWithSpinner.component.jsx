import React from "react";

import { getPigGameState } from "../../firebase/firestore/getData";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsLoading } from "../../redux/pigGame/pigGame.selectors";
import {
  loadGameState,
  loadingIsFinished,
} from "../../redux/pigGame/pigGame.actions";

import PigGamePage from "./pigGamePage.component";

class PigGamePageWithSpinner extends React.Component {
  async componentDidMount() {
    // Load Game State to pigGameReducer
    const { loadGameState, loadingIsFinished } = this.props;
    const gameState = await getPigGameState();
    if (gameState !== null) {
      loadGameState(gameState);
    }

    loadingIsFinished();
  }

  render() {
    const { isLoading } = this.props;
    return isLoading ? <h1>Loading</h1> : <PigGamePage />;
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  loadGameState: (gameState) => dispatch(loadGameState(gameState)),
  loadingIsFinished: () => dispatch(loadingIsFinished()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PigGamePageWithSpinner);

import React from "react";
import S from "./pigGamePageWithSpinner.style";
import "./pigGamePageWithSpinner.style.scss";

import { getPigGameState } from "../../firebase/firestore/getData";

// import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsLoading } from "../../redux/pigGame/pigGame.selectors";
import {
  loadGameState,
  loadingIsFinished,
  setIsLoadingToTrue,
  startNewGame,
} from "../../redux/pigGame/pigGame.actions";

import PigGamePage from "./pigGamePage.component";

class PigGamePageWithSpinner extends React.Component {
  async componentDidMount() {
    // Load Game State to pigGameReducer

    const {
      loadGameState,
      loadingIsFinished,
      isLoading,
      startNewGame,
    } = this.props;

    console.log("PigGameWithSpinner Mounted: ", isLoading);

    const gameState = await getPigGameState();
    if (gameState !== null) {
      loadGameState(gameState);
    } else {
      startNewGame();
    }

    loadingIsFinished();
  }

  componentWillUnmount() {
    const { isLoading, setIsLoadingToTrue } = this.props;
    setIsLoadingToTrue();
    console.log("PigGameWithSpinner Unmounted: ", isLoading);
  }

  render() {
    const { isLoading } = this.props;
    return isLoading ? (
      <S.Container>
        <S.Dice>
          <S.Face_front>
            <div></div>
          </S.Face_front>
          <S.Face_left>
            <div></div>
            <div></div>
            <div></div>
          </S.Face_left>
          <S.Face_right>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </S.Face_right>
          <S.Face_back>
            <div></div>
            <div></div>
          </S.Face_back>
        </S.Dice>
      </S.Container>
    ) : (
      <PigGamePage />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  loadGameState: (gameState) => dispatch(loadGameState(gameState)),
  loadingIsFinished: () => dispatch(loadingIsFinished()),
  setIsLoadingToTrue: () => dispatch(setIsLoadingToTrue()),
  startNewGame: () => dispatch(startNewGame()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PigGamePageWithSpinner);

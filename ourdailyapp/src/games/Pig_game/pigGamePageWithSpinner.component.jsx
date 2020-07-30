import React from "react";
import S from "./pigGamePageWithSpinner.style";
import "./pigGamePageWithSpinner.style.scss";

import { getPigGameState } from "../../firebase/firestore/getData";
import { CSSTransition } from "react-transition-group";
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

    setTimeout(() => {
      loadingIsFinished();
    }, 1200);
  }

  render() {
    const { isLoading } = this.props;
    return isLoading ? (
      <CSSTransition
        in={isLoading}
        classNames={"pop"}
        timeout={500}
        onEnter={() => {
          console.log("FIRED!");
        }}
        appear
      >
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
      </CSSTransition>
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PigGamePageWithSpinner);

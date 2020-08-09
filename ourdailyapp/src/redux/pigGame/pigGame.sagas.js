import { takeLatest, all, call, put, select } from "redux-saga/effects";
import PigGameActionTypes from "./pigGame.types";
import {
  startNewGame,
  setPlayer2UserInfo,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changeDiceNumber,
  changePrevScores,
  playerClearTotalScore,
  playerClearCurrentScore,
  switchActivePlayer,
  playerAddCurrentScore,
  addStrikes,
  clearStrikes,
  restorePrevGameData,
  playerAddTotalScore,
  checkWinner,
  resetPrevScore,
} from "./pigGame.actions";
import {
  setIsProcessingSignInTRUE,
  setIsProcessingSignInFALSE,
  signInFormOnHide,
} from "../pigGameModals/pigGameModals.actions";

import { getUserAuthInfo, saveGameState } from "./pigGame.sagaUtils";

function* onSignInStart() {
  yield takeLatest(PigGameActionTypes.SIGN_IN_START, signIn);
}

function* onSignOutStart() {
  yield takeLatest(PigGameActionTypes.SIGN_OUT_START, signOut);
}

function* onRollDice() {
  yield takeLatest(PigGameActionTypes.ROLL_DICE, rollDice);
}

function* onHoldDice() {
  yield takeLatest(PigGameActionTypes.HOLD_DICE, holdDice);
}

function* onStartNewGame() {
  yield takeLatest(PigGameActionTypes.START_NEW_GAME, saveNewGame);
}

export default function* pigGameSaga() {
  yield all([
    call(onSignInStart),
    call(onSignOutStart),
    call(onRollDice),
    call(onStartNewGame),
    call(onHoldDice),
  ]);
}

// ================= More generator functions =================

function* signIn({ email, password }) {
  try {
    yield;
    // * Start spinner
    yield put(setIsProcessingSignInTRUE());
    const user = yield call(getUserAuthInfo, email, password);
    if (user) {
      // 1. Reset game data
      yield put(startNewGame());

      // 2. Player 2 data -> reducer
      yield put(setPlayer2UserInfo(user));

      const pigGameState = yield select((state) => state.pigGame_P);
      yield put(signInFormOnHide());
      yield call(saveGameState, pigGameState);
    } else {
      throw new Error("Sign In Form Error");
    }

    // * Stop spinner
    yield put(setIsProcessingSignInFALSE());
  } catch (error) {
    // * Stop spinner
    yield put(setIsProcessingSignInFALSE());
    yield put(signInFailure(error.message));
  }
}

function* signOut() {
  try {
    yield put(signOutSuccess());
    yield put(startNewGame());
    // Save state to firestore
    const pigGameState = yield select((state) => state.pigGame_P);
    yield call(saveGameState, pigGameState);
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}

function* saveNewGame() {
  const gameState = yield select((state) => state.pigGame_P);
  console.log("game: ".gameState);
  yield call(saveGameState, gameState);
}

function* rollDice() {
  const prevGameState = yield select((state) => state.pigGame_P);
  try {
    const winner = yield select((state) => state.pigGame_P.winner);
    if (winner === "none") {
      console.log("rolling dice...");
      const newDiceNum = yield Math.floor(Math.random() * 6) + 1;
      const pigGameReducer = yield select((state) => state.pigGame_P);
      const activePlayer = pigGameReducer.activePlayer;
      yield put(changeDiceNumber(newDiceNum));
      // 1. Save the number
      // 2. IF prev dice + current dice === 8 -> STOP
      const prev_scores = yield select((state) => state.pigGame_P.prev_scores);
      yield put(changePrevScores(newDiceNum));
      if (newDiceNum + prev_scores[activePlayer - 1] === 8) {
        yield put(playerClearTotalScore());
        yield put(playerClearCurrentScore());
        yield put(switchActivePlayer());
      }
      // 3. IF prev dice + current dice !== 8 START applying game logic
      yield put(playerAddCurrentScore(newDiceNum));
      // 4. IF prev dice and the current dice are the same === strikes++
      if (newDiceNum === prev_scores[activePlayer - 1]) {
        yield put(addStrikes());
      } else {
        yield put(clearStrikes());
      }
      // 5. Save Data to firestore
      const pigGameStateObj = yield select((state) => state.pigGame_P);
      yield call(saveGameState, pigGameStateObj);
    }
  } catch (error) {
    yield put(restorePrevGameData(prevGameState));
    console.log(error);
  }
}

function* holdDice() {
  const prevGameState = yield select((state) => state.pigGame_P);
  try {
    if (prevGameState.winner === "none") {
      console.log("hi");
      const activePlayer = prevGameState.activePlayer;
      // 1. Clear strikes
      yield put(clearStrikes());
      // 2. Add current score to total score
      yield put(
        playerAddTotalScore(prevGameState[`player${activePlayer}`].currentScore)
      );
      // 3. Clear current score
      yield put(playerClearCurrentScore());
      // // 4. Check if someone has won
      yield put(checkWinner());
      // // 5. IF no one has won, game continues and switch player
      let gameState = yield select((state) => state.pigGame_P);
      if (gameState.winner === "none") {
        // Reset prev score
        yield put(resetPrevScore());
        // Switch Player
        yield put(switchActivePlayer());
      }
      // Save data to firestore
      gameState = yield select((state) => state.pigGame_P);
      yield call(saveGameState, gameState);
    }
  } catch (error) {
    console.log(error);
    yield put(restorePrevGameData(prevGameState));
  }
}

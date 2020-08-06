import React from "react";
import S from "./MainPageAccessAppWrapperWithSpinner.style";
import "./MainPageAccessAppWrapperWithSpinner.style.scss";

import { SwitchTransition, CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import MainPageAccessAppWrapper from "./MainPageAccessAppWrapper.component";
import {
  selectIsAccessAppBtnsLoaded,
  selectAccessAppBtns,
} from "../../redux/app/app.selector";

const ApplicationWrapperWithSpinner = ({
  isLoading,
  accessAppBtns,
  ...otherProps
}) => {
  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={isLoading}
        addEndListener={(node, done) =>
          node.addEventListener("transitionend", done, false)
        }
        classNames="fade"
      >
        <S.mainPageAccessAppWrapperWithSpinner_wrapper>
          {isLoading ? (
            <S.SpinnerOverlay>
              <S.SpinnerContainer />
            </S.SpinnerOverlay>
          ) : (
            <MainPageAccessAppWrapper
              accessAppBtns={accessAppBtns}
              {...otherProps}
            />
          )}
        </S.mainPageAccessAppWrapperWithSpinner_wrapper>
      </CSSTransition>
    </SwitchTransition>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsAccessAppBtnsLoaded(state),
  accessAppBtns: selectAccessAppBtns,
});

export default connect(mapStateToProps)(ApplicationWrapperWithSpinner);

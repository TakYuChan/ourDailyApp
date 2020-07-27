import React from "react";
import S from "./applicationWrapperWithSpinner.style";
import "./applicationWrapperWithSpinner.style.scss";

import { SwitchTransition, CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ApplicationWrapper from "./applicationWrapper.component";
import {
  selectIsAppLogoItemsLoaded,
  selectAppLogoItems,
} from "../../redux/app/app.selector";

const ApplicationWrapperWithSpinner = ({
  isLoading,
  appLogoItems,
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
        <S.applicationWrapperWithSpinner_wrapper>
          {isLoading ? (
            <S.SpinnerOverlay>
              <S.SpinnerContainer />
            </S.SpinnerOverlay>
          ) : (
            <ApplicationWrapper appLogoItems={appLogoItems} {...otherProps} />
          )}
        </S.applicationWrapperWithSpinner_wrapper>
      </CSSTransition>
    </SwitchTransition>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsAppLogoItemsLoaded(state),
  appLogoItems: selectAppLogoItems,
});

export default connect(mapStateToProps)(ApplicationWrapperWithSpinner);

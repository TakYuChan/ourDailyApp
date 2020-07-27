import React from "react";
import S from "./pigGamePage.style";

const PigGamePage = () => {
  return (
    <div className="PigGame-Page pages">
      <S.IFrame
        src="https://thepiggamefrankyvenus.netlify.app/"
        allowfullscreen="true"
        frameBorder="0"
      ></S.IFrame>
    </div>
  );
};

export default PigGamePage;

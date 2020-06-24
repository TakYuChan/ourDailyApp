import React from "react";
import "./applicationDetailPage.style.scss";

import { connect } from "react-redux";
import { selectApp } from "../../redux/shop/shop.selector";

import CustomTag from "../../Components/customTag/customTag.component";

const ApplicationDetailPage = ({ appData }) => {
  const { videoSrc, tags, intros, features, tagsColor } = appData.appDetails;

  return (
    <div className="application-detail-page">
      <div className="heading">
        <h1 className="title">{appData.title}</h1>
      </div>

      <section className="app-content-main">
        <div className="video-wrapper">
          <iframe
            src={videoSrc}
            title="vimeo video"
            allowFullScreen
            frameBorder="0"
            className="video"
          ></iframe>
        </div>

        <div className="intro">
          {intros.map((intro) => (
            <p>{intro}</p>
          ))}
        </div>

        <div className="tags">
          {tags.map((tag, index) => (
            <CustomTag background={tagsColor[index]}>{tag}</CustomTag>
          ))}
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  appData: selectApp(ownProps.match.params.applicationId)(state),
});

export default connect(mapStateToProps)(ApplicationDetailPage);

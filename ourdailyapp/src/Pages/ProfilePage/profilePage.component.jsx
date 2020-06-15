import React from "react";
import "./profilePage.style.scss";

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

      //=============== Life Cycle Hooks ===============
      render() {
          return (
              <div className="ProfilePage">
                <h1>Profile Page</h1>
              </div>
          )
      }
}

export default ProfilePage;
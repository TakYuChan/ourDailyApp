import React from "react";
import "./profileDropDownHeader.style.scss";

import {Dropdown} from "react-bootstrap";

const DropDownHeader = ({currentUser}) => {

    let userName = null;
    if(!currentUser == null) {
        if(currentUser.displayName.length > 24) {
            userName = currentUser.displayName.substr(0, 24);
            userName += "...";
        }
    } else {
        console.log("no current user");
    }

    return (
        currentUser ? [<Dropdown.Header key="1">Welcome back!</Dropdown.Header>, 
                      <Dropdown.Item key="2" disabled className="userName"
              >{userName}</Dropdown.Item>] : <Dropdown.Header>Hi, Good morning</Dropdown.Header>
        
    );
}

export default DropDownHeader;
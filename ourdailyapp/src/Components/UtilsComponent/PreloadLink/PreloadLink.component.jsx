import React from "react";
import { Link } from "react-router-dom";


const PreloadLink = ({to, ...otherProps}) => {
    return {
        <Link to={to} onMouseEnter{() => preloadRouteComponent(to)} {...otherProps}/>
    }
}
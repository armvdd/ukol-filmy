import React from "react";
import camera from './camera.svg';

const Header = () => {
    return(
    <h1 className = "header-h1">
      <img className = "logo" src = {camera} alt = "Logo" />
      V našem kině právě uvádíme
    </h1>
    )
}

export default Header;
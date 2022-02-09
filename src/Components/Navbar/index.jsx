import "./styles/style.css";

import * as React from "react";
import Button from "@mui/material/Button";
import Identicon from 'react-identicons'

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleClick = () => {
    setIsAuthenticated(true)
  };

  return (
    <div className="navabr__container">
      <div className="logo">
        <img src="https://ik.imagekit.io/lexworld/Logo.png" alt="Playpoint" />
        <p>Playpoint</p>
      </div>

      {!isAuthenticated && (
        <Button onClick={handleClick}>
          Authenticate
        </Button>
      )}
      {isAuthenticated && (
        <div className="userInfo">
          <p>0x6690d...Dd2741</p>
          <Button>
            <Identicon string="randomness" />
          </Button>
        </div>
      )}
    </div>
  );
}

import "./styles/style.css";

import React from "react";
import {Button} from '@mui/material'

export default function Navbar() {
  return (
    <div className="navabr__container">
      <div className="logo">
        <img src="https://ik.imagekit.io/lexworld/Logo.png" alt="Playpoint" />
        <p>Playpoint</p>
      </div>

      <Button>
        Authenticate
      </Button>
    </div>
  );
}

import React from "react";
import { Button } from "@mui/material";
import "./styles/style.css";

export default function Main() {
  return (
    <div className="main__container">
      <h1 className="page__header">Swap Tokens<span>_</span></h1>

      <div className="swapInputs">
        <div className="bnbContainer">
          <p className="label">You Send</p>
          <div className="tickerHolder">
            <img
              src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Binance-Coin-BNB-icon.png"
              alt=""
            />
            <p>BNB (Binance Coin)</p>
          </div>
          <div className="currentValue">
            <p>Current value:</p>
            <p>
              $4,813.46 <span>-1.46%</span>
            </p>
          </div>
          <div className="input">
            <input type="text" placeholder="0.0014" />
            <Button>MAX</Button>
          </div>
          Available: 123.52 BNB
        </div>

        <div className="icon"><i className="ri-arrow-left-right-line"></i></div>

        <div className="pptContainer">
          <p className="label">You Receive</p>
          <div className="tickerHolder">
            <img src="https://ik.imagekit.io/lexworld/Logo.png" alt="" />
            <p>PPT (Playpoint Coin)</p>
          </div>
          <div className="currentValue">
            <p>Current value:</p>
            <p>$4,813.46</p>
          </div>
          <div className="input">
            <input type="text" placeholder="0.0014" disabled />
          </div>
          Available: 123.52 PPT
        </div>
      </div>

      <p className="gasTracker">Transaction cost: ~$2.54(0.0014BNB)</p>

      <Button className="swapBtn">Swap Now</Button>
    </div>
  );
}

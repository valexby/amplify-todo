import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure({
    Auth: {
        identityPoolId: 'ap-south-1:bead70ce-6f68-45b4-8d2a-9a21ace5d937',
        region: 'ap-south-1',
        identityPoolRegion: 'ap-south-1',
        userPoolId: 'ap-south-1_BZuE8ATRL',
        userPoolWebClientId: '7f2vbrs66r2tpbfsb71n3dro9g',
        authenticationFlowType: 'USER_PASSWORD_AUTH',
    }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

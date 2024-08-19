"use client";

import React from "react";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { account } from "../api/appwrite";
import { OAuthProvider } from "appwrite";

const LoginScreen = () => {
  const isLive = !window.location.origin.includes('localhost'); // Check if live based on origin

  return (
    <div className="colorPrimary homeLink centerAll superPaddingVertical">
      <h1 className="subHeadingSecondary">Hi Vignesh. Login to continue</h1>
      <div>
        <button
          className="flex flex-ai-c personal-link buttonText colorSecondary"
          onClick={() => {
            account.createOAuth2Session(
              OAuthProvider.Google,
              isLive ? 'https://vigneshmarimuthu.com/journal' : 'http://localhost:3000/journal', // Success URL
              isLive ? 'https://vigneshmarimuthu.com/' : 'http://localhost:3000/', // failure URL
            );
          }}
        >
          <FontAwesomeIcon className="socialIcon" icon={faGoogle} size="2x" />
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;

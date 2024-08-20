"use client";

import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { account } from "../api/appwrite";
import { OAuthProvider } from "appwrite";
import React, { useEffect, useState } from "react";

const LoginScreen = () => {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    (async () => {
      const isLive = !window.location?.origin?.includes("localhost"); // Check if live based on origin
      setIsLive(isLive)
    })();
  }, [])

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

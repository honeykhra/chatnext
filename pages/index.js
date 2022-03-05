import React, { useContext } from "react";

import { Context } from "../context";
import axios from "axios";
import { useRouter } from "next/router";

export default function Auth() {
  const { username, setUsername, secret, setSecret } = useContext(Context);

  return (
    <div className="background">
      <div className="auth-container">
        <form
          action=""
          className="auth-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="auth-title">NextJs Chat</div>

          <div className="input-container">
            <input
              placeholder="Email"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">
            Login/Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

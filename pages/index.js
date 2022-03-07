import React, { useContext } from "react";

import { Context } from "../context";
import axios from "axios";
import { useRouter } from "next/router";

export default function Auth() {
  const { username, setUsername, secret, setSecret } = useContext(Context);
  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();

    if (username.length === 0 || secret.length === 0) return;

    axios.put(
      "https://api.chatengine.io/users",
      { username, secret },
      {
        headers: { "Private-key": "b53652fb-1461-4a24-abff-96cbeb064153" },
      }.then((r) => router.push("/chats"))
    );
  }

  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => e.onSubmit()}>
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
              onChange={(e) => setSecret(e.target.value)}
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

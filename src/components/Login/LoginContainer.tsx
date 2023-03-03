import React from "react";
import Login from "./Login/Login";
import LoginContent from "./Login/LoginContent";


const LoginContainer = () => {
  return (
    <section className="w-full">
      <div className="max-w-[1920px] h-screen login-linear-gradient">
        <LoginContent />
        <Login />
      </div>
    </section>
  );
};

export default LoginContainer;

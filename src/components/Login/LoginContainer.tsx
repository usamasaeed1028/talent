import React, { useState } from "react";
import ForgetPassword from "./Login/ForgetPassword";
import Login from "./Login/Login";
import LoginContent from "./Login/LoginContent";

const LoginContainer = () => {
  const [forgetPassword, setForgetPassword] = useState<boolean>(false);
  return (
    <section className="w-full min-h-[100vh] login-linear-gradient flex justify-center relative">
      <div className="bg-[#41254C] h-[827px] w-[827px] rounded-full absolute left-[-218px] top-[-702px] z-[1]"></div>
      <div className="absolute top-[30px] left-[30px] md:left-[280px] z-[2]">
        <div className=" text-[40px]  text-[#FFFFFF]">
          <span className="font-black">TALENT</span>
          <span>LINK</span>
        </div>
      </div>
      <div className="w-full xl:max-w-[1920px] p-[30px] flex flex-col gap-y-[40px] lg:flex-row justify-center relative z-[1]">
        <div className="w-full xl:max-w-[940px]  rounded-[48px] px-[30px] lg:px-[66px] flex justify-center lg:justify-end items-center mt-[80px] lg:mt-[unset]">
          <LoginContent />
        </div>
        <div className="w-full xl:max-w-[980px]  rounded-[48px] bg-[#F5EDF8] px-[30px] lg:px-[66px] py-[40px] flex items-center">
          {!forgetPassword && <Login setForgetPassword={setForgetPassword} />}
          {forgetPassword && <ForgetPassword />}
        </div>
      </div>
    </section>
  );
};

export default LoginContainer;

import Image from "next/image";
import loginImage from "../../../assets/images/login-images/login.png";
const LoginContent = () => {
  return (

      <div className="flex flex-col gap-y-[40px] items-end ">
        <div className="img-container w-full xl:w-[500px] h-full">
          <Image src={loginImage} alt="img" />
        </div>
        <div className="text-[33px] flex flex-col ">
          <span className="text-[#AEB0B1] text-opacity-[70%]">
            Find the best talent within
          </span>
          <span className="text-[#FFFFFF]"> You and Your Company...</span>
        </div>
    </div>
  );
};

export default LoginContent;

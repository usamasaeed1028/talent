import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";

interface Props {
  setForgetPassword: (newState:boolean) => void,
}

const Login = ({setForgetPassword} :Props) => {
  return (
    <div className="w-full md:max-w-[569px]">
      <div className="flex flex-col gap-y-[24px]">
        <h1 className="text-[36px] font-bold">LOG IN</h1>
        <p className="text-[16px] text-[#666666]">
          Enter the Registered E-mail ID or Number for log in...
        </p>
        <div className="flex flex-col gap-y-[24px]">
          <Input
            type="email"
            text="E-mail ID"
            placeholder="Please enter here"
          />
          <Input
            type="password"
            text="Password"
            placeholder="Enter enter here"
          />
        </div>
      </div>
      <div className="text-[14px] text-[#363954] pt-[15px] flex justify-between">
        <div>
          <i className="fa-solid fa-check"></i> <span>Remember Me</span>
        </div>
        <span className="text-opacity-[70%] cursor-pointer hover:underline" onClick={() => setForgetPassword(true)}>Forgot Password?</span>
      </div>
      <div className="pt-[111px]">
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Login;

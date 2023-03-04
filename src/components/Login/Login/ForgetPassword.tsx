import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";

const ForgetPassword = () => {
  return (
    <div className="w-full md:max-w-[569px]">
      <div className="flex flex-col gap-y-[24px]">
        <h1 className="text-[36px] font-bold">FORGOT PASSWORD?</h1>
        <p className="text-[16px] text-[#666666]">
          Enter the Email Address or number associated with your account to help
          us try and connect your account.
        </p>
        <div className="flex flex-col gap-y-[24px]">
          <Input
            type="email"
            text="E-mail ID"
            placeholder="Please enter here"
          />
          <span className="text-[#666666]">
            Enter the 6 Digit OTP sent to given mail or number
          </span>
          <Input
            type="number"
            text="OTP"
            placeholder="Enter enter here"
          />
        </div>
      </div>
      <div className="text-[14px] text-[#363954] pt-[15px] flex justify-between">
        <span className="text-[15px] text-[#666666]">
          Resend otp in 60 Seconds
        </span>
        </div>
        <div className="pt-[111px]">
          <Button>SUBMIT</Button>
        </div>
   
    </div>
  );
};

export default ForgetPassword;

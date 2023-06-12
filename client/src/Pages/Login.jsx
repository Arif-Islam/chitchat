import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineGoogle, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { GiTalk } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [eye, setEye] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    setLoading(true);
    try {
      const data = await axios.post(
        "http://localhost:5000/api/user/login",
        formData,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      toast.success("You've successfully logged in!");
      localStorage.setItem("chitchatUserInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/chats");
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Login failed!");
      setLoading(false);
    }
    // console.log(formData);
  };

  return (
    <div className="text-white bg-[#0F1317] h-screen flex items-center justify-center relative">
      <div className="flex flex-col items-start justify-start">
        <h1 className="mb-[6px] tracking-wide text-3xl font-semibold">Login</h1>
        <p className="text-sm tracking-wide mb-4">
          New User?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-start"
        >
          <input
            className="w-80 h-11 rounded-sm p-2 bg-[#212121] text-gray-100 -ml-1 mb-3 focus:outline-none"
            type="email"
            {...register("email", {
              required: true,
            })}
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <span className="text-red-500 mb-2">Email is required!</span>
          )}
          <div className="relative w-80 h-11 mx-auto mb-3">
            <input
              className="w-80 h-11 rounded-sm p-2 bg-[#212121] text-gray-100 -ml-1  focus:outline-none"
              type={passwordType}
              {...register("password", {
                required: true,
                minLength: 6,
              })}
              placeholder="Password"
            />
            {!eye && (
              <AiFillEye
                onClick={() => {
                  setEye(true);
                  setPasswordType("text");
                }}
                className="absolute left-[280px] bottom-[11px] w-[22px] h-[22px] hover:cursor-pointer"
              ></AiFillEye>
            )}
            {eye && (
              <AiFillEyeInvisible
                onClick={() => {
                  setEye(false);
                  setPasswordType("password");
                }}
                className="absolute left-[280px] bottom-[11px] w-[22px] h-[22px] hover:cursor-pointer"
              ></AiFillEyeInvisible>
            )}
          </div>
          {errors.password?.type === "minLength" && (
            <span className="text-red-500 mb-2">
              Minimum length of password is 6
            </span>
          )}
          {errors.password?.type === "required" && (
            <span className="text-red-500 mb-2">Password is required!</span>
          )}

          <button
            type="submit"
            className="w-80 h-11 rounded-sm bg-blue-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-800 text-white text-[17px] font-semibold -ml-1 mb-4"
          >
            {!loading ? (
              <p>Login</p>
            ) : (
              <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] mt-1"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            )}
          </button>
        </form>
        <p className="w-full text-center mb-4">/</p>
        <div className="w-80 h-12 border-[1px] border-blue-800 rounded-[1px] flex items-center justify-center -ml-1 space-x-2 hover:cursor-pointer hover:border-2">
          <AiOutlineGoogle className="w-6 h-6"></AiOutlineGoogle>
          <p className="font-medium">Continue with Google</p>
        </div>
      </div>
      <div className="hidden md:block">
        <p className="absolute top-4 right-10 flex items-center space-x-2">
          <span>Welcome to chitchat</span>
          <GiTalk className="w-6 h-6 mt-1"></GiTalk>
        </p>
      </div>
    </div>
  );
};

export default Login;

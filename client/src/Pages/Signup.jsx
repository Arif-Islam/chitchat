import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible, AiOutlineGoogle } from "react-icons/ai";
import { GiTalk } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import UserProfileImage from "../components/UserProfileImage";
import generateUserProfileImage from "../utils/GenerateUserProfileImage";

const Signup = () => {
  const [eye, setEye] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   useEffect(() => {
  //     const userInfo = JSON.parse(localStorage.getItem("chitchatUserInfo"));
  //     if (userInfo) {
  //       navigate("/chats");
  //     }
  //   }, [navigate]);

  const onSubmit = async (formData) => {
    console.log(formData);
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/user/signup",
        formData,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (formData.name) {
        generateUserProfileImage(formData.name);
      }
      toast.success("You've successfully signed up!");
      localStorage.setItem("chitchatUserInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/chats");
      //   console.log(formData);
    } catch (error) {
      toast.error("Sign up failed!");
      setLoading(false);
    }
  };
  return (
    <div className="text-white bg-[#0F1317] h-screen flex items-center justify-center relative">
      <div className="flex flex-col items-start justify-start">
        <h1 className="mb-[6px] tracking-wide text-3xl font-semibold">
          Sign Up
        </h1>
        <p className="text-sm tracking-wide mb-4">
          Have an account?{" "}
          <a href="/" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-start"
        >
          <input
            className="w-80 h-11 rounded-sm p-2 bg-[#212121] text-gray-100 -ml-1 mb-3 focus:outline-none"
            type="text"
            {...register("name", {
              required: true,
            })}
            placeholder="Name"
          />
          {errors.name?.type === "required" && (
            <span className="text-red-500 mb-2">Name is required!</span>
          )}
          <input
            className="w-80 h-11 rounded-sm p-2 bg-[#212121] text-gray-100 -ml-1 mb-3 focus:outline-none"
            type="email"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            placeholder="Email"
          />
          {errors.email?.type === "pattern" && (
            <span className="text-red-500 mb-2">Please give a valid email</span>
          )}
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
            Sign Up
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

export default Signup;

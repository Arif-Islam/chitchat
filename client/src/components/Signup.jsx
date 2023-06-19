import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible, AiOutlineGoogle } from "react-icons/ai";
import { GiTalk } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function generateRandomColor() {
  const colors = [
    "#FF5733",
    "#C70039",
    "#900C3F",
    "#581845",
    "#FFC300",
    "#9ec754",
    "#1287A5",
    "#FF5733",
    "#C70039",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function getUserInitials(name) {
  const words = name.split(" ");
  const initials = words
    .filter((word) => word.length > 0)
    .map((word) => word[0].toUpperCase())
    .slice(0, 2)
    .join("");
  return initials;
}

function uploadImage(imageData) {
  const url = `https://api.cloudinary.com/v1_1/dedukuyxr/image/upload`;

  const formData = new FormData();
  formData.append("file", imageData);
  formData.append("upload_preset", "chat-app");
  formData.append("cloud_name", "dedukuyxr");

  return axios
    .post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data.secure_url)
    .catch((error) => {
      console.error("Error uploading image to Cloudinary:", error);
      return "";
    });
}

const Signup = ({ login, setLogin }) => {
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
    if (formData.name && formData.email) {
      const initials = getUserInitials(formData.name);
      const bgColor = generateRandomColor();

      const generateAndUploadImage = async () => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = 75;
        canvas.height = 75;
        context.fillStyle = bgColor;
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.font = "34px Arial";
        context.fillStyle = "#FFFFFF";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(initials, canvas.width / 2, canvas.height / 2);

        const imageData = canvas.toDataURL("image/png");
        // console.log(imageData);
        const uploadedImageUrl = await uploadImage(imageData);
        if (uploadedImageUrl) {
          try {
            const imageUrl = {
              image: uploadedImageUrl,
            };
            const { data } = await axios.post(
              "http://localhost:5000/api/user/signup",
              { formData, imageUrl },
              {
                headers: {
                  "Content-type": "application/json",
                },
              }
            );
            setLoading(false);
            toast.success("You've successfully signed up!");
            localStorage.setItem("chitchatUserInfo", JSON.stringify(data));
            navigate("/chats");
          } catch (error) {
            setLoading(false);
            toast.error("Sign up failed!");
          }
        }
      };

      generateAndUploadImage();
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
          {/* <a href="/" className="text-blue-500 hover:underline">
            Login
          </a> */}
          <span
            onClick={() => setLogin(true)}
            className="text-blue-500 hover:underline hover:cursor-pointer"
          >
            Login
          </span>
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
            {!loading ? (
              <p>Sign Up</p>
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

export default Signup;

import { useForm } from "react-hook-form";
import { AiOutlineGoogle } from "react-icons/ai";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="text-white bg-[#0F1317] h-screen flex items-center justify-center">
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
          <input
            className="w-80 h-11 rounded-sm p-2 bg-[#212121] text-gray-100 -ml-1 mb-3 focus:outline-none"
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
            placeholder="Password"
          />
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
            className="w-80 h-11 rounded-sm bg-blue-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 text-white text-[17px] font-semibold -ml-1 mb-4"
          >
            Login
          </button>
        </form>
        <p className="w-full text-center mb-4">/</p>
        <div className="w-80 h-12 border-[1px] border-blue-800 rounded-[1px] flex items-center justify-center -ml-1 space-x-2 hover:cursor-pointer hover:border-2">
          <AiOutlineGoogle className="w-6 h-6"></AiOutlineGoogle>
          <p className="font-medium">Continue with Google</p>
        </div>
      </div>
    </div>
  );
};

export default Login;

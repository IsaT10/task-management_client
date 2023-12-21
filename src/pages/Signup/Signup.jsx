import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useState } from 'react';
// import { FaEye } from 'react-icons/fa';
// import { toast } from 'react-toastify';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, setLoading, userProfileUpdate } = useAuth();

  // const google = GoogleLogIn();
  //   const axios = useAxios();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const onSubmit = async (data) => {
    createUser(data.email, data.password)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  return (
    <div className="bg-[#FF6347] w-[360px] sm:w-[60%] md:w-1/2 lg:w-[40%] xl:w-[30%] mx-auto flex flex-col items-center justify-center py-6 sm:py-10  px-8  md:px-6   sm:mx-auto my-10 md:my-20 rounded-md     shadow-lg ">
      <h3 className="text-2xl font-bold text-stone-100 mb-4">Sign up</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full    sm:w-4/5 "
      >
        <div className="flex flex-col gap-1.5">
          <label className="font-semibold text-sm text-stone-200">
            Full Name
          </label>
          <input
            className="py-2 px-5 text-lg outline-none rounded-md placeholder:text-base placeholder:font-josep"
            type="text"
            {...register('name', { required: true })}
            required
            placeholder="Type here"
          />
          {errors.name && (
            <span className="text-red-600 font-semibold -mt-1.5 ml-px text-sm tracking-wide">
              This field is required
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1.5 -mt-3">
          <label className="text-sm text-stone-200 font-semibold">Email</label>
          <input
            className="py-2 px-5 text-lg outline-none rounded-md placeholder:text-base placeholder:font-josep"
            type="email"
            {...register('email', {
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            })}
            required
            placeholder="Type here"
          />
          {errors.email && (
            <span className="text-red-600 font-semibold -mt-1.5 ml-px text-sm tracking-wide">
              Please enter a valid email address
            </span>
          )}
        </div>
        <div className="relative flex flex-col gap-2 -mt-3">
          <label className="text-sm text-stone-200 font-semibold">
            Password
          </label>
          <input
            className="py-2 px-5 text-lg outline-none rounded-md placeholder:text-base placeholder:font-josep"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            {...register('password', {
              required: true,
              minLength: 6,
              pattern:
                /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])(?=.*[A-Z])(?=.*\d).+$/,
            })}
          />
          {errors.password?.type === 'minLength' && (
            <span className="text-red-600 font-semibold -mt-1.5 ml-px text-sm tracking-wide">
              Password must has at least 6 characters
            </span>
          )}
          {errors.password?.type === 'pattern' && (
            <span className="text-red-600 font-semibold -mt-1.5 ml-px text-sm tracking-wide">
              Password at least one special character ,one digit and one
              uppercase
            </span>
          )}

          {/* <FaEye
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-12 right-5 text-stone-800 cursor-pointer"
          /> */}
        </div>

        <button
          className={`bg-blue bg-stone-100 py-2 font-semibold text-lg font-josep text-stone-800 hover:bg-primaryColor hover:text-stone-100 duration-200 border-2 hover:border-stone-100 rounded-md  `}
        >
          Sign up
        </button>
      </form>
      <p className="mt-4 text-stone-100 font-semibold text-sm">
        Already registered?
        <Link to="/login" className="underline cursor-pointer ">
          Go to log in
        </Link>
      </p>
      <p className="text-stone-100 mt-2 font-semibold text-sm">
        Or sign in with
      </p>
      <div className="my-3 flex gap-8 text-blue hover:text-darkBlue"></div>
    </div>
  );
};

export default Signup;

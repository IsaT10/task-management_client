import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { AiFillGoogleSquare } from 'react-icons/ai';
import { FaGithubAlt, FaSquareGithub } from 'react-icons/fa6';
import useAxios from '../../Hooks/useAxios';
import { FaEye } from 'react-icons/fa';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [err, setErr] = useState('');
  const { logIn, googleSignIn, githubSignIn } = useAuth();
  const axios = useAxios();
  //github fcd3e5b535c039b0736e39d76445808a57eb0be1

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || '/';

  const onSubmit = async (data) => {
    if (data?.email.length === 0) return;
    if (!data?.password) return;
    logIn(data?.email, data?.password)
      .then((result) => {
        toast.success('Successfully Login');
        navigate('/dashboard/taskManage');
      })
      .catch((err) => {
        if (err.code === 'auth/network-request-failed') {
          //  toast.err('Network request failed');
          return;
        }
        setErr('Invalid email or password. Please try again.');
      });
  };

  const googleSign = () => {
    googleSignIn()
      .then(async (result) => {
        const userInfo = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          // image: result.user.photoURL,
        };
        const res = await axios.post('/users', userInfo);
        toast.success('Successfully Login');
        navigate('/dashboard/taskManage');
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  const gitHubSign = () => {
    githubSignIn()
      .then(async (result) => {
        const userInfo = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          // image: result.user.photoURL,
        };
        const res = await axios.post('/users', userInfo);
        toast.success('Successfully Login');
        navigate('/dashboard/taskManage');
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  return (
    <div className=" bg-[#FF6347] w-[360px] sm:w-[60%] md:w-1/2 lg:w-[40%] xl:w-[30%] mx-auto flex flex-col items-center justify-center py-6 sm:py-10  px-8  md:px-6   sm:mx-auto my-10 md:my-32 rounded-md     shadow-lg ">
      <h3 className="text-2xl font-bold text-stone-100 mb-4">Login</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6  w-full    sm:w-4/5"
      >
        <div className="flex flex-col gap-1.5 -mt-3">
          <label className="text-sm text-stone-200 font-semibold">Email</label>
          <input
            className="py-2 px-5 text-lg outline-none rounded-md placeholder:text-base placeholder:font-josep"
            type="email"
            {...register('email', {
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            })}
            // defaultValue="rakib@gmail.com"
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
            // defaultValue="aA1!11"
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

          <FaEye
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-12 right-5 text-stone-800 cursor-pointer"
          />
        </div>
        {err ? <p className="text-red-600 text-sm">{err}</p> : ''}
        <button
          className={`bg-blue bg-stone-100 py-2 font-semibold text-lg font-josep text-stone-700 hover:bg-primaryColor hover:text-stone-100 duration-200 border-2 hover:border-stone-100 rounded-md  `}
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-blue text-white font-semibold text-sm">
        Don't have account?
        <Link to="/signup" className="underline cursor-pointer ">
          Signup
        </Link>
      </p>
      <p className="text-blue mt-2 text-white font-semibold text-sm">
        Or sign in with
      </p>
      <div className="my-3 flex gap-4 text-stone-200 hover:text-darkBlue">
        <div className="mt-0.5">
          <FaSquareGithub
            onClick={gitHubSign}
            className="cursor-pointer"
            size={30}
          />
        </div>
        <div
        // onClick={google}
        >
          <AiFillGoogleSquare
            onClick={googleSign}
            className="cursor-pointer"
            size={33}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

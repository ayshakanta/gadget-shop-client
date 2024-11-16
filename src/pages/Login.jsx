import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import GoogleLogin from "../components/GoogleLogin";

const Login = () => {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    login(data.email, data.password);
    navigate("/");
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm font-light">
                  Email is Required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500 text-sm font-light">
                  Password is Required
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 text-sm font-light">
                  Password must have at least 6 characters
                </p>
              )}
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn bg-gray-700 text-white">
                Login
              </button>
              <div>
                <GoogleLogin></GoogleLogin>
              </div>
            </div>
            <p className="text-sm">
              New Here?
              <Link className="text-primary" to="/register">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

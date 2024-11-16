import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin().than(() => {
      navigate("/");
    });
  };
  return (
    <div>
      <div className="divider"></div>
      <div>
        <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
          <FcGoogle size={24} /> Google
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
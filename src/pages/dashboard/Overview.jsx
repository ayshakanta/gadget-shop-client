import useAuth from "../../hooks/useAuth";

const Overview = () => {
  const { user } = useAuth();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <h3>{user.email}</h3>
      <h3>{user.role}</h3>
      <h3>{user.status}</h3>
    </div>
  );
};

export default Overview;

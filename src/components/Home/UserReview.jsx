import Review from "./Review";

const UserReview = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-4">
      <Review></Review>
      <Review></Review>
      <Review></Review>
      <Review></Review>
    </div>
  );
};

export default UserReview;

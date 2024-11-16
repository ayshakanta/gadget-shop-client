import Accordion from "../components/Home/Accordion";
import Banner from "../components/Home/Banner";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import UserReview from "../components/Home/UserReview";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto">
        <div className="my-24">
          <h1 className="text-2xl font-semibold my-16 text-center">
            Featured Products
          </h1>
          <FeaturedProducts></FeaturedProducts>
        </div>
        <div>
          <h1 className="text-2xl font-semibold my-16 text-center">
            User Review
          </h1>
          <UserReview></UserReview>
        </div>
        <div>
          <h1 className="text-2xl font-semibold my-16 text-center">
            Frequently Asked Questions
          </h1>
          <Accordion></Accordion>
        </div>
      </div>
    </div>
  );
};

export default Home;

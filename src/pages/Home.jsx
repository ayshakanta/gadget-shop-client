import Banner from "../components/Home/Banner";
import FeaturedProducts from "../components/Home/FeaturedProducts";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="my-24">
        <h1 className="text-2xl font-semibold my-16 text-center">
          Featured Products
        </h1>
        <FeaturedProducts></FeaturedProducts>
      </div>
    </div>
  );
};

export default Home;

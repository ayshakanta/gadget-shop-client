import ProductCard from "../ProductCard";

const FeaturedProducts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 items-center  gap-4">
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
    </div>
  );
};

export default FeaturedProducts;

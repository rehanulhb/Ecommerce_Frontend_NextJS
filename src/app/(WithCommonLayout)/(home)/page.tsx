import Category from "@/components/modules/home/Category";
import FeaturedProducts from "@/components/modules/home/FeaturedProducts";
import HeroSection from "@/components/modules/home/HeroSection";
import TopBrands from "@/components/modules/home/TopBrands";
import { useUser } from "@/context/UserContext";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Category />
      <FeaturedProducts />
      <TopBrands />
    </div>
  );
};

export default HomePage;

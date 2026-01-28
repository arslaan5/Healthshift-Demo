import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BestSellers from "@/components/home/BestSellers";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProducts />
      <BestSellers />
      <WhyChooseUs />
      <Testimonials />
    </Layout>
  );
};

export default Index;

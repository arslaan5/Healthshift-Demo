import { motion } from "framer-motion";
import { ArrowRight, Shield, Truck, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={heroBg}
          alt="HealthShift Pharma"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.span
            className="inline-block text-primary font-medium mb-4 px-4 py-2 bg-teal-100 rounded-full text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Trusted by 10,000+ Healthcare Professionals
          </motion.span>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-gradient">HealthShift Pharma</span>
            <br />
            Advancing Science,
            <br />
            Improving Lives
          </motion.h1>

          <motion.p
            className="text-lg text-muted-foreground mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Discover our range of scientifically formulated pharmaceutical products 
            designed to enhance your health and well-being. Quality assured, 
            clinically tested, and trusted by healthcare professionals nationwide.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="/products">
              <Button size="lg" className="gradient-primary text-primary-foreground gap-2 px-8 h-14 text-base">
                View Products
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="gap-2 px-8 h-14 text-base">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Trust Badges */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md border-t"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Quality Assured", desc: "GMP Certified Manufacturing" },
              { icon: Truck, title: "Fast Delivery", desc: "Free shipping on ₹999+" },
              { icon: Award, title: "Secure Payments", desc: "100% Safe & Encrypted" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

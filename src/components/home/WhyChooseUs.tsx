import { motion } from "framer-motion";
import { FlaskConical, Microscope, ShieldCheck, HeartPulse, Users, Clock } from "lucide-react";

const features = [
  {
    icon: FlaskConical,
    title: "Scientific Formulation",
    description: "Every product is developed by expert pharmacologists using cutting-edge research."
  },
  {
    icon: Microscope,
    title: "Clinically Tested",
    description: "Rigorous clinical trials ensure safety and efficacy of all our products."
  },
  {
    icon: ShieldCheck,
    title: "GMP Certified",
    description: "Manufactured in WHO-GMP certified facilities with the highest quality standards."
  },
  {
    icon: HeartPulse,
    title: "Patient-Centric",
    description: "Designed with patient comfort and health outcomes as our primary focus."
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "24/7 access to healthcare professionals for guidance and support."
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Swift and secure delivery to ensure you receive your products on time."
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Why HealthShift
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to delivering pharmaceutical excellence through innovation, 
            quality, and unwavering dedication to your health.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                className="bg-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-colors h-full"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                <h3 className="font-semibold text-xl mb-3 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

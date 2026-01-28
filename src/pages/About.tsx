import { motion } from "framer-motion";
import { Target, Eye, Award, Shield, Users, FlaskConical } from "lucide-react";
import Layout from "@/components/layout/Layout";

const stats = [
  { value: "10+", label: "Years of Excellence" },
  { value: "6", label: "Proprietary Products" },
  { value: "10K+", label: "Happy Customers" },
  { value: "500+", label: "Healthcare Partners" },
];

const values = [
  {
    icon: FlaskConical,
    title: "Innovation",
    description: "Continuously pushing boundaries in pharmaceutical research and development."
  },
  {
    icon: Shield,
    title: "Quality",
    description: "Uncompromising commitment to the highest standards of product quality."
  },
  {
    icon: Users,
    title: "Patient-First",
    description: "Every decision we make is guided by patient health and well-being."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Striving for excellence in every aspect of our operations."
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Advancing Science,
              <br />
              <span className="text-gradient">Improving Lives</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              HealthShift Pharma Pvt. Ltd. is a leading pharmaceutical company 
              dedicated to developing innovative healthcare solutions that make 
              a meaningful difference in people's lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                A Decade of Healthcare Innovation
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to revolutionize healthcare access in India, 
                  HealthShift Pharma has grown from a small research lab to a trusted 
                  name in pharmaceutical excellence.
                </p>
                <p>
                  Our journey began with a simple belief: everyone deserves access to 
                  high-quality, affordable medicines. This belief continues to drive 
                  our research, development, and manufacturing processes today.
                </p>
                <p>
                  With 6 proprietary medicines in our portfolio and more in development, 
                  we're committed to addressing unmet medical needs and improving health 
                  outcomes for millions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Target, title: "Precision", desc: "Research-driven formulations" },
                { icon: Eye, title: "Vision", desc: "Healthier future for all" },
                { icon: Shield, title: "Trust", desc: "GMP certified facilities" },
                { icon: FlaskConical, title: "Science", desc: "Evidence-based solutions" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-card rounded-2xl border border-border"
                >
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 md:p-12 rounded-3xl shadow-lg"
            >
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To develop and deliver innovative pharmaceutical solutions that address 
                critical healthcare needs, improve patient outcomes, and make quality 
                healthcare accessible to all. We are committed to conducting ethical 
                research, maintaining the highest manufacturing standards, and building 
                lasting relationships with healthcare providers and patients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card p-8 md:p-12 rounded-3xl shadow-lg"
            >
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be India's most trusted pharmaceutical company, recognized globally 
                for our commitment to innovation, quality, and patient-centric healthcare 
                solutions. We envision a world where every individual has access to 
                life-changing medicines, and we strive to make this vision a reality 
                through continuous research and development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-colors"
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <h3 className="font-semibold text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quality & Compliance
            </h2>
            <p className="max-w-3xl mx-auto text-primary-foreground/80 text-lg leading-relaxed mb-8">
              All our products are manufactured in WHO-GMP certified facilities, 
              adhering to the strictest international quality standards. We are 
              licensed by CDSCO and comply with all regulatory requirements of 
              the Drugs and Cosmetics Act.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {["WHO-GMP Certified", "CDSCO Licensed", "ISO 9001:2015", "Quality Tested"].map(
                (badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-6 py-3 bg-primary-foreground/10 rounded-full font-medium"
                  >
                    {badge}
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

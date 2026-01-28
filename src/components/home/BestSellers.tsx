import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { getBestSellers } from "@/data/products";

const BestSellers = () => {
  const bestSellers = getBestSellers();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Customer Favorites
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Best Sellers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our most popular products trusted by thousands of customers for their 
            effectiveness and quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bestSellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingCTA = () => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
    >
      <Link to="/products">
        <motion.button
          className="gradient-primary text-primary-foreground px-5 py-3.5 rounded-full shadow-xl flex items-center gap-2 font-medium"
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(13, 148, 136, 0.3)" }}
          whileTap={{ scale: 0.95 }}
        >
          <ShoppingBag className="w-5 h-5" />
          <span>Explore Products</span>
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default FloatingCTA;

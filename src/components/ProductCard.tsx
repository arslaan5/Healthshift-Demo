import { motion } from "framer-motion";
import { ShoppingCart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <motion.div
        className="bg-card rounded-2xl overflow-hidden shadow-product transition-all duration-300"
        whileHover={{ 
          y: -8,
          boxShadow: "0 20px 40px rgba(13, 148, 136, 0.15)"
        }}
      >
        {/* Image */}
        <div className="relative overflow-hidden bg-secondary/30">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full aspect-square object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Badges */}
          {product.isBestSeller && (
            <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
              Best Seller
            </span>
          )}
          
          {product.originalPrice && (
            <span className="absolute top-3 right-3 bg-destructive text-destructive-foreground text-xs font-medium px-3 py-1 rounded-full">
              {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
            </span>
          )}

          {/* Hover Actions */}
          <motion.div
            className="absolute inset-0 bg-foreground/10 backdrop-blur-sm flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity"
            initial={{ opacity: 0 }}
          >
            <Link to={`/product/${product.id}`}>
              <motion.button
                className="w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye className="w-5 h-5 text-foreground" />
              </motion.button>
            </Link>
            <motion.button
              className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart className="w-5 h-5 text-primary-foreground" />
            </motion.button>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5">
          <span className="text-xs text-primary font-medium uppercase tracking-wide">
            {product.category}
          </span>
          <h3 className="font-semibold text-lg mt-1 mb-2 text-card-foreground">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {product.shortDescription}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-foreground">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 mt-4">
            <Link to={`/product/${product.id}`} className="flex-1">
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </Link>
            <Button className="gradient-primary text-primary-foreground flex-1">
              Add to Cart
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;

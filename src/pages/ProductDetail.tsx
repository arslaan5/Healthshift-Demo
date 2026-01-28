import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Heart, ArrowLeft, Check, Shield, Truck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/ProductCard";
import { getProductById, products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/products">
            <Button>View All Products</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </motion.div>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-secondary/30">
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </div>
            {product.isBestSeller && (
              <span className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-medium">
                Best Seller
              </span>
            )}
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              {product.name}
            </h1>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-foreground">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-muted-foreground line-through">
                    ₹{product.originalPrice}
                  </span>
                  <span className="text-sm text-accent font-medium px-2 py-1 bg-green-50 rounded">
                    Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </span>
                </>
              )}
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center border rounded-lg">
                <button
                  className="px-4 py-3 hover:bg-secondary transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="px-6 py-3 font-medium">{quantity}</span>
                <button
                  className="px-4 py-3 hover:bg-secondary transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>

              <motion.div className="flex-1 min-w-[200px]" whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className={`w-full h-14 text-base gap-2 transition-all duration-300 ${
                    isAdded
                      ? "bg-accent text-accent-foreground"
                      : "gradient-primary text-primary-foreground"
                  }`}
                  onClick={handleAddToCart}
                >
                  <AnimatePresence mode="wait">
                    {isAdded ? (
                      <motion.span
                        key="added"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="flex items-center gap-2"
                      >
                        <Check className="w-5 h-5" />
                        Added to Cart!
                      </motion.span>
                    ) : (
                      <motion.span
                        key="add"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="flex items-center gap-2"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Add to Cart
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>

              <Button size="lg" variant="outline" className="h-14">
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 p-4 bg-secondary/50 rounded-xl">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-5 h-5 text-primary" />
                <span>Quality Assured</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Truck className="w-5 h-5 text-primary" />
                <span>Free Shipping on ₹999+</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Tabs defaultValue="composition" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
              {["Composition", "Benefits", "Dosage & Safety"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab.toLowerCase().replace(" & ", "-")}
                  className="px-6 py-4 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="mt-8">
              <TabsContent value="composition" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid gap-3"
                >
                  <h3 className="font-semibold text-xl mb-4">Active Ingredients</h3>
                  {product.composition.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="benefits" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid gap-3"
                >
                  <h3 className="font-semibold text-xl mb-4">Key Benefits</h3>
                  {product.benefits.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                    >
                      <Check className="w-5 h-5 text-accent" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="dosage-safety" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="mb-8">
                    <h3 className="font-semibold text-xl mb-4">Dosage Instructions</h3>
                    <p className="text-muted-foreground bg-secondary/30 p-4 rounded-lg">
                      {product.dosage}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-4">Safety Information</h3>
                    <div className="grid gap-3">
                      {product.safety.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg"
                        >
                          <Shield className="w-5 h-5 text-primary" />
                          <span>{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>

        {/* Related Products */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Related Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </motion.section>
      </div>
    </Layout>
  );
};

export default ProductDetail;

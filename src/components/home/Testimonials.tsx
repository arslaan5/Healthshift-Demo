import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Dr. Rajesh Sharma",
    role: "Cardiologist, AIIMS Delhi",
    content: "I've been recommending CardioMax Plus to my patients for over a year now. The results have been consistently positive, with noticeable improvements in cardiovascular health markers.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Health-conscious Consumer",
    content: "ImmunoShield Forte has been a game-changer for my family. We've noticed fewer sick days and overall better immunity, especially during seasonal changes.",
    rating: 5,
  },
  {
    id: 3,
    name: "Dr. Anita Verma",
    role: "Dermatologist, Mumbai",
    content: "DermaClear Gel provides excellent results for my patients with acne-prone skin. The formulation is gentle yet effective, making it suitable for long-term use.",
    rating: 5,
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Fitness Trainer",
    content: "NeuroZen Calm helps me manage stress from my demanding schedule. It works naturally without making me drowsy during the day. Highly recommend!",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            What Our Customers Say
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden">
            <Quote className="absolute top-8 right-8 w-24 h-24 text-primary/10" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-lg md:text-xl text-card-foreground mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div>
                  <h4 className="font-semibold text-lg text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-primary/30"
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import medicine1 from "@/assets/products/medicine-1.jpg";
import medicine2 from "@/assets/products/medicine-2.jpg";
import medicine3 from "@/assets/products/medicine-3.jpg";
import medicine4 from "@/assets/products/medicine-4.jpg";
import medicine5 from "@/assets/products/medicine-5.jpg";
import medicine6 from "@/assets/products/medicine-6.jpg";

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  composition: string[];
  benefits: string[];
  dosage: string;
  safety: string[];
}

export const products: Product[] = [
  {
    id: "cardiomax-plus",
    name: "CardioMax Plus",
    shortDescription: "Advanced cardiovascular health support",
    description: "CardioMax Plus is a scientifically formulated supplement designed to support optimal cardiovascular function. Contains essential vitamins, minerals, and plant extracts clinically proven to maintain healthy heart function.",
    price: 599,
    originalPrice: 749,
    image: medicine1,
    category: "Cardiovascular",
    isBestSeller: true,
    isFeatured: true,
    composition: [
      "Omega-3 Fatty Acids 500mg",
      "Coenzyme Q10 100mg",
      "Vitamin E 400 IU",
      "Magnesium 200mg",
      "Hawthorn Berry Extract 150mg"
    ],
    benefits: [
      "Supports healthy blood pressure levels",
      "Promotes optimal cholesterol balance",
      "Enhances cardiovascular endurance",
      "Provides antioxidant protection",
      "Supports healthy circulation"
    ],
    dosage: "Take 2 capsules daily with meals. For best results, use consistently for at least 3 months.",
    safety: [
      "Consult your physician before use if pregnant or nursing",
      "Not recommended for children under 18",
      "Store in a cool, dry place away from direct sunlight",
      "Keep out of reach of children"
    ]
  },
  {
    id: "immunoshield-forte",
    name: "ImmunoShield Forte",
    shortDescription: "Complete immune system booster",
    description: "ImmunoShield Forte provides comprehensive immune support with a powerful blend of vitamins, minerals, and natural extracts to help your body defend against everyday challenges.",
    price: 449,
    image: medicine2,
    category: "Immunity",
    isFeatured: true,
    composition: [
      "Vitamin C 1000mg",
      "Zinc 25mg",
      "Elderberry Extract 500mg",
      "Echinacea 400mg",
      "Vitamin D3 2000 IU"
    ],
    benefits: [
      "Strengthens immune response",
      "Reduces duration of common ailments",
      "Provides powerful antioxidant support",
      "Supports respiratory health",
      "Enhances natural defense mechanisms"
    ],
    dosage: "Take 1 capsule twice daily with food. During seasonal challenges, increase to 2 capsules twice daily.",
    safety: [
      "Safe for adults 18 years and older",
      "Consult healthcare provider if on medication",
      "Discontinue if allergic reaction occurs",
      "Store at room temperature"
    ]
  },
  {
    id: "neurozen-calm",
    name: "NeuroZen Calm",
    shortDescription: "Natural stress & anxiety relief",
    description: "NeuroZen Calm is a gentle yet effective formula designed to promote relaxation, reduce stress, and support mental clarity without causing drowsiness.",
    price: 699,
    originalPrice: 849,
    image: medicine3,
    category: "Mental Wellness",
    isBestSeller: true,
    isFeatured: true,
    composition: [
      "Ashwagandha Extract 600mg",
      "L-Theanine 200mg",
      "GABA 100mg",
      "Chamomile Extract 150mg",
      "Vitamin B Complex"
    ],
    benefits: [
      "Reduces stress and anxiety naturally",
      "Promotes restful sleep",
      "Enhances focus and concentration",
      "Supports emotional balance",
      "Non-habit forming formula"
    ],
    dosage: "Take 1-2 capsules in the evening or as needed during stressful situations. Do not exceed 4 capsules daily.",
    safety: [
      "May cause drowsiness in some individuals",
      "Do not operate heavy machinery after consumption",
      "Not for use with sedative medications",
      "Consult doctor if symptoms persist"
    ]
  },
  {
    id: "gastroease-pro",
    name: "GastroEase Pro",
    shortDescription: "Advanced digestive health formula",
    description: "GastroEase Pro combines probiotics, digestive enzymes, and soothing herbs to support optimal digestive function and gut health.",
    price: 549,
    image: medicine4,
    category: "Digestive Health",
    isFeatured: true,
    composition: [
      "Probiotic Blend 10 Billion CFU",
      "Digestive Enzyme Complex 500mg",
      "Ginger Root Extract 300mg",
      "Peppermint Oil 50mg",
      "Prebiotic Fiber 200mg"
    ],
    benefits: [
      "Relieves bloating and discomfort",
      "Supports healthy digestion",
      "Restores gut microbiome balance",
      "Reduces occasional heartburn",
      "Improves nutrient absorption"
    ],
    dosage: "Take 1 capsule before meals, up to 3 times daily. Best results seen with consistent daily use.",
    safety: [
      "Start with lower dose to assess tolerance",
      "Refrigerate after opening for optimal potency",
      "Safe for long-term use",
      "Consult doctor if pregnant or nursing"
    ]
  },
  {
    id: "dermaclear-gel",
    name: "DermaClear Gel",
    shortDescription: "Professional-grade skin therapy",
    description: "DermaClear Gel is a clinically tested topical treatment that helps clear skin imperfections while nourishing and protecting the skin barrier.",
    price: 399,
    image: medicine5,
    category: "Dermatology",
    isBestSeller: true,
    composition: [
      "Salicylic Acid 2%",
      "Niacinamide 4%",
      "Hyaluronic Acid 1%",
      "Tea Tree Oil 0.5%",
      "Aloe Vera Extract 10%"
    ],
    benefits: [
      "Clears acne and blemishes",
      "Reduces pore size",
      "Hydrates without greasiness",
      "Soothes inflammation",
      "Prevents future breakouts"
    ],
    dosage: "Apply a thin layer to clean, dry skin twice daily. Use sunscreen during daytime application.",
    safety: [
      "For external use only",
      "Avoid contact with eyes",
      "Discontinue if irritation occurs",
      "Patch test before first use"
    ]
  },
  {
    id: "vitaboost-injection",
    name: "VitaBoost B12",
    shortDescription: "High-potency vitamin B12 injection",
    description: "VitaBoost B12 is a pharmaceutical-grade vitamin B12 injection designed to rapidly restore energy levels and support neurological function.",
    price: 899,
    originalPrice: 1099,
    image: medicine6,
    category: "Injectables",
    composition: [
      "Methylcobalamin 1000mcg",
      "Hydroxocobalamin 500mcg",
      "Folic Acid 400mcg",
      "Sterile Saline Solution"
    ],
    benefits: [
      "Rapidly restores B12 levels",
      "Boosts energy and reduces fatigue",
      "Supports nerve function",
      "Enhances mental clarity",
      "Faster absorption than oral supplements"
    ],
    dosage: "Administered by healthcare professional. Typical dosage: 1ml intramuscular injection weekly for 4 weeks, then monthly maintenance.",
    safety: [
      "Prescription required",
      "Must be administered by licensed healthcare provider",
      "Report any allergic reactions immediately",
      "Store refrigerated between 2-8°C"
    ]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getBestSellers = (): Product[] => {
  return products.filter(product => product.isBestSeller);
};

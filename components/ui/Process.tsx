import { useEffect, useRef, useState } from "react";
import { Check, Package } from "lucide-react";
// import { journeySteps } from "./journeySteps"; // keep your existing import



const journeySteps = [
  {
    title: "Cargo Coordination",
    text: "We understand your cargo requirements and coordinate consolidation or sea freight at origin.",
    icon: Package,
    image: serviceItems[0].image,
    alt: serviceItems[0].alt,
  },
  {
    title: "Sea Freight",
    text: "Your cargo is prepared and arranged for efficient, dependable sea transportation.",
    icon: Ship,
    image: serviceItems[1].image,
    alt: serviceItems[1].alt,
  },
  {
    title: "JAFZA Warehousing",
    text: "Upon arrival, cargo can be securely stored at our Jebel Ali Free Zone facility.",
    icon: Warehouse,
    image: serviceItems[2].image,
    alt: serviceItems[2].alt,
  },
  {
    title: "Final-Mile Delivery",
    text: "We coordinate delivery from JAFZA to its final destination within Dubai.",
    icon: Truck,
    image: serviceItems[3].image,
    alt: serviceItems[3].alt,
  },
];



// components/header/HeaderAnimations.ts
import { Variants } from "framer-motion";

export const headerVariants: Variants = {
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  hidden: {
    y: -100,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export const mobileMenuVariants: Variants = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  closed: {
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};
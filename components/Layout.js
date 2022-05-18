import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const variants = {
  hidden: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: { opacity: 0 },
};

export default function Layout({ children }) {
  return (
    <motion.div
      // variants={variants}
      // initial="hidden"
      // animate="enter"
      // exit="exit"
      style={{ maxWidth: "1500px", margin: "auto", minHeight: "110vh" }}
    >
      <Navbar />
      <Box p={{ base: "1rem", md: "1rem 5rem" }} overflow="hidden">
        {children}
      </Box>
    </motion.div>
  );
}

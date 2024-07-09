import { topToBottomContainerVariants } from "../../utils/topToBottomAnimation";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={topToBottomContainerVariants}
      >
        <div>Footer</div>
      </motion.div>
    </footer>
  );
};

export default Footer;

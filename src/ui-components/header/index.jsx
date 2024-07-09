import {
  GithubIcon,
  InstaIcon,
  LinkedinIcon,
} from "../../ui-components/svg-components/commonIcons";
import { topToBottomContainerVariants } from "../../utils/topToBottomAnimation";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={topToBottomContainerVariants}
        className={styles.headerContent}
      >
        <h2 className={styles.logo}>Jay shah</h2>
        <div className={styles.headerIcons}>
          <InstaIcon />
          <GithubIcon />
          <LinkedinIcon />
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;

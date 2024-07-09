import {
  RoundShapeEmailIcon,
  RoundShapeGithubIcon,
  RoundShapeInstaIcon,
  RoundShapeLinkedinIcon,
} from "../../ui-components/svg-components/commonIcons";
import { ProgrammingSvg } from "../../ui-components/svg-components/programming";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import { topToBottomContainerVariants } from "../../utils/topToBottomAnimation";

const Summary = () => {
  return (
    <section className={styles.contentSummary}>
      <motion.div
        // initial={{ x: -1000, opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
        // transition={{ duration: 1 }}
        initial="hidden"
        animate="visible"
        variants={topToBottomContainerVariants}
        className={styles.summarySection}
      >
        <div className={styles.summaryDetails}>
          <h3 className={styles.subTitle}>Hi all, I'm Jay</h3>
          <p className={styles.aboutMe}>
            Welcome to my portfolio! I specialize in crafting captivating user
            interfaces and seamless interactions that breathe life into digital
            experiences. With a keen eye for design and a passion for clean,
            efficient code, I bring ideas to life that not only look stunning
            but also function flawlessly across devices. Let's collaborate to
            create intuitive, responsive, and pixel-perfect frontend solutions
            that leave a lasting impression.
          </p>
          <div>
            <div className={styles.iconsWrapper}>
              <RoundShapeEmailIcon />
              <RoundShapeLinkedinIcon />
              <RoundShapeGithubIcon />
              <RoundShapeInstaIcon />
            </div>
            {/* <a
                href="https://chatgpt.com"
                target="_blank"
                className={styles.btn}
                rel="noreferrer"
              >
                See My Resume
              </a> */}
          </div>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={topToBottomContainerVariants}
        className={styles.svgIcons}
      >
        <ProgrammingSvg />
      </motion.div>
    </section>
  );
};

export default Summary;

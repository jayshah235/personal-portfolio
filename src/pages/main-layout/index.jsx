import { motion, useScroll, useSpring } from "framer-motion";
import { Suspense } from "react";
import { LazyHeader, LazySummary } from "./lazyLoad";
import styles from "./styles.module.scss";
// import Footer from "../../ui-components/footer";

const MainLayout = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <main className={styles.mainContainer}>
      <motion.div className={styles.progressBar} style={{ scaleX }} />
      <section className={styles.contentWrapper}>
        <span className={styles.roundShape1} />
        <span className={styles.roundShape2} />
        <span className={styles.roundShape3} />
        <span className={styles.roundShape4} />
        <span className={styles.roundShape5} />
        <span className={styles.roundShape6} />
        <Suspense fallback="Header loading...">
          <LazyHeader />
        </Suspense>
        <Suspense fallback="summary loading...">
          <LazySummary />
        </Suspense>
      </section>
      {/* <Footer /> */}
    </main>
  );
};

export default MainLayout;

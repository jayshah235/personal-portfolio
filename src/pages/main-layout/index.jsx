import Header from "../../components/header";
import Summary from "../../components/summary";
import styles from "./styles.module.scss";

const MainLayout = () => {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.contentWrapper}>
        <span className={styles.roundShape1} />
        <span className={styles.roundShape2} />
        <span className={styles.roundShape3} />
        <span className={styles.roundShape4} />
        <span className={styles.roundShape5} />
        <span className={styles.roundShape6} />
        <Header />
        <Summary />
      </section>
    </main>
  );
};

export default MainLayout;

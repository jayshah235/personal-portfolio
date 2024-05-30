import {
  GithubIcon,
  InstaIcon,
  LinkedinIcon,
} from "../../ui-components/svg-components/commonIcons";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.headerContent}>
        <h2 className={styles.logo}>Jay shah</h2>
        <div className={styles.headerIcons}>
          <InstaIcon />
          <GithubIcon />
          <LinkedinIcon />
        </div>
      </nav>
    </header>
  );
};

export default Header;

import {
  RoundShapeEmailIcon,
  RoundShapeGithubIcon,
  RoundShapeInstaIcon,
  RoundShapeLinkedinIcon,
} from "../../ui-components/svg-components/commonIcons";
import { ProgrammingSvg } from "../../ui-components/svg-components/programming";
import styles from "./styles.module.scss";

const Summary = () => {
  return (
    <section className={styles.contentSummary}>
      <div className={styles.summarySection}>
        <h3 className={styles.subTitle}>Hi all, I'm Jay</h3>
        <p className={styles.aboutMe}>
          I'm a passionate Full Stack web developer with experience developing
          Full Stack web applications with Python, Django, React.js, and Cloud
          Technologies. I am strongly interested in learning new technologies
          and implementing them in my projects. I'm a self-motivated and
          hardworking individual who is always ready to learn new things and
          work in a team.
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
      <div className={styles.svgIcons}>
        <ProgrammingSvg />
      </div>
    </section>
  );
};

export default Summary;

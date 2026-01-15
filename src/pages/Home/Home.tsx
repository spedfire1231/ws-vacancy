
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Welcome to White Sky</h1>
      <div className={styles.heroSection}>
        <h2>Join Our Team as a Chat Operator</h2>
        <p className={styles.subtitle}>
          Work with a trusted company that has been in the dating industry for 11 years
        </p>
      </div>
      
      <div className={styles.features}>
        <div className={styles.feature}>
          <h3>🏢 Established Company</h3>
          <p>11 years of experience in the dating industry</p>
        </div>
        <div className={styles.feature}>
          <h3>💼 Stable Work</h3>
          <p>Always hiring chat operators for remote positions</p>
        </div>
        <div className={styles.feature}>
          <h3>🌍 International Team</h3>
          <p>Work with colleagues from around the world</p>
        </div>
      </div>

      <div className={styles.ctaSection}>
        <h2>Ready to Start?</h2>
        <p>Learn more about this exciting opportunity</p>
        <Link to="/video-info" className={styles.ctaButton}>
          View Job Details
        </Link>
      </div>
    </div>
  );
};

export default Home;

import styles from './Employment.module.css';

const Employment = () => {
  return (
    <div className={styles.employment}>
      <h1>Employment Process</h1>
      <p className={styles.subtitle}>
        Ready to join our team? Here's what you need to provide:
      </p>

      <div className={styles.processSteps}>
        <div className={styles.step}>
          <div className={styles.stepNumber}>1</div>
          <div className={styles.stepContent}>
            <h2>Initial Application</h2>
            <p>Send us your basic information and availability</p>
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.stepNumber}>2</div>
          <div className={styles.stepContent}>
            <h2>Skills Assessment</h2>
            <p>Complete a brief typing and communication test</p>
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.stepNumber}>3</div>
          <div className={styles.stepContent}>
            <h2>Interview</h2>
            <p>Short conversation to discuss the role and your experience</p>
          </div>
        </div>
      </div>

      <div className={styles.requiredDocuments}>
        <h2>Required Documents & Information:</h2>
        <div className={styles.documentsGrid}>
          <div className={styles.documentCategory}>
            <h3>📄 Personal Information</h3>
            <ul>
              <li>Full legal name</li>
              <li>Date of birth</li>
              <li>Contact phone number</li>
              <li>Telegram username</li>
              <li>City</li>
              <li>Which shift you choose to work</li>
              <li>Date when you ready to start working</li>
            </ul>
          </div>

          <div className={styles.documentCategory}>
            <h3>🆔 Identification</h3>
            <ul>
              <li>Government-issued ID</li>
              <li>Passport (if available)</li>
              <li>Tax identification number</li>
            </ul>
          </div>



          <div className={styles.documentCategory}>
            <h3>🏠 Technical Requirements</h3>
            <ul>
              <li>Internet speed test results</li>
              <li>Computer specifications</li>
              <li>Headset/microphone quality</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.contactInfo}>
        <h2>How to Apply:</h2>
        <div className={styles.contactMethods}>
          <div className={styles.contactMethod}>
            <h3>📧 Telegram</h3>
            <p>Send form and document to: <strong>HRM who made conversation with you</strong></p>
          </div>
        </div>
      </div>

      <div className={styles.timeline}>
        <h2>Processing Timeline:</h2>
        <div className={styles.timelineInfo}>
          <p><strong>Application Review:</strong> 5-10 minutes</p>
          <p><strong>Skills Assessment:</strong> 20 minutes</p>
          <p><strong>Interview Scheduling:</strong> In telegram</p>
          <p><strong>Final Decision:</strong> After finish of interview</p>
        </div>
      </div>
    </div>
  );
};

export default Employment;
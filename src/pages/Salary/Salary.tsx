
import styles from './Salary.module.css';

const Salary = () => {
  return (
    <div className={styles.salary}>
      <h1>Compensation & Payment Information</h1>
      
      <div className={styles.salaryGrid}>
        <div className={styles.salaryCard}>
          <h2>💰 Competitive Pay</h2>
          <div className={styles.payStructure}>
            <h3>Payment Structure:</h3>
            <ul>
              <li>Pay per message or actions</li>
              <li>Bonus for quality metrics</li>
              <li>Performance incentives</li>
              <li>Holiday pay multipliers</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.salaryCard}>
          <h2>📅 Payment Schedule</h2>
          <div className={styles.paymentSchedule}>
            <h3>Regular Payments:</h3>
            <ul>
              <li>Payments every month from 8 to 15</li>
              <li>Monthly bonus calculations</li>
              <li>Transparent earning reports in CRM system</li>
              <li>Multiple payment methods available</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.salaryCard}>
          <h2>📈 Earning Potential</h2>
          <div className={styles.earningPotential}>
            <h3>Your earnings depend on:</h3>
            <ul>
              <li>Number of conversations handled</li>
              <li>Quality of interactions</li>
              <li>Peak hour availability</li>
              <li>Language skills and specializations</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.salaryCard}>
          <h2>💳 Payment Methods</h2>
          <div className={styles.paymentMethods}>
            <h3>Available options:</h3>
            <ul>
              <li>Bank transfer</li>
              <li>PayPal</li>
              <li>Payoneer</li>
              <li>Other international payment systems</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className={styles.disclaimer}>
        <p>
          <strong>Important:</strong> Exact payment rates and methods will be discussed 
          during the interview process and may vary based on location, experience, 
          and performance metrics.
        </p>
      </div>
    </div>
  );
};

export default Salary;
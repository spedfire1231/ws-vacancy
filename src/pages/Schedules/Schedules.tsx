
import { convertKievTimeToCountries } from '../../utils/timeConversions';
import styles from './Schedules.module.css';

const Schedules = () => {
  const schedules = convertKievTimeToCountries();

  return (
    <div className={styles.schedules}>
      <h1>Work Schedules by Country</h1>
      <p className={styles.intro}>
        We operate 24/7 with two main shifts. Find your local time equivalents below:
      </p>

      <div className={styles.schedulesGrid}>
        {schedules.map((schedule) => (
          <div key={schedule.country} className={styles.scheduleCard}>
            <h2>{schedule.country}</h2>
            <div className={styles.timezone}>
              <span>Timezone: {schedule.timezone}</span>
            </div>
            
            <div className={styles.shiftInfo}>
              <div className={styles.dayShift}>
                <h3>🌅 Day Shift</h3>
                <p className={styles.time}>{schedule.dayShift}</p>
              </div>
              
              <div className={styles.nightShift}>
                <h3>🌙 Night Shift</h3>
                <p className={styles.time}>{schedule.nightShift}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.notes}>
        <h3>Important Notes:</h3>
        <ul>
          <li>All times are shown in local time for each country</li>
          <li>Shifts are flexible and can be adjusted based on business needs</li>
        </ul>
      </div>
    </div>
  );
};

export default Schedules;
import React from 'react';
import styles from './TextInfo.module.css';

const TextInfo = () => {
  return (
    <div className={styles.textInfo}>
      <h1>Detailed Job Information</h1>
      
      <div className={styles.infoSection}>
        <h2>Position: Chat Operator</h2>
        <div className={styles.contentArea}>
          <p>
            {/* СЮДА МОЖНО ВСТАВЛЯТЬ ЛЮБОЙ ТЕКСТ О ВАКАНСИИ */}
            The responsibilities of an account manager include communicating with users on the platform in order to maintain engagement and retain traffic.

This means you will be chatting with users on various topics on behalf of our company's client, not on your own behalf. The conversations are mostly about everyday topics such as sports, politics, movies, TV series, and so on.

The main task is to engage in conversations, and you will be paid for doing so.

          </p>
          
          <h3>Key Responsibilities:</h3>
          <ul>
            <li>Engage in text-based conversations with users</li>
            <li>Maintain professional communication standards</li>
            <li>Follow company guidelines and protocols</li>
            <li>Provide quality customer service</li>
            <li>Meet daily conversation targets</li>
          </ul>

          <h3>Requirements:</h3>
          <ul>
            <li>Excellent written communication skills</li>
            <li>Reliable internet connection</li>
            <li>Quiet working environment</li>
            <li>Previous chat experience preferred but not required</li>
          </ul>

          <h3>What We Offer:</h3>
          <ul>
            <li>Comprehensive training program</li>
            <li>You can choose shift which you want to work</li>
            <li>Competitive compensation</li>
            <li>Supportive team environment</li>
            <li>Career growth opportunities</li>
          </ul>
        </div>
      </div>
      
      <div className={styles.note}>
        <p>
          <strong>Note:</strong> This section is fully customizable. 
          You can replace this content with your own job description, requirements, 
          and company information.
        </p>
      </div>
    </div>
  );
};

export default TextInfo;
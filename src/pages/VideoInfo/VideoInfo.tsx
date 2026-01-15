
import styles from './VideoInfo.module.css';

const VideoInfo = () => {
  return (
    <div className={styles.videoInfo}>
      <h1>Chat Operator Position</h1>
      <p className={styles.intro}>
        Watch this video to learn more about the chat operator role at White Sky
      </p>
      
      <div className={styles.videoContainer}>
        {/* Вариант 1: Встроенное видео с YouTube */}
        <iframe 
          width="100%" 
          height="400" 
          src="https://www.youtube.com/embed/n14O7ACeJhI" 
          title="Chat Operator Job Description"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        />
        
        {/* Вариант 2: Локальный видеофайл (раскомментировать при необходимости) */}
        {/*
        <video controls width="100%" height="400">
          <source src="/path-to-your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        */}
      </div>
      
      <div className={styles.videoDescription}>
        <h2>What You'll Learn:</h2>
        <ul>
          <li>Job responsibilities and daily tasks</li>
          <li>Work environment and tools used</li>
          <li>Communication guidelines</li>
          <li>Quality standards and expectations</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoInfo;
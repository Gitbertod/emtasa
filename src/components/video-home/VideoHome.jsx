import bgvideo2 from "../../assets/homeVideo.mp4";
import styles from "./VideoHome.module.css";

const VideoHome = () => {
  return (
    <div className={styles.main}>
      <div className={styles.overlay}></div>
      <video
        src={bgvideo2}
        autoPlay
        loop
        muted
        playsInline 
        className={styles.video}
      ></video>
    </div>
  );
};

export default VideoHome;

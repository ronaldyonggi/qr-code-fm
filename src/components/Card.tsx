import styles from './Card.module.css';
import qrCodeImage from '../assets/images/image-qr-code.png';

export default function Card() {
  return (
    <div className={styles.card}>
      <img className={styles.qrCode} src={qrCodeImage} alt='QR code' />
      <h1 className={styles.title}>Improve your front-end skills by building projects </h1>
      <p className={styles.description}>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

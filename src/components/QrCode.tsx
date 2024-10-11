import imageQR from "@/assets/imageQR.png";
import Image from "next/image";
import styles from "./QrCode.module.css";

export default function QrCode() {
  return (
    /* CONTAINER BOX */
    <div className={`bg-white rounded ${styles.containerBox}`}>
      {/* QR IMAGE */}
      <div className={`${styles.containerImageQR}`}>
        <Image
          src={imageQR}
          alt="image-qr"
          className={`${styles.imageQR}`}
          layout="responsive"
        ></Image>
      </div>

      {/* MAYBE I SHOULD CHANGE THIS PART TO ANOTHER COMPONENT */}
      {/* TITLE */}
      <div className={`${styles.titleText}`}>
        <p>Improve your front-end skills by building projects</p>
      </div>

      {/* DESCRIPTION */}
      <div className={`${styles.descriptionText}`}>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

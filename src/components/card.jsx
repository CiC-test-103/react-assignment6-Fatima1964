// Import necessary hooks and assets
import { useState, useEffect } from "react";
import styles from "./card.module.css";

// Import image assets
import shareIcon from "../images/icon-share.svg";
import facebookIcon from "../images/icon-facebook.svg";
import twitterIcon from "../images/icon-twitter.svg";
import pinterestIcon from "../images/icon-pinterest.svg";

const Card = () => {
  // State to handle the visibility of the share popup
  const [isSharing, setIsSharing] = useState(false);

  useEffect(() => {
    // Hide the footer attribution if it exists
    const attributionElement = document.querySelector('.attribution');
    if (attributionElement) {
      attributionElement.style.display = 'none';
    }
  }, []);

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>

        {/* Image Container (background image handled via CSS) */}
        <div className={styles.imageContainer}></div>

        {/* Content Section */}
        <div className={styles.content}>

          {/* Title */}
          <h2>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h2>

          {/* Description */}
          <p>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>

          {/* Footer Section: Author info + Share functionality */}
          <div className={styles.footer}>

            {/* Profile Info */}
            <div className={styles.profile}>
              <img
                src="./images/avatar-michelle.jpg"
                alt="Michelle Appleton"
              />
              <div>
                <h3>Michelle Appleton</h3>
                <span className={styles.date}>28 Jun 2020</span>
              </div>
            </div>

            {/* Share Button and Popup */}
            <div className={styles.shareContainer}>
              {/* Share Icon Button */}
              <button
                className={styles.shareButton}
                onClick={() => setIsSharing(!isSharing)}
              >
                <img src={shareIcon} alt="Share" />
              </button>

              {/* Share Options Popup (conditionally rendered) */}
              {isSharing && (
                <div className={styles.sharePopup}>
                  <span className={styles.share}>SHARE</span>
                  <img src={facebookIcon} alt="Facebook" />
                  <img src={twitterIcon} alt="Twitter" />
                  <img src={pinterestIcon} alt="Pinterest" />
                  <div className={styles.shareArrow}></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;



import styles from './ArticleCard.module.css';

// Image assets
import avatar from '/images/avatar-michelle.jpg';
import shareIcon from '/images/icon-share.svg';
import facebookIcon from '/images/icon-facebook.svg';
import twitterIcon from '/images/icon-twitter.svg';
import pinterestIcon from '/images/icon-pinterest.svg';
import articleImage from '/images/drawers.jpg';

import { useState } from 'react';

const ArticleCard = () => {
  // Toggle share popup visibility
  const [isSharing, setIsSharing] = useState(false);

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>

        {/* Left image section */}
        <img
          src={articleImage}
          alt="Article cover"
          className={styles.image}
        />

        {/* Right content section */}
        <div className={styles.content}>
          <h2>
            Shift the overall look and feel by adding these wonderful touches to furniture in your home
          </h2>
          <p>
            Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting.
            I’ve got some simple tips to help you make any room feel complete.
          </p>

          {/* Footer with profile and share button */}
          <div className={styles.footer}>
            {/* Author info */}
            <div className={styles.profile}>
              <img
                src={avatar}
                alt="Michelle Appleton"
                className={styles.avatar}
              />
              <div>
                <h3>Michelle Appleton</h3>
                <p>28 Jun 2020</p>
              </div>
            </div>

            {/* Share button with dynamic active state */}
            <button
              className={`${styles.shareButton} ${isSharing ? styles.active : ''}`}
              onClick={() => setIsSharing(!isSharing)}
              aria-label="Toggle share options"
            >
              <img src={shareIcon} alt="Share" />
            </button>

            {/* Conditional popup with social links */}
            {isSharing && (
              <div className={styles.sharePopup}>
                <span>SHARE</span>
                <a href="#" aria-label="Share on Facebook">
                  <img src={facebookIcon} alt="Facebook" />
                </a>
                <a href="#" aria-label="Share on Twitter">
                  <img src={twitterIcon} alt="Twitter" />
                </a>
                <a href="#" aria-label="Share on Pinterest">
                  <img src={pinterestIcon} alt="Pinterest" />
                </a>
                <div className={styles.shareArrow}></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;

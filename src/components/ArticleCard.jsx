// Importing CSS module for styling
import styles from './ArticleCard.module.css';

// Importing image assets
import avatar from '/images/avatar-michelle.jpg';
import shareIcon from '/images/icon-share.svg';
import facebookIcon from '/images/icon-facebook.svg';
import twitterIcon from '/images/icon-twitter.svg';
import pinterestIcon from '/images/icon-pinterest.svg';
import articleImage from '/images/drawers.jpg';

// Importing useState hook from React
import { useState } from 'react';

const ArticleCard = () => {
  // useState hook to toggle the visibility of the share popup
  const [isSharing, setIsSharing] = useState(false);

  return (
    <div className={styles.card}>
      {/* Article cover image */}
      <img
        src={articleImage}
        alt="Article Cover"
        className={styles.image}
      />

      <div className={styles.content}>
        {/* Article title */}
        <h2>
          Shift the overall look and feel by adding these wonderful touches to furniture in your home
        </h2>

        {/* Article description */}
        <p>
          Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting.
          I’ve got some simple tips to help you make any room feel complete.
        </p>

        {/* Footer section containing profile info and share button */}
        <div className={styles.footer}>
          {/* Profile info */}
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

          {/* Share button */}
          <button
            className={styles.shareButton}
            onClick={() => setIsSharing(!isSharing)}
          >
            <img src={shareIcon} alt="Share" />
          </button>

          {/* Conditional rendering of share popup */}
          {isSharing && (
            <div className={styles.sharePopup}>
              <span>SHARE</span>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={pinterestIcon} alt="Pinterest" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;

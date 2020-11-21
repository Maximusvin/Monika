import React from 'react';
import '../../../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import styles from './Post.module.css';

const Post = ({ message, like, dislike }) => {
  return (
    <div className={styles.item}>
      <div className={styles.header}>
        <img
          src="https://www.meme-arsenal.com/memes/67afc54a5b0d68871e99c130d0146fe7.jpg"
          alt="ava"
        />
        <span>{message}</span>
      </div>
      <div className={styles.likes}>
        <i className="far fa-thumbs-up">{like}</i>
        <i className="far fa-thumbs-down">{dislike}</i>
      </div>
    </div>
  );
};

export default Post;

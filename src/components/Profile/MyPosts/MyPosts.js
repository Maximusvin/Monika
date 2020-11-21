import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = ({ posts }) => {
  return (
    <div>
      <h3 className={styles.title}>MyPosts</h3>
      <div className={styles.formWrap}>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        <h3 className={styles.title}>New post</h3>
        {posts.map(post => (
          <Post
            message={post.message}
            like={post.like}
            dislike={post.dislike}
          />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;

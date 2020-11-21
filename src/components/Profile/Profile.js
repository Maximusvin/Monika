import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import styles from './Profile.module.css';

const Profile = ({ posts }) => {
  return (
    <div className={styles.profile}>
      <ProfileInfo />
      <MyPosts posts={posts} />
    </div>
  );
};

export default Profile;

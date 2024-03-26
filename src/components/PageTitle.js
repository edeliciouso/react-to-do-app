import React from 'react';
import styles from '../styles/modules/title.module.scss';
import Profile from './Profile';

function PageTitle({ children, ...rest }) {
  return (
    <div className={styles.container}>
      <div className={styles.containerChild}>
        <Profile />
      </div>
      <p className={styles.title} {...rest}>
        {children}
      </p>
      <div>
        <Profile />
      </div>
    </div>
  );
}

export default PageTitle;

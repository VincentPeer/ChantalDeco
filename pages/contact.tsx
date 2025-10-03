
import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Me</h1>
      <p className={styles.subtitle}>You can reach me at the following email address:</p>
      <a href="mailto:chantal.peer@example.com" className={styles.email}>chantal.peer@example.com</a>
    </div>
  );
};

export default Contact;

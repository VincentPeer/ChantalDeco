
import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact</h1>
      <div className={styles.contactWrapper}>
        <div className={styles.contactInfo}>
          <h2>Coordonnées</h2>
          <p>Vous pouvez me joindre à l'adresse email suivante :</p>
          <a href="mailto:chantal.peer@example.com" className={styles.email}>chantal.peer@example.com</a>
          <div className={styles.schedule}>
            <h2>Horaires</h2>
            <p>Lundi - Vendredi : 9h00 - 18h00</p>
            <p>Samedi : 10h00 - 16h00</p>
            <p>Dimanche : Fermé</p>
          </div>
        </div>
        <div className={styles.map}>
          <h2>Notre emplacement</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2583.542337819834!2d4.3517103157029!3d50.846557379532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3a4ed70d1a1cf%3A0x4a7a8f1b4cbe3e1!2sGrand%20Place%2C%201000%20Bruxelles%2C%20Belgique!5e0!3m2!1sfr!2sfr!4v1622640000000!5m2!1sfr!2sfr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;


import React from 'react';
import Image from 'next/image';
import styles from '../styles/Gallery.module.css';

const Gallery = () => {
  const images = [
    '/images/cushion1.jpg',
    '/images/cushion2.jpg',
    '/images/cushion3.jpg',
    '/images/cushion4.jpg',
    '/images/box.jpg',
    '/images/bedroom-curtain.jpg',
    '/images/box2.jpg',
    '/images/flower-cushion.jpg',
    '/images/house-cushion.jpg',
    '/images/decorative-cushions.jpg',
    '/images/cushions.jpg',
    '/images/samples.webp',
    '/images/armchair.jpg',
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gallery</h1>
      <p className={styles.subtitle}>Here are some examples of my work:</p>
      <div className={styles.grid}>
        {images.map((image, index) => (
          <div key={index} className={styles.card}>
            <Image src={image} alt={`Image ${index + 1}`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

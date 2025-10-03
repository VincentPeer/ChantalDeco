
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chantal Déco</title>
        <meta name="description" content="Site de Chantal Peer, courtepointière" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles['main-content']}>
        <main className={styles.content}>
          <h1 className={styles.title}>
            Chantal Déco
          </h1>

          <p className={styles.subtitle}>
            Bienvenue sur le site de Chantal, courtepointière. Vous trouverez ici des exemples de mes travaux.
          </p>

          <Link href="/gallery" className={styles.link}>
            Voir la galerie
          </Link>
        </main>
      </div>

      <section className={styles.resume}>
        <div className={styles['resume-content']}>
          <h2 className={styles['resume-title']}>À propos</h2>
          <p className={styles['resume-text']}>
            Chantal Déco est une professionnelle avec plus de 20 ans d'expérience en tant que courtepointière et décoratrice d'intérieur. Basée à Les Thioleyres, elle est connue pour ses réalisations sur mesure et son savoir-faire dans le domaine de la décoration.
          </p>
          <br />
          <p className={styles['resume-text']}>
            En tant que courtepointière, Chantal confectionne des coussins, rideaux, voilages, stores et d'autres éléments décoratifs textiles, ainsi que la restauration des chaises, canapés et fauteuils. Son expérience lui a permis de perfectionner ses compétences en matière de couture, de choix de tissus et de combinaison de motifs pour créer des pièces uniques et de qualité. Chantal sait comment créer une ambiance harmonieuse en choisissant les bonnes couleurs, les matériaux appropriés et les accessoires décoratifs adaptés.
          </p>
          <br />
          <p className={styles['resume-text']}>
            Pour offrir le meilleur service possible, Chantal accueille chaleureusement ses clients dans son atelier, où ils peuvent discuter de leurs projets et découvrir une large gamme de tissus, de textures et de finitions disponibles. De plus, elle se déplace également à domicile pour fournir des conseils personnalisés, prendre des mesures précises et apporter des échantillons de tissus afin que ses clients puissent visualiser comment les différentes options s'intègreraient dans leur espace.
          </p>
        </div>
      </section>
    </div>
  );
}

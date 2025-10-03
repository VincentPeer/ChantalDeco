
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
  );
}

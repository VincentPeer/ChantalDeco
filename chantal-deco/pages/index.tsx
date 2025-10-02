
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chantal Déco</title>
        <meta name="description" content="Site de Chantal Peer, courtepointière" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Bienvenue sur le site de Chantal Déco
        </h1>

        <p>
          Vous trouverez ici des exemples de mes travaux de courtepointière.
        </p>

        <Link href="/gallery">Voir la galerie</Link>

      </main>
    </div>
  );
}

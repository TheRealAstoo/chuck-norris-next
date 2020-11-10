import Head from 'next/head'
import Link from "next/link"

const Home = (): JSX.Element => {
  return (
    <div id="home-bg">
      <Head>
        <title>Chuck Norix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Bienvenue sur ma fan-page de blague sur Chuck, notre Dieu à tous</h1>
      <h2>Tu veux des blagues ? C'est par ici </h2>
      
      <Link href="/categories"><button>UN GROS BOUTON VERS LES CATEGORIES</button></Link>
    </div>
  )
}

export default Home;

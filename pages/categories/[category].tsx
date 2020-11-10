import { GetServerSideProps } from 'next'
import Link from "next/link"

const NorrisJokePerCategory: React.FC<{joke: string}> = ({ joke }) => {
  return (
    <div className="container">
      <p>
        {joke}
      </p>
      <Link href="/categories">Revenir en arrière ?</Link>
    </div>
  )
}

export default NorrisJokePerCategory;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${context.params.category}`);
  const joke = await response.json();
  return {
    props: {
      joke: joke.value,
    }
  }
}
import Link from "next/link"
import Head from 'next/head'
import { GetServerSideProps } from "next"



const GetCategories: React.FC<{categories: string[]}> = ({ categories }) => {
  return (
      <div className="container">
        <Head>
          <title>Categories</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
          {categories ? [
            <ul>
              {categories.map( category => {
                return (
                  <li key={category}>
                    <Link href={`categories/${category}`}>{category}</Link>
                  </li>
                )
              })}
            </ul>] : null
          }
      </div>
  )
}

export default GetCategories;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("https://api.chucknorris.io/jokes/categories");
  const categories = await response.json();
  return {
    props: {
      categories
    }
  }
}

import styles from '../styles/Home.module.css'
import fetch from 'node-fetch'
export const getStaticProps = async () => {
  const maxPokemons = 251
  const URL = 'https://jsonplaceholder.typicode.com/todos/'
  let data
  fetch(URL)
    .then(res => res.json())
    .then(data =>console.log(data))
    .catch(e=>console.log(e))
  //add pokemon index
  // data.results.forEach((item, index) => {
  //   item.id = index + 1
  // })
  console.log(data)
  return {
    props: {
      data: data,
    },
  }
}


export default function Home() {
  return (
    <div>
      <h1>casa</h1>
      {/* <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            {pokemon.name}
          </li>
        ))}
      </ul> */}
    </div>
  )
}

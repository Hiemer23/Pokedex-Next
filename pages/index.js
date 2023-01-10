import Card from '../components/Card'

import Image from "next/image";

import styles from "../styles/Home.module.css";
import { useState, useEffect } from 'react';

<<<<<<< HEAD
export async function getStaticProps () {
  const maxPokemons = 251;
  const api = `https://pokeapi.co/api/v2/pokemon`;
=======
/*export async function getStaticProps() {
  const api = 'https://pokeapi.co/api/v2/pokemon/?limit=251';
>>>>>>> 856914f4f64525707570e5a007d6a7afaf8ff0c5

  const res = await fetch(`${api}`);

  const data = await res.json();

  // add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}*/


export default function Home() {

  const [pokemons, setPokemons] = useState([])
  
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=251")
      .then(res => res.json())
      .then(vetor => vetor.results)
      .then(data => setPokemons(data.map((item, index) => {
        item.id = index + 1
        return item
        //console.log(item))
      })))
      .catch(e => console.log(e))
  }, [])

  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poke<span>Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="PokeNext"
        />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
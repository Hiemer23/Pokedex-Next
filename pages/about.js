import Image from 'next/image'

import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o site</h1>
            <p>Aplicação do Curso de NextJs - Matheus Battisti</p>
            <p>Projeto criado através do curso do Youtube do Canal <a className={styles.negrito} rel="noreferrer" href='https://www.youtube.com/@MatheusBattisti' target='_blank'>Matheus Batisti</a></p>
            <p>Link para a série no Youtube: <a className={styles.negrito} rel="noreferrer" href='https://www.youtube.com/watch?v=XHrbg2iYNCg&list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft&index=1' target='_blank'>Curso de NextJS</a></p>
            <Image src='/images/charizard.png' width="300" height="300" alt='Charizard'></Image>
        </div>
    )
}
import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/"><Image src='/images/pokeball.png' width="30" height='30' alt='PokeNext' /></Link>
                <h1>PokeNext</h1>
            </div>
            <ul className={styles.link_items}>
                <li>
                    <Link href="/" legacyBehavior>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about" legacyBehavior><a>Sobre</a></Link>
                </li>
            </ul>
        </nav>
    )
}


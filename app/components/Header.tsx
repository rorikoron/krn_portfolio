"use client"

import Link from 'next/link'
import styles from './Header.module.scss'
import { usePathname } from 'next/navigation'

export default function Header(){

    const pathname = usePathname();

    const listItems = [
        { path: '/', label: 'Home'},
        { path: '/About', label: 'About'},
        { path: '/Archive', label: 'Archive'},
        { path: '/Product', label: 'Product'},
        { path: '/Link', label: 'Link'},
    ]
    
    return(
        <header className={styles.header}>

            <ul className={styles.list}>
            {
                listItems.map((item) => (
                    <li key={item.label} className={`${styles.listChild} ${pathname === item.path ? styles.selected : ""}`}>
                        <Link href={item.path}>
                            {item.label}
                        </Link>
                    </li>
                ))
            }
            </ul>
        </header>
    )
}
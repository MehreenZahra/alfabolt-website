import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "./navbar.module.css"
import { ChevronDown } from 'lucide-react'



type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className={styles.nav}>
        <div className="logo">
             {/* logo */}
        <Link href="/">
            <h1 className={styles.logo}>Alfabolt</h1>   
        {/* <Image
        src="/alfabolt-logo.png"
        alt="Logo"
        width={100}
        height={100}
        /> */}
        </Link>
        </div>
       <div className={styles.navlinks}>
        {/* navlinks */}
        <ul>
             {/* menu items */}
            <li>
            <Link href="/contact" className={styles.dropdownicon}>
                    Services <ChevronDown className={styles.icon} height={16} />
            </Link>
             {/* <ul className={styles.dropdown}>
                <li><Link href="/services/digital-transformation">Digital Transformation</Link></li>
                <li><Link href="/services/project-management">Project Management</Link></li>
                <li><Link href="/services/strategy-development">Strategy Development</Link></li>
            </ul> */}
            </li>
            <li>
            <Link href="/login">
                Industries  
              
            </Link>
            </li>
            <li>
            <Link href="/signup">
                    Our Work
                   
            </Link>
            </li>
        </ul>
        <button className={styles.cta}>Talk to Us</button>
       </div>
    </nav>
  )
}

export default Navbar
"use client"
import Image from 'next/image';
import Link from 'next/link';

import Logo from "../../../public/img/logo.svg";

import {useState} from 'react';

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faBars,
    faXmark
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {

    // Function to toggle the menu
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(prevShowMenu => !prevShowMenu);
    };

    return (
        <>
            <header>
                <Link href="/">
                    <Image
                        src={Logo}
                        width={114}
                        height={25}
                        alt="Devani logo"
                    />
                </Link>
                <button 
                   className={`${showMenu ? 'open' : ''}`}
                   onClick={toggleMenu}
                >
                    <FontAwesomeIcon
                        icon={faBars}
                        className='i'
                    />
                </button>
            </header>
            <nav className={`${showMenu ? 'open' : ''}`}>
                <button onClick={toggleMenu}>
                    <FontAwesomeIcon
                        icon={faXmark}
                        className='i'
                    />
                </button>
                <ul>
                    <li><Link href="">Inleiding</Link> </li>
                    <li><Link href="">Bedrijf</Link> </li>
                    <li><Link href="">Profielschets</Link> </li>
                    <li><Link href="">Werkzaamheden</Link> </li>
                    <li><Link href="">Leerdoelen</Link> </li>
                    <li><Link href="">Stagevaardigheden</Link> </li>
                    <li><Link href="">Feedbackformulieren</Link> </li>
                    <li><Link href="">Reflectie</Link> </li>
                    <li><Link href="">Extra</Link> </li>
                </ul>
            </nav>
        </>
    )
}
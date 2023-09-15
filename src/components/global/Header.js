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

    // Function open and close menu
    const [showMenu, setShowMenu] = useState(false);
    const openMenu = () => {
        setShowMenu(true);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    return (
        <>
            <header>
                <Image
                    src={Logo}
                    width={120}
                    height={27}
                    alt="Devani logo"
                />
                <button 
                    className={`button-class ${(showMenu ? 'open' : '')}`}
                    onClick={showMenu ? closeMenu : openMenu}
                >
                    <FontAwesomeIcon
                        icon={faBars}
                        className='i'
                    />
                </button>
            </header>
            <nav className={`nav-class ${(showMenu ? 'open' : '')}`}>
                <button onClick={closeMenu}>
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
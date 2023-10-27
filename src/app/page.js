"use client"
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import Emke from "../../public/img/emke.jpg";
import Mockup from "../../public/img/mockup.jpg";
import data from '../../public/data/werkzaamheden.json'; 

import WerkzaamhedenCard from "@/components/global/WerkzaamhedenCard";

import { useState } from "react";

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faXmark
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {

    // Function to toggle the menu
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(prevShowMenu => !prevShowMenu);
    };

    return (
        <>
            <Hero />
            <section className="sec sec-1">
                <h2 className="sub-dec">Inleiding</h2>
                <p>Proident ex dolor laboris do veniam reprehenderit officia laboris cupidatat incididunt cupidatat excepteur fugiat do.</p>
                <ul className="carousel">
                    <li>
                        <Image
                            src="/img/foto-6.jpg" 
                            width={250}
                            height={300}
                            alt="Picture of the author"
                        />
                    </li>
                    <li>
                        <Image
                            src="/img/foto-6.jpg" 
                            width={250}
                            height={300}
                            alt="Picture of the author"
                        />
                    </li>
                    <li>
                        <Image
                            src="/img/foto-6.jpg" 
                            width={250}
                            height={300}
                            alt="Picture of the author"
                        />
                    </li>
                    <li>
                        <Image
                            src="/img/foto-6.jpg" 
                            width={250}
                            height={300}
                            alt="Picture of the author"
                        />
                    </li>
                </ul>
            </section>
            <section className="sec sec-2">
                <h2 className="sub-dec">Bedrijf</h2>
                <p>Proident ex dolor laboris do veniam reprehenderit officia laboris cupidatat incididunt cupidatat excepteur fugiat do.</p>
            </section>
            <section className="sec sec-3">
                <h2 className="sub-dec">Stagebegeleider</h2>
                <h3>Emke Douwe Ottema</h3>
                <p>Proident ex dolor laboris do veniam reprehenderit officia laboris cupidatat incididunt cupidatat excepteur fugiat do.</p>
                <Image
                    src={Emke}
                    width={150}
                    height={150}
                    alt="Stagebegeleider"
                />
            </section>
            <section className="sec sec-4">
                <h2 className="sub-dec">Werkzaamheden</h2>
                <section className="cards">
                    <h3 className="visually-hidden">Werkzaamheden carousel</h3>
                    {data.map((item, key) => {
                        return (
                            <WerkzaamhedenCard 
                                key = {key}
                                title = {item.name}
                                img = {item.img}
                                slug = {item.slug}
                                demo = {item.demo}
                            />
                        );
                    })}
                </section>
            </section>
            <main className="sec sec-5">
                <h2 className="sub-dec">Leerdoelen</h2>
                <section className="cards">
                    <h3 className="visually-hidden">Leerdoelen carousel</h3>
                    <article>
                        <button
                         className={`${showMenu ? 'open' : ''}`}
                         onClick={toggleMenu}
                        >
                            <Image
                                src={Mockup}
                                width={250}
                                height={300}
                                alt="Picture of the author"
                            />
                            <h4 className="sub-dec sub-dec-ld"><span>1: </span>Samen ontwerpen</h4>
                        </button>
                    </article>
                    <article>
                        <button
                         className={`${showMenu ? 'open' : ''}`}
                         onClick={toggleMenu}
                        >
                            <Image
                                src={Mockup}
                                width={250}
                                height={300}
                                alt="Picture of the author"
                            />
                            <h4 className="sub-dec sub-dec-ld"><span>1: </span>Samen ontwerpen</h4>
                        </button>
                    </article>
                    <article>
                        <button
                         className={`${showMenu ? 'open' : ''}`}
                         onClick={toggleMenu}
                        >
                            <Image
                                src={Mockup}
                                width={250}
                                height={300}
                                alt="Picture of the author"
                            />
                            <h4 className="sub-dec sub-dec-ld"><span>1: </span>Samen ontwerpen</h4>
                        </button>
                    </article>
                    <article>
                        <button
                         className={`${showMenu ? 'open' : ''}`}
                         onClick={toggleMenu}
                        >
                            <Image
                                src={Mockup}
                                width={250}
                                height={300}
                                alt="Picture of the author"
                            />
                            <h4 className="sub-dec sub-dec-ld"><span>1: </span>Samen ontwerpen</h4>
                        </button>
                    </article>
                </section>
                <section className={`leerdoelen-pop-up ${showMenu ? 'open' : 'closed'}`}>
                    <h3 className="visually-hidden">Leerdoelen context</h3>
                    <div>
                        <h4 className="sub-dec">1: Samen ontwerpen</h4>
                        <p>Als rol: Front-end developer meedoen met het ontwerpproces binnen Devani om te weten hoe ik mijn rol kan uitvoeren binnen een ontwerpproces en hoe anderen zijn rol uitvoeren binnen het ontwerpproces.</p>
                        <h5>Reflectie</h5>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.</p>
                        <button onClick={toggleMenu}>
                            <FontAwesomeIcon
                                icon={faXmark}
                                className='i'
                            />
                        </button>
                    </div>
                </section>
            </main>
        </>
    )
}

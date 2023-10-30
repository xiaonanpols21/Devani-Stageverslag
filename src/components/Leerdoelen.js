import { useState } from "react";
import Image from "next/image";
import Mockup from "../../public/img/mockup.jpg";

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faXmark
} from "@fortawesome/free-solid-svg-icons";

export default function Leerdoelen() {
    // Function to toggle the menu
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(prevShowMenu => !prevShowMenu);
    };

    return (
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
    )
}
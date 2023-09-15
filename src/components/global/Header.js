import Image from 'next/image';
import Logo from "../../../public/img/logo.svg";
import Link from 'next/link';

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
    faBars,
    faXmark
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <>
            <header>
                <Image
                    src={Logo}
                    width={120}
                    height={27}
                    alt="Devani logo"
                />
                <button>
                    <FontAwesomeIcon
                        icon={faBars}
                        className='i'
                    />
                </button>
            </header>
            <nav>
                <button>
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
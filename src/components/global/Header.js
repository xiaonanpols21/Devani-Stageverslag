import Image from 'next/image';
import Logo from "../../../public/img/logo.svg";

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
    faSearch,
    faAmbulance,
    faAnchor,
    faBars
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <header>
            <nav>
                <Image
                    src={Logo}
                    width={120}
                    height={27}
                    alt="Devani logo"
                />
                <FontAwesomeIcon
                    icon={faBars}
                    className='i'
                />
            </nav>
        </header>
    )
}
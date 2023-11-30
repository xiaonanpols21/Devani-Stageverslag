import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/img/logo.svg";

export default function Header() {
    return (
        <footer>
            <h1>Navigeren</h1>
            <ul>
                <li><Link href="">Inleiding</Link></li>
                <li><Link href="">Bedrijf</Link></li>
                <li><Link href="">Stagebegeleider</Link></li>
                <li><Link href="">Werkzaamheden</Link></li>
                <li><Link href="">Leerdoelen</Link></li>
                <li><Link href="">Stagevaardigheden</Link></li>
                <li><Link href="">Observatie opdracht</Link></li>
                <li><Link href="">Feedbackformulier</Link></li>
                <li><Link href="">Reflectie</Link></li>
                <li><Link href="">Extra</Link></li>
            </ul>
            <Link href="">
                <Image
                    src={Logo}
                    width={114}
                    height={25}
                    alt="Devani logo"
                />
            </Link>
            <section>
                <h3 className='visually-hidden'>Credits</h3>
                <ul>
                    <li><Link href="devani.nl">Devani.nl</Link></li>
                    <li>© All Rights Reserved</li>
                </ul>
            </section>
        </footer>
    )
}

import styles from '../styles/main.scss';

import Image from 'next/image';

import Logo from "../../public/img/logo.svg";

export default function Home() {
    return (
        <>
            <nav>
                <Image
                    src={Logo}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            </nav>
        </>
    )
}

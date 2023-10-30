import Image from "next/image";

export default function Inleiding() {
    return (
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
    )
}
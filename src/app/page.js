import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
                    src="/img/emke.jpg" 
                    width={150}
                    height={150}
                    alt="Stagebegeleider"
                />
            </section>
            <section className="sec sec-4">
                <h2 className="sub-dec">Werkzaamheden</h2>
                <section>
                    <h3 className="visually-hidden">Werkzaamheden carousel</h3>
                    <article>
                        <Link a href="/">
                            <Image
                                src="/img/mockup.jpg" 
                                width={250}
                                height={300}
                                alt="Picture of the author"
                            />
                            <h4 className="sub-dec">Bikkeltraining</h4>
                        </Link>
                        <Link a href="/">
                            <Image
                                src="/img/mockup.jpg" 
                                width={250}
                                height={300}
                                alt="Picture of the author"
                            />
                            <h4 className="sub-dec">Bikkeltraining</h4>
                        </Link>
                        <Link a href="/">
                            <Image
                                src="/img/mockup.jpg" 
                                width={250}
                                height={300}
                                alt="Picture of the author"
                            />
                            <h4 className="sub-dec">Bikkeltraining</h4>
                        </Link>
                    </article>

                </section>
            </section>
        </>
    )
}

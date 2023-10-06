import Image from "next/image";
import WerkThumbnail from "../../../../public/img/mockup.jpg";

export default function Werkzaamheden({title}) {
    return (
        <>
        <section className="hero-werk">
            <h1 className="sub-dec">{title}</h1>
            <Image
                src={WerkThumbnail}
                width={150}
                height={150}
                alt="Werkzaamheden thumbnail"
            />
            <div className="overlay"></div>
        </section>
        <main className="main-werkzaamheden">
            <h2 className="visually-hidden">Werkzaamheden content</h2>
            <Image
                src={WerkThumbnail}
                width={150}
                height={150}
                alt="Werkzaamheden thumbnail"
            />
            <button>Bekijk demo</button>
            <h2>Wat heb ik gedaan?</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est</p>
        </main>
        </>
    )
}

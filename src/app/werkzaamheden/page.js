import Image from "next/image";
import WerkThumbnail from "../../../public/img/mockup.jpg";
export default function Werkzaamheden() {
    return (
        <>
        <section className="hero-werk">
            <h1 className="sub-dec">Bikkeltraining</h1>
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
        </main>
        </>
    )
}
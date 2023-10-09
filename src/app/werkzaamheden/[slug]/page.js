import Image from "next/image";
import WerkThumbnail from "../../../../public/img/mockup.jpg";

export default function Werkzaamheden({ werkzaamheden }) {
    const { title, img, content } = werkzaamheden;

    return (
        <div>
            <section className="hero-werk">
                <h1 className="sub-dec">{title}</h1>
                <Image
                    src={`/img/${img}`} 
                    width={150}
                    height={150}
                    alt="Werkzaamheden thumbnail"
                />
                <div className="overlay"></div>
            </section>
            <main className="main-werkzaamheden">
                <h2 className="visually-hidden">Werkzaamheden content</h2>
                <Image
                    src={`/img/${img}`} 
                    width={150}
                    height={150}
                    alt="Werkzaamheden thumbnail"
                />
                <button>Bekijk demo</button>
                <h2>Wat heb ik gedaan?</h2>
                <p>{content}</p>
            </main>
        </div>
    );
}
export async function generateStaticParams({ params }) {
    const data = await fetch('../../../../public/data/werkzaamheden.json');
    const werkzaamhedenData = await data.json();
    const werkzaamheden = werkzaamhedenData.find((item) => item.slug === params.slug);
    return {
       props: {
         werkzaamheden,
       },
    };
}
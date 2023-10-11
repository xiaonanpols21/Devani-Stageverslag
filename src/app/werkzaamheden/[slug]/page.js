import Image from "next/image";
import WerkThumbnail from "../../../../public/img/mockup.jpg";
import data from '../../../../public/data/werkzaamheden.json'; 

export default async function Werkzaamheden({ params }) {

    const data = await getWerkzaamheden(params.slug)

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

function getWerkzaamheden(slug) {
    // return data.map((item, key) => ({
    //     slug: item.slug
    // }));
}

export async function generateStaticParams({ params }) {
    //const data = await fetch('./../../');
    //const werkzaamhedenData = await data.json();
    //const werkzaamheden = werkzaamhedenData.find((item) => item.slug === params.slug);
    
    return data.map((item, key) => ({
        slug: item.slug
    }));
}
import Image from "next/image";
import Link from "next/link";
import data from '../../../../public/data/werkzaamheden.json';
export default function Werkzaamheden({ params }) {
    const { slug } = params;
    const currentItem = data.find(item => item.slug === slug);

    if (!currentItem) {
        return <div>Not found</div>;
    }

    const { name, img, content } = currentItem;

    return (
        <div>
            <section className="hero-werk">
                <h1 className="sub-dec">{name}</h1>
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
                <Link href="/werkzaamheden/bikkeltraining-wireframes.mov" target="_blank">Bekijk demo</Link>
                <div dangerouslySetInnerHTML={{__html: content}}></div>
            </main>
        </div>
    );
}

export async function generateStaticParams() {
    return data.map((item) => ({
        params: {
            slug: item.slug
        }
    }));
}

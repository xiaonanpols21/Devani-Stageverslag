import Image from "next/image";
import Link from "next/link";
import data from '../../../../public/data/werkzaamheden.json';
export default function Werkzaamheden({ params }) {
    const { slug } = params;
    const currentItem = data.find(item => item.slug === slug);

    if (!currentItem) {
        return <div>Not found</div>;
    }

    const { name, img, content, demo } = currentItem;

    return (
        <main className="main-werkzaamheden">
            <h2 className="visually-hidden">Werkzaamheden content</h2>
            <Image
                src={`/img/${img}`} 
                width={700}
                height={300}
                alt="Werkzaamheden thumbnail"
            />
            <Link href={demo} target="_blank">Bekijk demo</Link>
            <div className="content" dangerouslySetInnerHTML={{__html: content}}></div>
        </main>
    );
}

export async function generateStaticParams() {
    return data.map((item) => ({
        params: {
            slug: item.slug
        }
    }));
}

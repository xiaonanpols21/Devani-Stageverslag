import Link from "next/link";
import Image from "next/image";

export default function WerkzaamhedenCard({img, title, slug}) {
    return (
        <article>
            <Link href={`/werkzaamheden/${slug}`}>
                <Image
                    src={`/img/${img}`} 
                    width={250}
                    height={300}
                    alt={slug}
                />
                <h4 className="sub-dec">{title}</h4>
            </Link>
        </article>
    )
}
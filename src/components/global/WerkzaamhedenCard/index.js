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
                    alt="Picture of the author"
                />
                <h4 className="sub-dec">{title}</h4>
            </Link>
        </article>
    )
}
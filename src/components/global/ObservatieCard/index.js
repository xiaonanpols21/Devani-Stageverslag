"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function WerkzaamhedenCard({img, title, slug}) {
    const [imageHeight, setImageHeight] = useState(0);

    return (
        <article>
            <Link href={`/observatie/${slug}`}>
                <Image
                    src={`/img/${img}`} 
                    width={360}
                    height={imageHeight}
                    alt={slug}
                />
                <h4 className="sub-dec">{title}</h4>
            </Link>
        </article>
    )
}
import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faXmark
} from "@fortawesome/free-solid-svg-icons";

export default function LeerdoelenCard({ id, slug, name, description, reflection, img, toggleMenu, showMenu, data }) {
    const [imageHeight, setImageHeight] = useState(0);

    return (
        <article>
            <Link href={`/leerdoelen#${slug}`}>
                <Image
                    src={`/img/${img}`} 
                    width={360}
                    height={imageHeight}
                    alt="test"
                />
                    <h4 className="sub-dec"><span>{id}:</span>{name}</h4>
            </Link>
        </article>
    )
}

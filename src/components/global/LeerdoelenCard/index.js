import { useState, useCallback } from "react";
import Image from "next/image";

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faXmark
} from "@fortawesome/free-solid-svg-icons";

export default function LeerdoelenCard({ id, name, description, reflection, img, toggleMenu, showMenu, data }) {
    const [imageHeight, setImageHeight] = useState(0);

    const handleCardClick = useCallback(() => {
        console.log("Clicked ID:", id);
        const selectedData = data.find(item => item.id === id);
        console.log("Selected Data:", selectedData);
        toggleMenu(id);
    }, [id, toggleMenu, data]);
    

    

    return (
        <article>
            <button
                className={`${showMenu ? 'open' : ''}`}
                onClick={handleCardClick} // Handle click to show popup and set content
            >
                <Image
                    src={`/img/${img}`}
                    width={360}
                    height={imageHeight}
                    alt={name}
                />
                <h4 className="sub-dec"><span>{id}:</span>{name}</h4>
            </button>
            {showMenu && (
                <div className="leerdoelen-pop-up open">
                    <h3 className="visually-hidden">Leerdoelen context</h3>
                    <div>
                        <h4 className="sub-dec">{name}</h4>
                        <p>{description}</p>
                        <h5>Reflectie</h5>
                        <p>{reflection}</p>

                        <button onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faXmark} className='i' />
                        </button>
                    </div>
                </div>
            )}
        </article>
    );
}

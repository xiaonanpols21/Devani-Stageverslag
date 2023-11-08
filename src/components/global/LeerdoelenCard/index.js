import { useState } from "react";
import Image from "next/image";

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faXmark
} from "@fortawesome/free-solid-svg-icons";

export default function LeerdoelenCard({ id, title, description, reflection, img, toggleMenu, showMenu, data }) {
    const [popupContent, setPopupContent] = useState({
        title: "",
        description: "",
        reflection: "",
    });

    const handleCardClick = () => {
        // Logic to set popup content based on ID
        const selectedLeerdoel = data.find(item => item.id === id);
        if (selectedLeerdoel) {
            setPopupContent({
                title: selectedLeerdoel.name,
                description: selectedLeerdoel.description,
                reflection: selectedLeerdoel.reflection,
            });
            toggleMenu();
        }
    };

    return (
        <article>
            <button
                className={`${showMenu ? 'open' : ''}`}
                onClick={handleCardClick} // Handle click to show popup and set content
            >
                <Image
                    src={`/img/${img}`}
                    width={360}
                    height={250}
                    alt={title}
                />
                <h4 className="sub-dec"><span>{id}:</span>{title}</h4>
            </button>
            {/* Additional logic to display popup content */}
            {showMenu && (
                <div className="leerdoelen-pop-up open">
                    <h3 className="visually-hidden">Leerdoelen context</h3>
                    <div>
                        <h4 className="sub-dec">{title}</h4>
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

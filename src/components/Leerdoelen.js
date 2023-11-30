"use client";
import { useState } from "react";
import Image from "next/image";
import Mockup from "../../public/img/mockup.jpg";
import data from "../../public/data/leerdoelen.json";
import LeerdoelenCard from "./global/LeerdoelenCard";

export default function Leerdoelen() {
    // Function to toggle the menu
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(prevShowMenu => !prevShowMenu);
    };

    return (
        <main className="sec sec-5">
            <h2 className="sub-dec">Leerdoelen</h2>
            <section className="cards">
                <h3 className="visually-hidden">Leerdoelen carousel</h3>
                {data.map((item, key) => {
                    return (
                        <LeerdoelenCard 
                            key = {key}
                            id = {item.id}
                            name = {item.name}
                            slug = {item.slug}
                            img = {item.img}
                            toggleMenu={toggleMenu}
                            showMenu={showMenu}
                            data={data}
                            description = {item.description}
                            reflection = {item.reflection}
                        />
                    );
                })}
            </section>
        </main>
    )
}
"use client"
import Hero from "@/components/Hero";
import Inleiding from "@/components/Inleiding";
import Bedrijf from "@/components/Bedrijf";
import Stagebegeleider from "@/components/Stagebegeleider";
import Werkzaamheden from "@/components/Werkzaamheden";
import Leerdoelen from "@/components/Leerdoelen";

import StagevaardighedenCard from "@/components/global/StagevaardighedenCard";
import data from '../../public/data/stagevaardigheden.json';

export default function Home() {

    return (
        <>
            <Hero />
            <Inleiding />
            <Bedrijf />
            <Stagebegeleider />
            <Werkzaamheden />
            <Leerdoelen />
            <section className="sec sec-6">
                <h2 className="sub-dec">Stage vaardigheden</h2>

                <section className="cards">
                    <h3 className="visually-hidden">Stage vaardigheden carousel</h3>
                    {data.map((item, key) => {
                        return (
                            <StagevaardighedenCard 
                                key = {key}
                                title = {item.name}
                                img = {item.img}
                                slug = {item.slug}
                            />
                        );
                    })}
                </section>
            </section>
        </>
    )
}

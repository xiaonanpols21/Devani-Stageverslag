"use client"
import Hero from "@/components/Hero";
import Inleiding from "@/components/inleiding";
import Bedrijf from "@/components/Bedrijf";
import Stagebegeleider from "@/components/Stagebegeleider";
import Werkzaamheden from "@/components/global/Werkzaamheden";
import Leerdoelen from "@/components/Leerdoelen";

export default function Home() {

    return (
        <>
            <Hero />
            <Inleiding />
            <Bedrijf />
            <Stagebegeleider />
            <Werkzaamheden />
            <Leerdoelen />
        </>
    )
}

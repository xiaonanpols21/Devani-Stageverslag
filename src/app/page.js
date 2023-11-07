"use client"
import Hero from "@/components/Hero";
import Inleiding from "@/components/Inleiding";
import Bedrijf from "@/components/Bedrijf";
import Stagebegeleider from "@/components/Stagebegeleider";
import Werkzaamheden from "@/components/Werkzaamheden";
import Leerdoelen from "@/components/Leerdoelen";
import Stagevaardigheden from "@/components/Stagevaardigheden";

export default function Home() {

    return (
        <>
            <Hero />
            <Inleiding />
            <Bedrijf />
            <Stagebegeleider />
            <Werkzaamheden />
            <Leerdoelen />
            <Stagevaardigheden/>
            
        </>
    )
}

import WerkzaamhedenCard from "@/components/global/WerkzaamhedenCard";
import data from '../../../public/data/werkzaamheden.json'; 

export default function Werkzaamheden() {
    return (
        <section className="sec sec-4">
            <h2 className="sub-dec">Werkzaamheden</h2>
            <section className="cards">
                <h3 className="visually-hidden">Werkzaamheden carousel</h3>
                {data.map((item, key) => {
                    return (
                        <WerkzaamhedenCard 
                            key = {key}
                            title = {item.name}
                            img = {item.img}
                            slug = {item.slug}
                            demo = {item.demo}
                        />
                    );
                })}
            </section>
        </section>
    )
}
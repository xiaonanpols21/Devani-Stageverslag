import data from "../../public/data/observatieopdracht.json";
import ObservatieCard from "@/components/global/ObservatieCard";

export default function Observatieopdracht() {
    return (
        <section className="sec sec-7">
            <h2 className="sub-dec">Observatieopdracht</h2>
            <section className="cards">
                <h3 className="visually-hidden">Leerdoelen carousel</h3>
                {data.map((item, key) => {
                    return (
                        <ObservatieCard 
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
import StagevaardighedenCard from "@/components/global/StagevaardighedenCard";
import data from '../../public/data/stagevaardigheden.json';

export default function Stagevaardigheden() {
    return (
        <section className="sec sec-6">
            <h2 className="sub-dec">Stagevaardigheden</h2>
            <section className="cards">
                <h3 className="visually-hidden">Stagevaardigheden carousel</h3>
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
    )
}
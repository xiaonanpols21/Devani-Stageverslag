import StagevaardighedenDropdown from "@/components/global/StagevaardighedenDropdown";
import data from '../../public/data/stagevaardigheden.json';

export default function Stagevaardigheden() {
    return (
        <section className="sec sec-6">
            <h2 className="sub-dec">Stagevaardigheden</h2>
                {data.map((item, key) => {
                    return (
                        <StagevaardighedenDropdown 
                            key = {key}
                            title = {item.name}
                            img = {item.img}
                            slug = {item.slug}
                            content = {item.content}
                        />
                    );
                })}
        </section>
    )
}
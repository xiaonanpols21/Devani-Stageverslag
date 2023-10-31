import Image from "next/image";
import Link from "next/link";
import mockup from "../../../public/img/mockup.jpg";
import data from "../../../public/data/stagevaardigheden.json";

export default function Stagevaardigheden() {

    return (
        <div>
            <section className="hero-werk">
                <h1 className="sub-dec">Stagevaardigheden</h1>
                <Image
                    src={mockup} 
                    width={150}
                    height={150}
                    alt="Werkzaamheden thumbnail"
                />
                <div className="overlay"></div>
            </section>
            <main className="main-stagevaardigheden">
                <h2 className="visually-hidden">Stagevaardigheden content</h2>
                {data.map((item) => {
                    return (
                        <>
                            <Image
                                src={item.img} 
                                width={150}
                                height={150}
                                alt="Werkzaamheden thumbnail"
                                id={item.slug}
                            />
                            <h3 className="sub-dec">{item.name}</h3>
                            <div className="content" dangerouslySetInnerHTML={{__html: item.content}}></div>
                        </>
                    )
                })}
            </main>
        </div>
    );
}
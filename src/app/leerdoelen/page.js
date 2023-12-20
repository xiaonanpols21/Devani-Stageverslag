import data from '../../../public/data/leerdoelen.json';

export default function Leerdoelen() {
    return (
        <main className="main-leerdoelen">
            {data.map((item, key) => {
                return (
                    <>
                        <h1 id={item.slug} className="sub-dec">{item.id}: {item.name}</h1>
                        <p>{item.description}</p>
                        <h2>Reflectie</h2>
                        <div className="content" dangerouslySetInnerHTML={{__html: item.reflection}}></div>
                    </>
                )
            })};
        </main>
    )
}
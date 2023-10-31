import Image from "next/image";
import Emke from "../../public/img/emke.jpg";

export default function Stagebegeleider() {
    return (
        <section className="sec sec-3">
            <h2 className="sub-dec">Stagebegeleider</h2>
            <h3>Emke Douwe Ottema</h3>
            <p>Proident ex dolor laboris do veniam reprehenderit officia laboris cupidatat incididunt cupidatat excepteur fugiat do.</p>
            <Image
                src={Emke}
                width={150}
                height={150}
                alt="Stagebegeleider: Emke Douwe Ottema"
            />
        </section>
    )
}
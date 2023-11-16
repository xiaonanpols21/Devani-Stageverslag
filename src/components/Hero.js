import Image from 'next/image';
import PlayIcon from '../../public/img/play.svg';

export default function Hero() {
    return (
        <section className="hero">
            <h1>
                <span>&nbsp;Stage</span>
                <span>verslag</span>
            </h1>

            <h2 className='visually-hidden'>Auther</h2>
            <ul>
                <li>Xiao Nan Pols || 500839533</li>
                <li>Devani || Front-end developer</li>
            </ul>

            <h2>Bedrijfsbegeleider</h2>
            <ul>
                <li>Emke Douwe Ottema</li>
                <li>Webdeveloper</li>
            </ul>

            <h2>Stagebegeleider</h2>
            <ul>
                <li>Kevin van der Wiel</li>
                <li>k.van.der.wiel@hva.nl</li>
            </ul>

            <h2 className='visually-hidden'>HvA</h2>
            <ul>
                <li>CMD Amsterdam || 2-2-24</li>
            </ul>

            <button>
                <Image
                    src={PlayIcon}
                    width={70}
                    height={70}
                    alt="Play icoon"
                />
            </button>
        </section>
    )
}
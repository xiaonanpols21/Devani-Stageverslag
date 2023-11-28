import Image from "next/image";
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faAngleDown
} from "@fortawesome/free-solid-svg-icons";

export default function StagevaardighedenDropdown({img, title, slug, content}) {
    
    return (
        <article className="article-stagevaardigheden">
            <details>
                <summary className="sub-dec"> 
                    {title}
                    <FontAwesomeIcon
                        icon={faAngleDown}
                        className='i'
                    />
                </summary>
                <section>
                    <h3 className="visually-hidden">Stagevaardigheden content</h3>
                    {img && (
            <Image
              src={img}
              width={700}
              height={300}
              alt="Werkzaamheden thumbnail"
              id={slug}
            />
          )}
                     <div className="content" dangerouslySetInnerHTML={{__html: content}}></div>
                </section>
            </details>
        </article>

    )
}
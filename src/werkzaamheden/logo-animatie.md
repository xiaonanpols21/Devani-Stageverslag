---
title: 'Bikkeltraining Wireframes'
img: '../public/mockup.jpg'
---

**Wat heb ik gedaan?**
Voor [Bikkeltraining](https://www.bikkeltraining.nl/) moet er een nieuwe website komen. Die mag ik gaan maken van wireframes tot programmeren. Devani werkt hiervoor in Sketch. Ik heb hier ooit mee gewerkt op mijn 2e stage op MBO. Sketch was voor mij niet nieuw. Ik moest de kennis wel weer ophalen. Dat deed ik door kleine uitleg van Emke en You-Tube Tutorial kijken en gewoon zelf ermee aan de slag. 

Ik begon met de wireframes. Daarvoor heb ik 3x feedback gekregen. Eerste keer met alleen Emke waarbij er wat dingentjes waren die aangepast moesten worden. 2e keer met Emke en Yvanca waarbij er nog kleine aanpassingen werden gedaan. En als laatste alleen Yvanca die mij ook nog wat Sketch skills leerde en hoe zij te werk gingen. 

**Wat heb ik geleerd?**
Met de tips van Yvanca heb ik veel geleerd. Vooral hoe je netjes te werk gaat. Als ik terugkijk vind ik het inderdaad rommelig eruit zien. Voor de volgende keer wil ik dat graag anders doen. Dat kan ik doen door goed te kijken naar vorige projecten. Verdere tips staan bij [Feedback 3.0]()

**Wat ging goed?**
Over het algemeen ging werken met Sketch wel goed omdat ik er al klein beetje bekend mee ben en omdat ik altijd al wireframes maakte in Adobe XD. 

**Wat kan beter?**
Over het algemeen ging werken met Sketch wel goed omdat ik er al klein beetje bekend mee ben en omdat ik altijd al wireframes maakte in Adobe XD. 
Netjes werken door Artboards goed te noemen met hoofdletter, Artboard op verschillende pagina’s en te gaan programmeren uit symbolen. 

<h2>Wat heb ik gedaan?</h2>
<p>Voor de Devani website moet er een loading animatie screen komen en ik moest onderzoeken hoe je dat het beste kan doen en uitwerken.</p>
<p>Ik ging nadenken hoe je het beste kan animeren op het web en dat is met SVG’s. Ik wist dat Json er ook iets mee te maken had want ik had het vroeger ook ooit eens gedaan. Dus toen had ik hulp van Chat GPT of mijn ideeën klopten. Ik kwam uit op dat je een mp4 bestand kan omzetten naar SVG. Toen ging ik verder kijken op You-Tube en zag dit filmpje: <a href='https://www.youtube.com/watch?v=h8tInajwIHo&t=1223s&ab_channel=DesignCourse'>Wow.. You can Export Adobe After Effects Animations as SVG! Here's how.</a></p>
<p>Ik volgde deze tutorial en kwam erop uit dat je After Affect bestanden kan renderen met  Bodymovin naar een JSON file. Dat is een plugin voor After Affects gemaakt door Lottie.</p>
<p>Ik heb een After Affects animatie gemaakt en dan met Bodymovin renderen zodat je de code in je html kan doen. Daarvoor heb ik ook een <a href='#documentatie'>documentatie</a> gemaakt van wat je precies moet doen.</p>
<p>Het product heb ik aan Emke laten zien en verteld dat ik Bodymovin heb gebruikt. De bestanden hebben zij nu ook zelf.</p>

<h2>Wat heb ik geleerd?</h2>
<p>Ik heb geleerd hoe je makkelijk SVG animaties maakt waarbij je niet veel code verstand van hoeft te hebben dus dat is wel chill.</p>

<h2>Wat ging goed?</h2>
<p>Het installeren van Bodymovin ging wel goed. Was eerst eventjes zoeken maar uiteindelijk is het toch gelukt.</p>
<h2>Wat kan beter?</h2>
<p>De animatie die ik heb gemaakt in After Affects kon misschien beter. Het is nog niet helemaal smooth naar mijn ogen.</p>

<h2 id='documentatie'>Documentatie</h2>
<ol>
<li>Sluit After Affects</li>
<li>Installeer <a href='https://aescripts.com/learn/zxp-installer/'>ZXP</a></li>
<li>Download Bodymovin Extension (ook al is de folder leeg): <a href='https://github.com/airbnb/lottie-web/blob/master/build/extension/bodymovin.zxp'>Github</a></li>
<li>Maak de Animatie in Illustrator</li>
<li>Exporteren: Window > extensions > bodymovin</li>
<li>Selecteer de composition die je wilt experteren</li>
<li>Verander de location (rechts bij de groene puntjes)</li>
<li>Druk op Render (bestand wordt gerenderd als json file met naam data)</li>
<li>Ga naar je VSC project</li>
<li>Installeer de HTML player installation <div>Testimonial: npm install lotte-web</div><div>Script tag: <a href='https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js'>CDNJS.Cloudfare.com</a></div></li>
<li>Maak een Script tag: index.js</li>
<li>`Maak: <div id=”bm”></div> waar je animatie wilt hebben</li>
</ol>
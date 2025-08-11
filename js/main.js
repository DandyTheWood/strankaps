const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('sliding-menu');
if (toggle && menu) {
    toggle.addEventListener('click', () => {
        menu.classList.toggle('open');
    });
}

// SPA navigation
const content = document.getElementById('main-content');
const navLinks = document.querySelectorAll('nav a[data-page]');

const pages = {
    domov: `
        <h2>Domov</h2>
        <p>Vitajte na stránke spoločnosti, ktorá premení vaše smutné chvíle na nezabudnuteľnú udalosť. Vieme, že strata blízkeho je ťažká… ale my veríme, že aj koniec života si zaslúži poriadnu oslavu.</p>
        <p>Ponúkame kompletný servis od rozlúčky v štýle “ticho a slzy” až po veselé odchody s hudbou, tancom a ohňostrojom. Nech už si váš zosnulý želal čokoľvek – od skromného obradu po pompézne finále – my to zrealizujeme s úsmevom (a niekedy aj smiechom).</p>
        <h3>Ponákame:</h3>
        <ul>
            <li>Kompletné pohrebné služby</li>
            <li>Poradenstvo a pomoc 24/7</li>
            <li>Individuálny prístup ku každému klientovi</li>
            <li><a href="#" data-page="obrad">Vac nájdete tu.</a></li>
        </ul>
        <p>U nás platí jednoduché heslo: Keď už odchádza, nech odíde štýlovo.</p>
    `,
    obrad: `
        <h2>Obrad - posledná šou na mieru</h2>
        <p>Každý odchod si zaslúži dôstojnú (alebo aspoň pamätnú) rozlúčku. V našich pohrebných službách sa postaráme o to, aby obrad nebol len nudným sedením v laviciach, ale skutočnou udalosťou, na ktorú sa bude spomínať roky… alebo aspoň do ďalšieho pohrebu.</p>
        <h3>Naše obrady ponúkajú:</h3>
        <ul>
            <li><b>Klasické obrady</b> – ticho, slzy, čierna farba a jemná hudba pre tradične zmýšľajúcich.</li>
            <li><b>Tematické rozlúčky</b> – pirátsky pohreb, filmový motív, rockový koncert alebo garden party. Fantázii sa medze nekladú.</li>
            <li><b>Interaktívne obrady</b> – priestor pre príbehy, fotky, videá a dokonca aj seansu so zosnulím.</li>
        </ul>
        <p>Každý obrad prispôsobíme tak, aby odzrkadľoval osobnosť a štýl človeka, s ktorým sa lúčime. Pretože u nás platí: Aj posledný deň môže byť najlepší.</p>
        `,
    doprava: `
        <h2>Doprava zosnulého</h2>
        <p>Či už limuzínou, kočom, veteránom alebo loďou… záleží len na tom, čo si zosnulý (alebo vy) želáte. Naša služba dopravy zosnulých zabezpečuje prevoz v rámci Slovenska ale aj do zahraničia (príplatok vzhľadom na vzdialenosť).</p>
        `,
    pohr: `
        <h2>Pohreb</h2>
        <p>Ako môže vyzerať váš pohreb (alebo pohreb vášho blízkeho)? To záleží len na vás!</p>
        <p>Predstavte si toto:</p>
        <hr>

        <h3>Príchod hostí:</h3>
        <p><b>Žiadne pochmúrne zvonenie</b> – hostia sú vítaní šampanským a živou hudbou. Na vstupe dostanú čierne balóniky s nápisom “Odchádza, ale navždy v našich spomienkach… a historkách“.</p>
    
        <h3>Príchod zosnulého:</h3>
        <p>Žiadny obyčajný katafalk. Rakev môže byť privezená veteránom, motorkou s postranným vozíkom, na koči alebo (pre odvážnejších) v sklenenom akváriu so suchým ľadom pre efekt hmly.</p>
        <p>Hudobný sprievod na mieru – od smútočných huslí po AC/DC “Highway to Hell”.</p>
        
        <h3>Hlavný obrad:</h3>
        <p>Moderátor (náš profesionálny “smútočný showman”) strieda dojímavé momenty s vtipnými historkami o zosnulom.</p>
        <p>Fotoprojekcia na veľkej LED stene: najlepšie a najhoršie momenty života zosnulého.</p>
        <P>Stand-up vstup od kamaráta alebo člena rodiny – humor je vítaný.</p>
        
        <h3>Špeciálne efekty:</h3>
        <p>Konfety z obľúbených farieb zosnulého.</p>
        <p>Vypustenie holubíc, motýľov alebo dronu s kamerou, ktorý natočí posledný “letecký záber” odchodu.</p>
        <p>Voliteľné: ohňostroj (ideálne v tvare mena zosnulého).</p>
        
        <h3>Posledné zbohom:</h3>
        <p>Hostia dostanú malé darčekové taštičky – miniatúrne urny so symbolickým popolom (napr. popol z grilovačky, ktorú mal zosnulý rád). </p>
        <p>K odchodu hrá “Always Look on the Bright Side of Life” alebo iná veselá pieseň.</p>
        
        <h3>Afterparty:</h3>
        <p>Áno, pohreb môže mať afterparty. Občerstvenie podľa chuti zosnulého – od koláčov po gulášový kotlík.</p> 
        <p>DJ alebo živá kapela, aby smútok netrval dlhšie než je nevyhnutné.</p>
    `,
    urny: `
        <h2>Urny</h2>
        
    `,
    galeria: `
        <h2>Galéria</h2>
        <p>Pozrite si fotografie z našich služieb a ukážky kvetinovej výzdoby.</p>
        <div class="gallery">
            
        </div>
    `,
    cennik: `
        <h2>Cenník</h2>
    <table>
        <tr><th>Služba</th><th>Cena</th></tr>
        <tr><td>Kompletný pohrebný balík (vrátane obradu, moderátora, projekcie, stand-upu, špeciálnych efektov a afterparty)</td><td>od 1999 €</td></tr>
        <tr><td>Príchod hostí (hudba, sviečky, stuhy)</td><td>od 99 €</td></tr>
        <tr><td>Príchod zosnulého (hudba, tichá spomienka)</td><td>od 149 €</td></tr>
        <tr><td>Moderátor – smútočný showman</td><td>od 250 €</td></tr>
        <tr><td>Fotoprojekcia na LED stene</td><td>od 120 €</td></tr>
        <tr><td>Stand-up vstup (kamaráti/rodina)</td><td>od 0 € (smiech zdarma)</td></tr>
        <tr><td>Konfety z obľúbených farieb zosnulého</td><td>od 60 €</td></tr>
        <tr><td>Vypustenie holubíc, motýľov alebo dronu</td><td>od 80 €</td></tr>
        <tr><td>Ohňostroj v tvare mena zosnulého</td><td>od 350 €</td></tr>
        <tr><td>Miniatúrne urny so symbolickým popolom</td><td>od 15 €/ks</td></tr>
        <tr><td>Afterparty (občerstvenie, DJ/kapela)</td><td>od 399 €</td></tr>
        <tr><td>DJ alebo živá kapela</td><td>od 200 €</td></tr>
        <tr><td>Koláče, gulášový kotlík a iné dobroty</td><td>podľa dohody a apetítu</td></tr>
        <tr><td>Individuálne požiadavky (napr. ohňostroj, špeciálne efekty, catering na mieru)</td><td>na vyžiadanie</td></tr>
    </table>
    <p>Všetky ceny sú orientačné a môžu sa líšiť podľa vašich želaní, počtu hostí a úrovne humoru. Pre nezáväznú kalkuláciu nás kontaktujte – radi vám pripravíme ponuku na mieru, ktorá vás (ani zosnulého) nezabije!</p>
    `,
    kontakt: `
        <h2>Kontakt</h2>
        <p>Pre viac informácií alebo v prípade potreby nás neváhajte kontaktovať:</p>
        <ul>
            <li>Telefón: <a href="tel:+421948509258">+421 948 509 258</a></li>
            <li>Email: <a href="mailto:stolaricmartin51@gmail.com">stolaricmartin51@gmail.com</a></li>
        </ul>
        <p>Sme vám k dispozícii 24 hodín denne, 7 dní v týždni.</p>
    `,
    recenzie: `
        <h2>Recenzie</h2>
    <blockquote>
        "Konečne pohreb, kde som sa nenudil. Ak by som mal ešte raz zomrieť, určite si ich objednám znova!" – Jozef Z. (cez médium)
    </blockquote>
    <blockquote>
        "Afterparty bola taká dobrá, že niektorí hostia zabudli, prečo vlastne prišli." – Peter K.
    </blockquote>
    <blockquote>
        "Moderátor rozosmial aj moju svokru. Škoda, že to nebolo na jej pohrebe." – Martina S.
    </blockquote>
    <blockquote>
        "Ohňostroj v tvare mena zosnulého? Susedia si mysleli, že oslavujeme narodeniny. Vlastne, v istom zmysle áno." – Anna V.
    </blockquote>
    <blockquote>
        "Keby som vedel, že pohreb môže byť takýto, možno by som sa naň prihlásil skôr." – anonymný návštevník
    </blockquote>
    <blockquote>
        "Miniatúrna urna s popolom z grilovačky bola najlepší suvenír. Teraz mám doma kúsok nebohého... a vôňu údeného." – Milan B.
    </blockquote>
    <blockquote>
        "DJ pustil 'Staying Alive' a chvíľu sme si neboli istí, či to nie je omyl." – Lucia D.
    </blockquote>
    <blockquote>
        "Moja babka povedala, že takýto pohreb ešte nezažila. A to už bola na viacerých... vrátane svojho vlastného!" – Tomáš F.
    </blockquote>
    <blockquote>
        "Všetko bolo tip-top, len škoda, že som si nemohol odniesť viac koláčov. Ale aspoň mám urnu." – anonymný milovník sladkého
    </blockquote>
    <blockquote>
        "Ak by som mal hodnotiť, dám 10/10. Už sa teším na ďalší... ale radšej nie svoj." – Viktor P.
    </blockquote>
    <blockquote>
        "Konečne pohreb, kde sa nikto nesťažoval na dĺžku obradu. Zosnulý bol ticho celú dobu." – anonym
    </blockquote>
    <blockquote>
        "Po tomto pohrebe mám pocit, že smrť nie je až taká tragédia. Hlavne keď je dobrý catering." – Zuzana L.
    </blockquote>
    `,
    partneri: `
        <h2>Partneri</h2>
        <ul>
            <li>Niečo</li>
            <li>Niečo</li>
            <li>Niečo</li>
        </ul>
    `,
    faq: `
        <h2>FAQ</h2>
        <blockquote>
            <strong>Čo mám robiť, keď mi zazvoní telefón o tretej ráno?</strong><br>
            Najskôr sa uistite, že to nie je telemarketing. Ak nie, pokojne nám zavolajte – sme tu pre vás 24/7 (aj keď pijeme kávu alebo spíme).
        </blockquote>
        <blockquote>
            <strong>Môžem si na pohreb priniesť vlastnú hudbu?</strong><br>
            Samozrejme! Od Beethovena po Metallicu, zvládneme všetko. Ak chcete, aby sme zahrali “Highway to Hell”, len nám to dajte vedieť vopred.
        </blockquote>
        <blockquote>
            <strong>Je vhodné na pohreb doniesť koláče?</strong><br>
            Áno! Koláče sú vítané. Ak ich prinesiete viac, naši zamestnanci budú veľmi vďační.
        </blockquote>
        <blockquote>
            <strong>Čo ak sa na pohrebe rozplačem?</strong><br>
            Máme pripravené vreckovky, objatia a ak treba, aj vtip na odľahčenie atmosféry.
        </blockquote>
        <blockquote>
            <strong>Môžem si objednať ohňostroj?</strong><br>
            Áno, ale odporúčame to konzultovať s miestnym hasičským zborom a susedmi.
        </blockquote>
        <blockquote>
            <strong>Čo ak sa zosnulý vráti?</strong><br>
            V tom prípade odporúčame natočiť video – bude to virálne!
        </blockquote>
    `,
};

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Only prevent default for menu links
        e.preventDefault();
        const page = link.getAttribute('data-page');
        content.classList.add('fade-out');
        setTimeout(() => {
            content.innerHTML = pages[page] || '<h2>Stránka neexistuje</h2>';
            content.classList.remove('fade-out');
            content.classList.add('fade-in');
            setTimeout(() => {
                content.classList.remove('fade-in');
            }, 400);
        }, 400);
        menu.classList.remove('open');
    });
});

// Handle SPA navigation for menu links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('data-page');
        switchPage(page);
        menu.classList.remove('open');
    });
});

// Delegate SPA navigation for links inside main-content
content.addEventListener('click', (e) => {
    const target = e.target.closest('a[data-page]');
    if (target) {
        e.preventDefault();
        const page = target.getAttribute('data-page');
        switchPage(page);
    }
});

// Animation and content switch logic
function switchPage(page) {
    content.classList.add('fade-out');
    setTimeout(() => {
        content.innerHTML = pages[page] || '<h2>Stránka neexistuje</h2>';
        content.classList.remove('fade-out');
        content.classList.add('fade-in');
        setTimeout(() => {
            content.classList.remove('fade-in');
        }, 400);
    }, 400);
}
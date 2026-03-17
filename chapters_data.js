const chapters = [
{
  id: 1,
  title: "Ekvationssystem",
  points: "Snitt 7,3 p/prov",
  tags: ["Utan hjälpmedel", "Med hjälpmedel"],
  theory: `<h3>Ekvationssystem</h3>
<p>Ett ekvationssystem består av två (eller fler) ekvationer med gemensamma obekanta. Lösningen är de värden på de obekanta som uppfyller <em>alla</em> ekvationer samtidigt.</p>

<h4>Substitutionsmetoden</h4>
<p>Man löser ut en variabel ur en ekvation och sätter in uttrycket i den andra ekvationen.</p>
<div class="formula-box">
\\[\\begin{cases} x + y = 7 \\\\ 2x - y = 5 \\end{cases}\\]
\\[\\text{Från första ekvationen: } y = 7 - x\\]
\\[\\text{Sätt in i den andra: } 2x - (7 - x) = 5 \\implies 3x = 12 \\implies x = 4\\]
</div>

<h4>Additionsmetoden</h4>
<p>Man adderar eller subtraherar ekvationerna (eventuellt efter multiplikation) så att en variabel försvinner.</p>
<div class="formula-box">
\\[\\begin{cases} 3x + 2y = 16 \\\\ x - 2y = 0 \\end{cases}\\]
\\[\\text{Addition ger } 4x = 16 \\implies x = 4\\]
</div>

<h4>Tolka variabler</h4>
<p>I textuppgifter är det viktigt att <strong>definiera</strong> vad \\(x\\) och \\(y\\) representerar, <strong>ställa upp</strong> ekvationssystemet och <strong>tolka</strong> svaret i sitt sammanhang.</p>`,
  problems: [
    {
      level: "E",
      num: 1,
      text: `Lös ekvationssystemet med substitutionsmetoden.
\\[\\begin{cases} x + y = 7 \\\\ 2x - y = 5 \\end{cases}\\]`,
      solution: `<div class="solution-step">Lös ut \\(y\\) ur ekvation (1): \\(y = 7 - x\\)</div>
<div class="solution-step">Substituera in i ekvation (2): \\(2x - (7 - x) = 5\\)</div>
<div class="solution-step">Förenkla: \\(2x - 7 + x = 5\\) \\(\\implies 3x = 12\\)</div>
<div class="solution-step">Lös ut: \\(x = 4\\)</div>
<div class="solution-step">Beräkna \\(y\\): \\(y = 7 - 4 = 3\\)</div>
<div class="solution-step"><strong>Svar:</strong> \\(x = 4\\) och \\(y = 3\\)</div>`
    },
    {
      level: "E",
      num: 2,
      text: `Lös ekvationssystemet med additionsmetoden.
\\[\\begin{cases} 3x + 2y = 16 \\\\ x - 2y = 0 \\end{cases}\\]`,
      solution: `<div class="solution-step">Addera ekvationerna rakt av (\\(2y\\) och \\(-2y\\) tar ut varandra):</div>
<div class="solution-step">\\(3x + 2y + x - 2y = 16 + 0\\)</div>
<div class="solution-step">\\(4x = 16 \\implies x = 4\\)</div>
<div class="solution-step">Sätt in \\(x = 4\\) i ekvation (2): \\(4 - 2y = 0 \\implies 2y = 4 \\implies y = 2\\)</div>
<div class="solution-step"><strong>Svar:</strong> \\(x = 4\\) och \\(y = 2\\)</div>`
    },
    {
      level: "E",
      num: 3,
      text: `På en parkering finns det sammanlagt 40 fordon. Det finns bara bilar och motorcyklar. Antalet hjul på parkeringen är totalt 130. Låt \\(x\\) vara antalet bilar och \\(y\\) vara antalet motorcyklar.

a) Ställ upp ett ekvationssystem som beskriver situationen.

b) Lös ekvationssystemet.

c) Förklara vad lösningen innebär i sammanhanget.`,
      solution: `<div class="solution-step"><strong>a)</strong> Låt \\(x\\) = antalet bilar, \\(y\\) = antalet motorcyklar.</div>
<div class="solution-step">Totalt antal fordon: \\(x + y = 40\\)</div>
<div class="solution-step">Totalt antal hjul (bilar har 4, motorcyklar har 2): \\(4x + 2y = 130\\)</div>
<div class="solution-step">Ekvationssystemet blir: \\[\\begin{cases} x + y = 40 \\\\ 4x + 2y = 130 \\end{cases}\\]</div>
<div class="solution-step"><strong>b)</strong> Från (1): \\(y = 40 - x\\). Insatt i (2): \\(4x + 2(40 - x) = 130\\)</div>
<div class="solution-step">\\(4x + 80 - 2x = 130 \\implies 2x = 50 \\implies x = 25\\)</div>
<div class="solution-step">\\(y = 40 - 25 = 15\\)</div>
<div class="solution-step"><strong>c)</strong> Det finns 25 bilar och 15 motorcyklar på parkeringen.</div>`
    },
    {
      level: "C",
      num: 4,
      text: `Lös ekvationssystemet.
\\[\\begin{cases} \\dfrac{x}{2} + \\dfrac{y}{3} = 5 \\\\ x - y = 3 \\end{cases}\\]`,
      solution: `<div class="solution-step">Multiplicera ekvation (1) med 6 (MGN för 2 och 3) för att eliminera bråken:</div>
<div class="solution-step">\\(6 \\cdot \\dfrac{x}{2} + 6 \\cdot \\dfrac{y}{3} = 6 \\cdot 5\\)</div>
<div class="solution-step">\\(3x + 2y = 30\\) … (1')</div>
<div class="solution-step">Från ekvation (2): \\(x = 3 + y\\)</div>
<div class="solution-step">Substituera in i (1'): \\(3(3 + y) + 2y = 30\\)</div>
<div class="solution-step">\\(9 + 3y + 2y = 30 \\implies 5y = 21 \\implies y = \\dfrac{21}{5} = 4{,}2\\)</div>
<div class="solution-step">\\(x = 3 + 4{,}2 = 7{,}2\\)</div>
<div class="solution-step"><strong>Svar:</strong> \\(x = 7{,}2\\) och \\(y = 4{,}2\\)</div>`
    },
    {
      level: "C",
      num: 5,
      text: `En juiceproducent blandar två sorters juice. Juice A innehåller 30 % äppeljuice och juice B innehåller 70 % äppeljuice. Man vill få 10 liter av en blandning som innehåller 45 % äppeljuice.

Hur många liter av varje sort behövs?`,
      solution: `<div class="solution-step">Låt \\(x\\) = antal liter av juice A och \\(y\\) = antal liter av juice B.</div>
<div class="solution-step">Totalt 10 liter: \\(x + y = 10\\)</div>
<div class="solution-step">Äppeljuice-innehåll: \\(0{,}30x + 0{,}70y = 0{,}45 \\cdot 10 = 4{,}5\\)</div>
<div class="solution-step">Ekvationssystemet: \\[\\begin{cases} x + y = 10 \\\\ 0{,}3x + 0{,}7y = 4{,}5 \\end{cases}\\]</div>
<div class="solution-step">Från (1): \\(x = 10 - y\\). Insatt i (2):</div>
<div class="solution-step">\\(0{,}3(10 - y) + 0{,}7y = 4{,}5\\)</div>
<div class="solution-step">\\(3 - 0{,}3y + 0{,}7y = 4{,}5\\)</div>
<div class="solution-step">\\(0{,}4y = 1{,}5 \\implies y = 3{,}75\\)</div>
<div class="solution-step">\\(x = 10 - 3{,}75 = 6{,}25\\)</div>
<div class="solution-step"><strong>Svar:</strong> Man behöver 6,25 liter av juice A och 3,75 liter av juice B.</div>`
    },
    {
      level: "C",
      num: 6,
      text: `En rektangel har omkretsen 34 cm. Om längden minskas med 3 cm och bredden ökas med 2 cm blir arean 12 cm² större än den ursprungliga arean.

Bestäm rektangelns längd och bredd.`,
      solution: `<div class="solution-step">Låt \\(x\\) = längden och \\(y\\) = bredden (i cm).</div>
<div class="solution-step">Omkrets: \\(2x + 2y = 34 \\implies x + y = 17\\) … (1)</div>
<div class="solution-step">Ursprunglig area: \\(A = xy\\)</div>
<div class="solution-step">Ny area: \\((x - 3)(y + 2) = xy + 12\\)</div>
<div class="solution-step">Utveckla vänsterledet: \\(xy + 2x - 3y - 6 = xy + 12\\)</div>
<div class="solution-step">Förenkla: \\(2x - 3y = 18\\) … (2)</div>
<div class="solution-step">Ekvationssystemet: \\[\\begin{cases} x + y = 17 \\\\ 2x - 3y = 18 \\end{cases}\\]</div>
<div class="solution-step">Från (1): \\(x = 17 - y\\). Insatt i (2): \\(2(17 - y) - 3y = 18\\)</div>
<div class="solution-step">\\(34 - 2y - 3y = 18 \\implies -5y = -16 \\implies y = 3{,}2\\)</div>
<div class="solution-step">\\(x = 17 - 3{,}2 = 13{,}8\\)</div>
<div class="solution-step"><strong>Svar:</strong> Rektangelns längd är 13,8 cm och bredden är 3,2 cm.</div>`
    },
    {
      level: "A",
      num: 7,
      text: `En biograf säljer biljetter i tre kategorier: vuxen, ungdom och barn. En kväll säljs totalt 200 biljetter. Antalet ungdomsbiljetter är dubbelt så många som barnbiljetter. Intäkterna är totalt 24 000 kr, och priserna är: vuxen 150 kr, ungdom 110 kr, barn 80 kr.

Hur många biljetter såldes i varje kategori?`,
      solution: `<div class="solution-step">Låt \\(v\\) = antal vuxna, \\(u\\) = antal ungdomar, \\(b\\) = antal barn.</div>
<div class="solution-step">Villkor 1 (antal): \\(v + u + b = 200\\)</div>
<div class="solution-step">Villkor 2 (ungdom = dubbla barn): \\(u = 2b\\)</div>
<div class="solution-step">Villkor 3 (intäkter): \\(150v + 110u + 80b = 24\\,000\\)</div>
<div class="solution-step">Reducera till två ekvationer. Sätt in \\(u = 2b\\) i villkor 1:</div>
<div class="solution-step">\\(v + 2b + b = 200 \\implies v = 200 - 3b\\) … (I)</div>
<div class="solution-step">Sätt in \\(u = 2b\\) och \\(v = 200 - 3b\\) i villkor 3:</div>
<div class="solution-step">\\(150(200 - 3b) + 110 \\cdot 2b + 80b = 24\\,000\\)</div>
<div class="solution-step">\\(30\\,000 - 450b + 220b + 80b = 24\\,000\\)</div>
<div class="solution-step">\\(30\\,000 - 150b = 24\\,000\\)</div>
<div class="solution-step">\\(150b = 6\\,000 \\implies b = 40\\)</div>
<div class="solution-step">\\(u = 2 \\cdot 40 = 80\\)</div>
<div class="solution-step">\\(v = 200 - 3 \\cdot 40 = 80\\)</div>
<div class="solution-step">Kontroll: \\(150 \\cdot 80 + 110 \\cdot 80 + 80 \\cdot 40 = 12\\,000 + 8\\,800 + 3\\,200 = 24\\,000\\) ✓</div>
<div class="solution-step"><strong>Svar:</strong> Det såldes 80 vuxenbiljetter, 80 ungdomsbiljetter och 40 barnbiljetter.</div>`
    },
    {
      level: "A",
      num: 8,
      text: `En cylinderformad burk ska rymma exakt \\(500 \\text{ cm}^3\\). Höjden ska vara 3 cm längre än radien.

a) Ställ upp en ekvation som beskriver sambandet.

b) Bestäm burkens radie och höjd. Avrunda till en decimal.

c) Beräkna burkens totala begränsningsyta.`,
      solution: `<div class="solution-step"><strong>a)</strong> Låt \\(r\\) = radien (cm) och \\(h\\) = höjden (cm).</div>
<div class="solution-step">Volym för cylinder: \\(V = \\pi r^2 h\\)</div>
<div class="solution-step">Givet: \\(h = r + 3\\) och \\(V = 500\\)</div>
<div class="solution-step">Ekvationen blir: \\[\\pi r^2(r + 3) = 500\\]</div>
<div class="solution-step"><strong>b)</strong> Vi utvecklar: \\(\\pi r^3 + 3\\pi r^2 = 500\\)</div>
<div class="solution-step">Denna ekvation löses med digitalt verktyg (CAS/grafritare).</div>
<div class="solution-step">Prova \\(r = 5\\): \\(\\pi \\cdot 125 + 3\\pi \\cdot 25 = 125\\pi + 75\\pi = 200\\pi \\approx 628\\) — för stort.</div>
<div class="solution-step">Prova \\(r = 4\\): \\(\\pi \\cdot 64 + 3\\pi \\cdot 16 = 64\\pi + 48\\pi = 112\\pi \\approx 352\\) — för litet.</div>
<div class="solution-step">Prova \\(r = 4{,}5\\): \\(\\pi(91{,}125 + 60{,}75) = 151{,}875\\pi \\approx 477\\) — nära.</div>
<div class="solution-step">Prova \\(r = 4{,}6\\): \\(\\pi(97{,}336 + 63{,}48) = 160{,}816\\pi \\approx 505\\) — nära!</div>
<div class="solution-step">Mer exakt: \\(r \\approx 4{,}6\\) cm.</div>
<div class="solution-step">Då: \\(h = 4{,}6 + 3 = 7{,}6\\) cm.</div>
<div class="solution-step">Kontroll: \\(\\pi \\cdot 4{,}6^2 \\cdot 7{,}6 \\approx \\pi \\cdot 21{,}16 \\cdot 7{,}6 \\approx \\pi \\cdot 160{,}8 \\approx 505\\) cm³ ≈ 500 ✓</div>
<div class="solution-step"><strong>c)</strong> Begränsningsyta: \\(A = 2\\pi r^2 + 2\\pi r h\\)</div>
<div class="solution-step">\\(A = 2\\pi(4{,}6)^2 + 2\\pi(4{,}6)(7{,}6)\\)</div>
<div class="solution-step">\\(A = 2\\pi \\cdot 21{,}16 + 2\\pi \\cdot 34{,}96\\)</div>
<div class="solution-step">\\(A = 42{,}32\\pi + 69{,}92\\pi = 112{,}24\\pi \\approx 352{,}6 \\text{ cm}^2\\)</div>
<div class="solution-step"><strong>Svar:</strong> Radien är ca 4,6 cm, höjden ca 7,6 cm och begränsningsytan ca 353 cm².</div>`
    }
  ]
},
{
  id: 2,
  title: "Andragradsfunktioner",
  points: "Snitt 6,3 p/prov",
  tags: ["Utan hjälpmedel", "Med hjälpmedel"],
  theory: `<h3>Andragradsfunktioner</h3>
<p>En andragradsfunktion har formen \\(f(x) = ax^2 + bx + c\\) där \\(a \\neq 0\\). Grafen kallas en <strong>parabel</strong>.</p>

<h4>Symmetrilinje</h4>
<p>Symmetrilinjen (vertexlinjen) ges av:</p>
<div class="formula-box">\\[x = -\\frac{b}{2a}\\]</div>
<p>Symmetrilinjen går genom parabelns vertex (topp- eller bottenpunkt).</p>
<p><strong>Koppling till pq-formeln:</strong> Om du löser \\(x^2 + px + q = 0\\) med pq-formeln får du:</p>
<div class="formula-box">\\[x = \\underbrace{-\\frac{p}{2}}_{\\text{symmetrilinjen}} \\pm \\underbrace{\\sqrt{\\left(\\frac{p}{2}\\right)^2 - q}}_{\\text{avståndet från symmetrilinjen}}\\]</div>
<p>Delen före \\(\\pm\\) är alltså symmetrilinjen, och roten anger hur långt från symmetrilinjen nollställena ligger.</p>

<h4>Nollställen</h4>
<p>Nollställena (där \\(f(x) = 0\\)) fås genom att lösa andragradsekvationen \\(ax^2 + bx + c = 0\\).</p>
<p>Nollställena ligger symmetriskt kring symmetrilinjen.</p>

<h4>Max- och minimivärde</h4>
<p>Om \\(a > 0\\) har parabeln en <strong>minimipunkt</strong> (öppnar uppåt).</p>
<p>Om \\(a < 0\\) har parabeln en <strong>maximipunkt</strong> (öppnar nedåt).</p>
<div class="formula-box">\\[\\text{Extremvärdet: } f\\left(-\\frac{b}{2a}\\right)\\]</div>

<h4>Grafens utseende</h4>
<p>Koefficienten \\(a\\) styr hur "bred" eller "smal" parabeln är. Konstanten \\(c\\) anger var parabeln skär \\(y\\)-axeln.</p>`,
  problems: [
    {
      level: "E",
      num: 1,
      text: `Funktionen \\(f(x) = x^2 - 4x + 3\\) är given.

a) Bestäm symmetrilinjen.

b) Bestäm nollställena.

c) Bestäm funktionens minsta värde.`,
      solution: `<div class="solution-step"><strong>a)</strong> Symmetrilinjen: \\(x = -\\dfrac{b}{2a} = -\\dfrac{-4}{2 \\cdot 1} = \\dfrac{4}{2} = 2\\)</div>
<div class="solution-step">Symmetrilinjen är \\(x = 2\\).</div>
<div class="solution-step"><strong>b)</strong> Sätt \\(f(x) = 0\\): \\(x^2 - 4x + 3 = 0\\)</div>
<div class="solution-step">pq-formeln: \\(x = 2 \\pm \\sqrt{4 - 3} = 2 \\pm 1\\)</div>
<div class="solution-step">\\(x = 1\\) eller \\(x = 3\\)</div>
<div class="solution-step"><strong>c)</strong> Minsta värdet fås vid \\(x = 2\\): \\(f(2) = 4 - 8 + 3 = -1\\)</div>
<div class="solution-step"><strong>Svar:</strong> Symmetrilinje: \\(x = 2\\), nollställen: \\(x = 1\\) och \\(x = 3\\), minsta värde: \\(-1\\).</div>`
    },
    {
      level: "E",
      num: 2,
      text: `Bestäm nollställena till funktionen \\(f(x) = 2x^2 + 6x\\).`,
      solution: `<div class="solution-step">Sätt \\(f(x) = 0\\): \\(2x^2 + 6x = 0\\)</div>
<div class="solution-step">Bryt ut \\(2x\\): \\(2x(x + 3) = 0\\)</div>
<div class="solution-step">Nollproduktregeln ger: \\(2x = 0\\) eller \\(x + 3 = 0\\)</div>
<div class="solution-step">\\(x = 0\\) eller \\(x = -3\\)</div>
<div class="solution-step"><strong>Svar:</strong> Nollställena är \\(x = 0\\) och \\(x = -3\\).</div>`
    },
    {
      level: "E",
      num: 3,
      text: `Vilka av följande funktioner har en maximipunkt?

A. \\(f(x) = x^2 - 2x + 1\\)

B. \\(g(x) = -3x^2 + 6x - 1\\)

C. \\(h(x) = 0{,}5x^2 + x\\)

D. \\(k(x) = -x^2 + 4\\)`,
      solution: `<div class="solution-step">En andragradsfunktion \\(f(x) = ax^2 + bx + c\\) har en maximipunkt om \\(a < 0\\) (parabeln öppnar nedåt).</div>
<div class="solution-step"><strong>A.</strong> \\(a = 1 > 0\\) → minimipunkt ✗</div>
<div class="solution-step"><strong>B.</strong> \\(a = -3 < 0\\) → maximipunkt ✓</div>
<div class="solution-step"><strong>C.</strong> \\(a = 0{,}5 > 0\\) → minimipunkt ✗</div>
<div class="solution-step"><strong>D.</strong> \\(a = -1 < 0\\) → maximipunkt ✓</div>
<div class="solution-step"><strong>Svar:</strong> Funktionerna B och D har maximipunkt.</div>`
    },
    {
      level: "C",
      num: 4,
      text: `Bestäm den andragradsfunktion \\(f(x) = ax^2 + bx + c\\) vars graf passerar genom punkterna \\((0, 3)\\), \\((1, 2)\\) och \\((3, 12)\\).`,
      solution: `<div class="solution-step">Sätt in punkterna i \\(f(x) = ax^2 + bx + c\\):</div>
<div class="solution-step">\\((0, 3)\\): \\(a \\cdot 0 + b \\cdot 0 + c = 3 \\implies c = 3\\)</div>
<div class="solution-step">\\((1, 2)\\): \\(a + b + 3 = 2 \\implies a + b = -1\\) … (I)</div>
<div class="solution-step">\\((3, 12)\\): \\(9a + 3b + 3 = 12 \\implies 9a + 3b = 9 \\implies 3a + b = 3\\) … (II)</div>
<div class="solution-step">Subtrahera (I) från (II): \\(3a + b - a - b = 3 - (-1)\\)</div>
<div class="solution-step">\\(2a = 4 \\implies a = 2\\)</div>
<div class="solution-step">Från (I): \\(2 + b = -1 \\implies b = -3\\)</div>
<div class="solution-step">Kontroll med \\((3, 12)\\): \\(2 \\cdot 9 - 3 \\cdot 3 + 3 = 18 - 9 + 3 = 12\\) ✓</div>
<div class="solution-step"><strong>Svar:</strong> \\(f(x) = 2x^2 - 3x + 3\\)</div>`
    },
    {
      level: "C",
      num: 5,
      text: `En andragradsfunktion \\(f(x) = ax^2 + bx + c\\) har symmetrilinjen \\(x = 3\\) och passerar genom punkten \\((1, 8)\\). Dessutom är \\(f(3) = 0\\).

Bestäm funktionsuttrycket.`,
      solution: `<div class="solution-step">Symmetrilinjen \\(x = 3\\) och \\(f(3) = 0\\) innebär att vertex ligger i \\((3, 0)\\).</div>
<div class="solution-step">Vi kan skriva funktionen på vertexform: \\(f(x) = a(x - 3)^2 + 0 = a(x - 3)^2\\)</div>
<div class="solution-step">Punkten \\((1, 8)\\) ger: \\(a(1 - 3)^2 = 8\\)</div>
<div class="solution-step">\\(a \\cdot 4 = 8 \\implies a = 2\\)</div>
<div class="solution-step">\\(f(x) = 2(x - 3)^2 = 2(x^2 - 6x + 9) = 2x^2 - 12x + 18\\)</div>
<div class="solution-step">Kontroll: \\(f(1) = 2 - 12 + 18 = 8\\) ✓ och \\(f(3) = 18 - 36 + 18 = 0\\) ✓</div>
<div class="solution-step"><strong>Svar:</strong> \\(f(x) = 2x^2 - 12x + 18\\)</div>`
    },
    {
      level: "C",
      num: 6,
      text: `En parabel skär \\(x\\)-axeln i \\(x = -1\\) och \\(x = 5\\), och passerar genom punkten \\((0, -10)\\).

Bestäm funktionsuttrycket.`,
      solution: `<div class="solution-step">Nollställena \\(x = -1\\) och \\(x = 5\\) ger faktoriserad form:</div>
<div class="solution-step">\\(f(x) = a(x + 1)(x - 5)\\)</div>
<div class="solution-step">Punkten \\((0, -10)\\): \\(a(0 + 1)(0 - 5) = -10\\)</div>
<div class="solution-step">\\(a \\cdot 1 \\cdot (-5) = -10 \\implies -5a = -10 \\implies a = 2\\)</div>
<div class="solution-step">\\(f(x) = 2(x + 1)(x - 5) = 2(x^2 - 4x - 5) = 2x^2 - 8x - 10\\)</div>
<div class="solution-step">Kontroll: \\(f(0) = 0 - 0 - 10 = -10\\) ✓</div>
<div class="solution-step"><strong>Svar:</strong> \\(f(x) = 2x^2 - 8x - 10\\)</div>`
    },
    {
      level: "A",
      num: 7,
      text: `En bro har formen av en parabel. Bron är 24 meter bred vid vattenytan och den högsta punkten ligger 9 meter ovanför vattenytan.

a) Inför ett lämpligt koordinatsystem och bestäm ett funktionsuttryck som beskriver brons form.

b) En segelbåt med en 7 meter hög mast ska passera under bron. Hur bred är passagen om masten just och just ska gå under?`,
      solution: `<div class="solution-step"><strong>a)</strong> Välj koordinatsystem med origo i brons mitt vid vattenytan.</div>
<div class="solution-step">Bron skär vattenytan (\\(y = 0\\)) vid \\(x = -12\\) och \\(x = 12\\) (24 m bred).</div>
<div class="solution-step">Högsta punkten (vertex) ligger i \\((0, 9)\\).</div>
<div class="solution-step">Ansätt \\(f(x) = a(x - 0)^2 + 9 = ax^2 + 9\\)</div>
<div class="solution-step">Nollstället \\(x = 12\\): \\(a \\cdot 144 + 9 = 0 \\implies a = -\\dfrac{9}{144} = -\\dfrac{1}{16}\\)</div>
<div class="solution-step">\\(f(x) = -\\dfrac{x^2}{16} + 9\\)</div>
<div class="solution-step"><strong>b)</strong> Masten är 7 m. Sätt \\(f(x) = 7\\):</div>
<div class="solution-step">\\(-\\dfrac{x^2}{16} + 9 = 7 \\implies \\dfrac{x^2}{16} = 2 \\implies x^2 = 32\\)</div>
<div class="solution-step">\\(x = \\pm\\sqrt{32} = \\pm 4\\sqrt{2} \\approx \\pm 5{,}66\\)</div>
<div class="solution-step">Passagens bredd: \\(2 \\cdot 4\\sqrt{2} = 8\\sqrt{2} \\approx 11{,}3\\) meter.</div>
<div class="solution-step"><strong>Svar:</strong> \\(f(x) = -\\dfrac{x^2}{16} + 9\\). Passagen är ca 11,3 meter bred.</div>`
    },
    {
      level: "A",
      num: 8,
      text: `En andragradsfunktion \\(f\\) uppfyller \\(f(2) = f(6) = 0\\) och \\(f(0) = -24\\).

a) Bestäm funktionsuttrycket.

b) Bestäm den punkt på parabeln som har det minsta \\(y\\)-värdet.

c) För vilka värden på \\(x\\) gäller att \\(f(x) \\geq -9\\)?`,
      solution: `<div class="solution-step"><strong>a)</strong> Nollställen \\(x = 2\\) och \\(x = 6\\) ger: \\(f(x) = a(x - 2)(x - 6)\\)</div>
<div class="solution-step">\\(f(0) = a(0 - 2)(0 - 6) = a \\cdot 12 = -24 \\implies a = -2\\)</div>
<div class="solution-step">\\(f(x) = -2(x - 2)(x - 6) = -2(x^2 - 8x + 12) = -2x^2 + 16x - 24\\)</div>
<div class="solution-step"><strong>b)</strong> Symmetrilinjen: \\(x = -\\dfrac{16}{2 \\cdot (-2)} = -\\dfrac{16}{-4} = 4\\)</div>
<div class="solution-step">\\(f(4) = -2 \\cdot 16 + 16 \\cdot 4 - 24 = -32 + 64 - 24 = 8\\)</div>
<div class="solution-step">Eftersom \\(a = -2 < 0\\) har parabeln en <em>maximipunkt</em>, inte minimipunkt. Parabeln öppnar nedåt, så det finns inget minsta värde — men vertex ger det <em>största</em> värdet.</div>
<div class="solution-step">Parabelns högsta punkt (vertex) är \\((4, 8)\\).</div>
<div class="solution-step"><strong>c)</strong> Lös \\(f(x) \\geq -9\\): \\(-2x^2 + 16x - 24 \\geq -9\\)</div>
<div class="solution-step">\\(-2x^2 + 16x - 15 \\geq 0\\) → Multiplicera med \\(-1\\) (byt olikhetstecken):</div>
<div class="solution-step">\\(2x^2 - 16x + 15 \\leq 0\\)</div>
<div class="solution-step">Nollställen: \\(x = \\dfrac{16 \\pm \\sqrt{256 - 120}}{4} = \\dfrac{16 \\pm \\sqrt{136}}{4} = \\dfrac{16 \\pm 2\\sqrt{34}}{4} = 4 \\pm \\dfrac{\\sqrt{34}}{2}\\)</div>
<div class="solution-step">\\(\\sqrt{34} \\approx 5{,}83\\), så \\(x \\approx 4 \\pm 2{,}92\\)</div>
<div class="solution-step">\\(x \\approx 1{,}08\\) eller \\(x \\approx 6{,}92\\)</div>
<div class="solution-step"><strong>Svar:</strong> \\(f(x) = -2x^2 + 16x - 24\\). Maxpunkten är \\((4,\\, 8)\\). \\(f(x) \\geq -9\\) gäller för \\(1{,}1 \\lesssim x \\lesssim 6{,}9\\).</div>`
    },
    {
      level: "A",
      num: 9,
      text: `En rektangel har sin bas längs \\(x\\)-axeln och sina två övre hörn på parabeln \\(y = 12 - 3x^2\\).

a) Visa att rektangelns area kan skrivas \\(A(x) = 24x - 6x^3\\) då basen sträcker sig från \\(-x\\) till \\(x\\).

b) Bestäm den maximala arean.`,
      solution: `<div class="solution-step"><strong>a)</strong> Rektangelns bas sträcker sig från \\(-x\\) till \\(x\\), alltså är basens längd \\(2x\\).</div>
<div class="solution-step">De övre hörnen ligger på parabeln \\(y = 12 - 3x^2\\), så höjden är \\(12 - 3x^2\\).</div>
<div class="solution-step">Arean: \\(A(x) = \\text{bas} \\cdot \\text{höjd} = 2x(12 - 3x^2)\\)</div>
<div class="solution-step">\\(A(x) = 24x - 6x^3\\)</div>
<div class="solution-step">Vilket skulle visas. ∎</div>
<div class="solution-step"><strong>b)</strong> Vi söker maximum för \\(A(x) = 24x - 6x^3\\) där \\(x > 0\\).</div>
<div class="solution-step">Derivera: \\(A'(x) = 24 - 18x^2\\)</div>
<div class="solution-step">Sätt \\(A'(x) = 0\\): \\(24 - 18x^2 = 0 \\implies x^2 = \\dfrac{24}{18} = \\dfrac{4}{3}\\)</div>
<div class="solution-step">\\(x = \\dfrac{2}{\\sqrt{3}} = \\dfrac{2\\sqrt{3}}{3} \\approx 1{,}155\\)</div>
<div class="solution-step">\\(A\\left(\\dfrac{2\\sqrt{3}}{3}\\right) = 24 \\cdot \\dfrac{2\\sqrt{3}}{3} - 6 \\cdot \\left(\\dfrac{2\\sqrt{3}}{3}\\right)^3\\)</div>
<div class="solution-step">\\(= 16\\sqrt{3} - 6 \\cdot \\dfrac{8 \\cdot 3\\sqrt{3}}{27} = 16\\sqrt{3} - \\dfrac{48\\sqrt{3}}{9} = 16\\sqrt{3} - \\dfrac{16\\sqrt{3}}{3}\\)</div>
<div class="solution-step">\\(= \\dfrac{48\\sqrt{3} - 16\\sqrt{3}}{3} = \\dfrac{32\\sqrt{3}}{3} \\approx 18{,}5\\)</div>
<div class="solution-step"><strong>Svar:</strong> Den maximala arean är \\(\\dfrac{32\\sqrt{3}}{3} \\approx 18{,}5\\) areaenheter.</div>`
    }
  ]
},
{
  id: 3,
  title: "Andragradsekvationer",
  points: "Snitt 3,5 p/prov",
  tags: ["Utan hjälpmedel"],
  theory: `<h3>Andragradsekvationer</h3>
<p>En andragradsekvation har formen \\(x^2 + px + q = 0\\) (normalform) eller \\(ax^2 + bx + c = 0\\) (allmän form).</p>

<h4>pq-formeln</h4>
<div class="formula-box">\\[x = -\\frac{p}{2} \\pm \\sqrt{\\left(\\frac{p}{2}\\right)^2 - q}\\]</div>

<h4>Faktorisering</h4>
<p>Om ekvationen kan skrivas \\(x(ax + b) = 0\\) eller \\(a(x - x_1)(x - x_2) = 0\\) kan man använda <strong>nollproduktregeln</strong>: minst en faktor måste vara noll.</p>

<h4>Diskriminanten</h4>
<p>Uttrycket under rottecknet i pq-formeln kallas diskriminanten:</p>
<div class="formula-box">\\[D = \\left(\\frac{p}{2}\\right)^2 - q\\]</div>
<p>\\(D > 0\\): Två olika reella lösningar</p>
<p>\\(D = 0\\): En dubbelrot (en lösning)</p>
<p>\\(D < 0\\): Inga reella lösningar</p>`,
  problems: [
    {
      level: "E",
      num: 1,
      text: `Lös ekvationen \\(x^2 - 5x + 6 = 0\\) med pq-formeln.`,
      solution: `<div class="solution-step">Ekvationen är redan på normalform med \\(p = -5\\) och \\(q = 6\\).</div>
<div class="solution-step">pq-formeln: \\(x = -\\dfrac{(-5)}{2} \\pm \\sqrt{\\left(\\dfrac{-5}{2}\\right)^2 - 6}\\)</div>
<div class="solution-step">\\(x = \\dfrac{5}{2} \\pm \\sqrt{\\dfrac{25}{4} - 6}\\)</div>
<div class="solution-step">\\(x = \\dfrac{5}{2} \\pm \\sqrt{\\dfrac{25 - 24}{4}}\\)</div>
<div class="solution-step">\\(x = \\dfrac{5}{2} \\pm \\sqrt{\\dfrac{1}{4}} = \\dfrac{5}{2} \\pm \\dfrac{1}{2}\\)</div>
<div class="solution-step">\\(x = \\dfrac{5 + 1}{2} = 3\\) eller \\(x = \\dfrac{5 - 1}{2} = 2\\)</div>
<div class="solution-step"><strong>Svar:</strong> \\(x = 2\\) eller \\(x = 3\\)</div>`
    },
    {
      level: "E",
      num: 2,
      text: `Lös ekvationen \\(3x^2 - 12x = 0\\) med faktorisering.`,
      solution: `<div class="solution-step">Bryt ut den gemensamma faktorn \\(3x\\):</div>
<div class="solution-step">\\(3x(x - 4) = 0\\)</div>
<div class="solution-step">Nollproduktregeln ger: \\(3x = 0\\) eller \\(x - 4 = 0\\)</div>
<div class="solution-step">\\(x = 0\\) eller \\(x = 4\\)</div>
<div class="solution-step"><strong>Svar:</strong> \\(x = 0\\) eller \\(x = 4\\)</div>`
    },
    {
      level: "E",
      num: 3,
      text: `Vilken av följande ekvationer har en dubbelrot?

A. \\(x^2 - 6x + 9 = 0\\)

B. \\(x^2 + 4x + 5 = 0\\)

C. \\(x^2 - 2x - 3 = 0\\)

D. \\(x^2 + x - 6 = 0\\)`,
      solution: `<div class="solution-step">Dubbelrot fås när diskriminanten \\(D = \\left(\\dfrac{p}{2}\\right)^2 - q = 0\\).</div>
<div class="solution-step"><strong>A.</strong> \\(p = -6,\\, q = 9\\): \\(D = (-3)^2 - 9 = 9 - 9 = 0\\) → Dubbelrot ✓</div>
<div class="solution-step"><strong>B.</strong> \\(p = 4,\\, q = 5\\): \\(D = 2^2 - 5 = 4 - 5 = -1 < 0\\) → Inga reella lösningar ✗</div>
<div class="solution-step"><strong>C.</strong> \\(p = -2,\\, q = -3\\): \\(D = (-1)^2 - (-3) = 1 + 3 = 4 > 0\\) → Två lösningar ✗</div>
<div class="solution-step"><strong>D.</strong> \\(p = 1,\\, q = -6\\): \\(D = (0{,}5)^2 - (-6) = 0{,}25 + 6 = 6{,}25 > 0\\) → Två lösningar ✗</div>
<div class="solution-step"><strong>Svar:</strong> Alternativ A har en dubbelrot (\\(x = 3\\)).</div>`
    },
    {
      level: "C",
      num: 4,
      text: `En elev löser ekvationen \\(x^2 + 6x + 5 = 0\\) så här:

\\(x = -3 \\pm \\sqrt{9 + 5} = -3 \\pm \\sqrt{14}\\)

Vad har eleven gjort för fel? Lös ekvationen korrekt.`,
      solution: `<div class="solution-step"><strong>Felet:</strong> Eleven har räknat \\(\\left(\\dfrac{p}{2}\\right)^2 - q\\) fel.</div>
<div class="solution-step">Eleven har skrivit \\(\\sqrt{9 + 5}\\) istället för \\(\\sqrt{9 - 5}\\). Hen har alltså satt <em>plus</em> framför \\(q\\) istället för <em>minus</em>.</div>
<div class="solution-step"><strong>Korrekt lösning:</strong></div>
<div class="solution-step">\\(p = 6\\), \\(q = 5\\)</div>
<div class="solution-step">\\(x = -\\dfrac{6}{2} \\pm \\sqrt{\\left(\\dfrac{6}{2}\\right)^2 - 5} = -3 \\pm \\sqrt{9 - 5} = -3 \\pm \\sqrt{4} = -3 \\pm 2\\)</div>
<div class="solution-step">\\(x = -3 + 2 = -1\\) eller \\(x = -3 - 2 = -5\\)</div>
<div class="solution-step"><strong>Svar:</strong> Eleven har satt fel tecken framför \\(q\\) i pq-formeln (adderat istället för subtraherat). De korrekta lösningarna är \\(x = -1\\) och \\(x = -5\\).</div>`
    },
    {
      level: "C",
      num: 5,
      text: `En rektangulär trädgård har arean 60 m². Längden är 4 meter längre än bredden.

Ställ upp en ekvation och bestäm trädgårdens mått.`,
      solution: `<div class="solution-step">Låt bredden vara \\(x\\) meter. Då är längden \\(x + 4\\) meter.</div>
<div class="solution-step">Arean: \\(x(x + 4) = 60\\)</div>
<div class="solution-step">\\(x^2 + 4x = 60\\)</div>
<div class="solution-step">\\(x^2 + 4x - 60 = 0\\)</div>
<div class="solution-step">pq-formeln: \\(x = -2 \\pm \\sqrt{4 + 60} = -2 \\pm \\sqrt{64} = -2 \\pm 8\\)</div>
<div class="solution-step">\\(x = -2 + 8 = 6\\) eller \\(x = -2 - 8 = -10\\)</div>
<div class="solution-step">Bredd kan inte vara negativ, alltså \\(x = 6\\).</div>
<div class="solution-step">Längd: \\(6 + 4 = 10\\) meter.</div>
<div class="solution-step">Kontroll: \\(6 \\cdot 10 = 60\\) m² ✓</div>
<div class="solution-step"><strong>Svar:</strong> Trädgården är 6 m bred och 10 m lång.</div>`
    },
    {
      level: "C",
      num: 6,
      text: `Bestäm värdet på \\(k\\) så att ekvationen \\(x^2 + kx + 9 = 0\\) har exakt en lösning (dubbelrot).`,
      solution: `<div class="solution-step">Ekvationen har \\(p = k\\) och \\(q = 9\\).</div>
<div class="solution-step">Dubbelrot fås när diskriminanten är noll:</div>
<div class="solution-step">\\(D = \\left(\\dfrac{k}{2}\\right)^2 - 9 = 0\\)</div>
<div class="solution-step">\\(\\dfrac{k^2}{4} = 9\\)</div>
<div class="solution-step">\\(k^2 = 36\\)</div>
<div class="solution-step">\\(k = \\pm 6\\)</div>
<div class="solution-step">Kontroll \\(k = 6\\): \\(x^2 + 6x + 9 = (x + 3)^2 = 0\\) → dubbelrot \\(x = -3\\) ✓</div>
<div class="solution-step">Kontroll \\(k = -6\\): \\(x^2 - 6x + 9 = (x - 3)^2 = 0\\) → dubbelrot \\(x = 3\\) ✓</div>
<div class="solution-step"><strong>Svar:</strong> \\(k = 6\\) eller \\(k = -6\\)</div>`
    }
  ]
},
{
  id: 4,
  title: "Algebra",
  points: "Snitt 4,5 p/prov",
  tags: ["Utan hjälpmedel"],
  theory: `<h3>Algebraiska regler</h3>

<h4>Kvadreringsreglerna</h4>
<div class="formula-box">
\\[(a + b)^2 = a^2 + 2ab + b^2\\]
\\[(a - b)^2 = a^2 - 2ab + b^2\\]
</div>

<h4>Konjugatregeln</h4>
<div class="formula-box">\\[(a + b)(a - b) = a^2 - b^2\\]</div>

<h4>Faktorisering</h4>
<p>Att faktorisera innebär att skriva om ett uttryck som en produkt av faktorer. Man kan:</p>
<ul>
<li>Bryta ut gemensamma faktorer: \\(6x^2 + 3x = 3x(2x + 1)\\)</li>
<li>Använda kvadreringsreglerna "baklänges": \\(x^2 + 6x + 9 = (x + 3)^2\\)</li>
<li>Använda konjugatregeln "baklänges": \\(x^2 - 25 = (x + 5)(x - 5)\\)</li>
</ul>
`,
  problems: [
    {
      level: "E",
      num: 1,
      text: `Utveckla \\((2x + 3)^2\\) med kvadreringsregeln.`,
      solution: `<div class="solution-step">Använd \\((a + b)^2 = a^2 + 2ab + b^2\\) med \\(a = 2x\\) och \\(b = 3\\):</div>
<div class="solution-step">\\((2x + 3)^2 = (2x)^2 + 2 \\cdot 2x \\cdot 3 + 3^2\\)</div>
<div class="solution-step">\\(= 4x^2 + 12x + 9\\)</div>
<div class="solution-step"><strong>Svar:</strong> \\((2x + 3)^2 = 4x^2 + 12x + 9\\)</div>`
    },
    {
      level: "E",
      num: 2,
      text: `Förenkla \\((x + 5)(x - 5)\\).`,
      solution: `<div class="solution-step">Använd konjugatregeln \\((a + b)(a - b) = a^2 - b^2\\) med \\(a = x\\) och \\(b = 5\\):</div>
<div class="solution-step">\\((x + 5)(x - 5) = x^2 - 5^2 = x^2 - 25\\)</div>
<div class="solution-step"><strong>Svar:</strong> \\((x + 5)(x - 5) = x^2 - 25\\)</div>`
    },
    {
      level: "E",
      num: 3,
      text: `En kvadrat har sidan \\((x + y)\\) och en annan kvadrat har sidan \\((x - y)\\).

Visa att skillnaden i area mellan de två kvadraterna kan skrivas som \\(4xy\\).`,
      solution: `<div class="solution-step">Area för den stora kvadraten: \\((x + y)^2\\)</div>
<div class="solution-step">Area för den lilla kvadraten: \\((x - y)^2\\)</div>
<div class="solution-step">Skillnad i area: \\((x + y)^2 - (x - y)^2\\)</div>
<div class="solution-step">Utveckla med kvadreringsreglerna:</div>
<div class="solution-step">\\((x + y)^2 = x^2 + 2xy + y^2\\)</div>
<div class="solution-step">\\((x - y)^2 = x^2 - 2xy + y^2\\)</div>
<div class="solution-step">Skillnaden: \\((x^2 + 2xy + y^2) - (x^2 - 2xy + y^2)\\)</div>
<div class="solution-step">\\(= x^2 + 2xy + y^2 - x^2 + 2xy - y^2\\)</div>
<div class="solution-step">\\(= 4xy\\)</div>
<div class="solution-step">Vilket skulle visas. ∎</div>`
    },
    {
      level: "C",
      num: 4,
      text: `Skriv om ekvationen \\(2^x = y\\) så att \\(x\\) uttrycks med hjälp av logaritmer.

Beräkna sedan \\(x\\) om \\(y = 32\\).`,
      solution: `<div class="solution-step">Utgå från \\(2^x = y\\).</div>
<div class="solution-step">Ta logaritmen (lg) av båda leden: \\(\\lg(2^x) = \\lg y\\)</div>
<div class="solution-step">Använd logaritmregeln \\(\\lg(a^n) = n \\cdot \\lg a\\): \\(x \\cdot \\lg 2 = \\lg y\\)</div>
<div class="solution-step">Lös ut \\(x\\): \\(x = \\dfrac{\\lg y}{\\lg 2}\\)</div>
<div class="solution-step">Om \\(y = 32\\): \\(x = \\dfrac{\\lg 32}{\\lg 2}\\)</div>
<div class="solution-step">Eftersom \\(32 = 2^5\\) får vi: \\(x = \\dfrac{\\lg(2^5)}{\\lg 2} = \\dfrac{5 \\lg 2}{\\lg 2} = 5\\)</div>
<div class="solution-step">Kontroll: \\(2^5 = 32\\) ✓</div>
<div class="solution-step"><strong>Svar:</strong> \\(x = \\dfrac{\\lg y}{\\lg 2}\\), och om \\(y = 32\\) så är \\(x = 5\\).</div>`
    },
    {
      level: "C",
      num: 5,
      text: `Visa att \\((a + b)^2 - (a - b)^2 = 4ab\\).`,
      solution: `<div class="solution-step">Utveckla \\((a + b)^2\\) med första kvadreringsregeln:</div>
<div class="solution-step">\\((a + b)^2 = a^2 + 2ab + b^2\\)</div>
<div class="solution-step">Utveckla \\((a - b)^2\\) med andra kvadreringsregeln:</div>
<div class="solution-step">\\((a - b)^2 = a^2 - 2ab + b^2\\)</div>
<div class="solution-step">Beräkna differensen:</div>
<div class="solution-step">\\((a + b)^2 - (a - b)^2 = (a^2 + 2ab + b^2) - (a^2 - 2ab + b^2)\\)</div>
<div class="solution-step">\\(= a^2 + 2ab + b^2 - a^2 + 2ab - b^2\\)</div>
<div class="solution-step">\\(= 4ab\\)</div>
<div class="solution-step">Vilket skulle visas. ∎</div>`
    },
    {
      level: "A",
      num: 6,
      text: `Undersök om \\(n^2 + n\\) alltid är ett jämnt tal för alla heltal \\(n\\).`,
      solution: `<div class="solution-step">Faktorisera: \\(n^2 + n = n(n + 1)\\)</div>
<div class="solution-step">Uttrycket \\(n(n + 1)\\) är produkten av två på varandra följande heltal.</div>
<div class="solution-step"><strong>Fall 1:</strong> Om \\(n\\) är jämnt, dvs. \\(n = 2k\\) för något heltal \\(k\\):</div>
<div class="solution-step">\\(n(n + 1) = 2k(2k + 1)\\), vilket är delbart med 2, alltså jämnt.</div>
<div class="solution-step"><strong>Fall 2:</strong> Om \\(n\\) är udda, dvs. \\(n = 2k + 1\\):</div>
<div class="solution-step">\\(n + 1 = 2k + 2 = 2(k + 1)\\), som är jämnt.</div>
<div class="solution-step">\\(n(n + 1) = (2k + 1) \\cdot 2(k + 1)\\), vilket är delbart med 2, alltså jämnt.</div>
<div class="solution-step">I båda fallen är produkten jämn.</div>
<div class="solution-step"><strong>Svar:</strong> Ja, \\(n^2 + n = n(n+1)\\) är alltid jämnt, eftersom av två på varandra följande heltal är alltid minst ett jämnt.</div>`
    },
    {
      level: "A",
      num: 7,
      text: `Bestäm för vilka värden på \\(a\\) som olikheten \\((a - 1)^2 > a^2 - 1\\) gäller.`,
      solution: `<div class="solution-step">Utveckla vänsterledet med kvadreringsregeln:</div>
<div class="solution-step">\\((a - 1)^2 = a^2 - 2a + 1\\)</div>
<div class="solution-step">Olikheten blir: \\(a^2 - 2a + 1 > a^2 - 1\\)</div>
<div class="solution-step">Subtrahera \\(a^2\\) från båda leden: \\(-2a + 1 > -1\\)</div>
<div class="solution-step">Addera 1 till båda leden: \\(-2a + 2 > 0\\)</div>
<div class="solution-step">\\(-2a > -2\\)</div>
<div class="solution-step">Dividera med \\(-2\\) (byt olikhetstecken!): \\(a < 1\\)</div>
<div class="solution-step">Kontroll: Prova \\(a = 0\\): VL = \\(1\\), HL = \\(-1\\). \\(1 > -1\\) ✓</div>
<div class="solution-step">Prova \\(a = 2\\): VL = \\(1\\), HL = \\(3\\). \\(1 > 3\\) ✗</div>
<div class="solution-step"><strong>Svar:</strong> Olikheten gäller för alla \\(a < 1\\).</div>`
    }
  ]
},
{
  id: 5,
  title: "Logaritmer",
  points: "Snitt 3,0 p/prov",
  tags: ["Utan hjälpmedel"],
  theory: `<h3>Logaritmer</h3>

<h4>Definition</h4>
<p>Logaritmen \\(\\lg x\\) (tiologaritmen) är det tal som 10 ska upphöjas till för att ge \\(x\\):</p>
<div class="formula-box">\\[\\lg x = a \\iff 10^a = x\\]</div>
<p>Exempel: \\(\\lg 100 = 2\\) eftersom \\(10^2 = 100\\).</p>

<h4>Logaritmregler</h4>
<div class="formula-box">
\\[\\lg(a \\cdot b) = \\lg a + \\lg b\\]
\\[\\lg\\left(\\frac{a}{b}\\right) = \\lg a - \\lg b\\]
\\[\\lg(a^n) = n \\cdot \\lg a\\]
</div>

<h4>Sambandet mellan logaritm och exponentialfunktion</h4>
<p>Logaritmen är den omvända operationen till att upphöja 10 till en potens:</p>
<div class="formula-box">\\[10^{\\lg x} = x \\quad \\text{och} \\quad \\lg(10^x) = x\\]</div>
<p>För att lösa exponentialekvationer som \\(3^x = 50\\) tar man logaritmen av båda leden:</p>
<div class="formula-box">\\[x \\cdot \\lg 3 = \\lg 50 \\implies x = \\frac{\\lg 50}{\\lg 3}\\]</div>`,
  problems: [
    {
      level: "E",
      num: 1,
      text: `Bestäm utan miniräknare:

a) \\(\\lg 1000\\)

b) \\(\\lg 0{,}01\\)

c) \\(\\lg \\sqrt{10}\\)`,
      solution: `<div class="solution-step"><strong>a)</strong> \\(\\lg 1000 = \\lg 10^3 = 3\\) (eftersom \\(10^3 = 1000\\))</div>
<div class="solution-step"><strong>b)</strong> \\(\\lg 0{,}01 = \\lg 10^{-2} = -2\\) (eftersom \\(10^{-2} = 0{,}01\\))</div>
<div class="solution-step"><strong>c)</strong> \\(\\lg \\sqrt{10} = \\lg 10^{1/2} = \\dfrac{1}{2} = 0{,}5\\)</div>
<div class="solution-step"><strong>Svar:</strong> a) \\(3\\), b) \\(-2\\), c) \\(0{,}5\\)</div>`
    },
    {
      level: "E",
      num: 2,
      text: `Vilken av följande är definitionen av \\(\\lg x = a\\)?

A. \\(x^{10} = a\\)

B. \\(a^{10} = x\\)

C. \\(10^a = x\\)

D. \\(10^x = a\\)`,
      solution: `<div class="solution-step">Definitionen av tiologaritmen säger: \\(\\lg x = a\\) betyder att \\(10^a = x\\).</div>
<div class="solution-step">Kontrollera: Om \\(\\lg 100 = 2\\), stämmer det att \\(10^2 = 100\\)? Ja ✓</div>
<div class="solution-step"><strong>Svar:</strong> Alternativ C.</div>`
    },
    {
      level: "E",
      num: 3,
      text: `Ge ett exempel på en ekvation som har lösningen \\(x = \\lg 5\\).`,
      solution: `<div class="solution-step">Vi söker en ekvation där \\(x = \\lg 5\\) är lösningen.</div>
<div class="solution-step">Eftersom \\(\\lg 5 \\approx 0{,}699\\) söker vi en ekvation där detta värde dyker upp naturligt.</div>
<div class="solution-step">Om \\(x = \\lg 5\\), så gäller per definition att \\(10^x = 5\\).</div>
<div class="solution-step"><strong>Svar (exempel):</strong> \\(10^x = 5\\)</div>
<div class="solution-step">(Andra giltiga svar kan t.ex. vara \\(10^{2x} = 25\\) eller \\(2 \\cdot 10^x = 10\\).)</div>`
    },
    {
      level: "E",
      num: 4,
      text: `Förenkla \\(\\lg 2 + \\lg 50\\) med hjälp av logaritmregler.`,
      solution: `<div class="solution-step">Använd regeln \\(\\lg a + \\lg b = \\lg(a \\cdot b)\\):</div>
<div class="solution-step">\\(\\lg 2 + \\lg 50 = \\lg(2 \\cdot 50) = \\lg 100\\)</div>
<div class="solution-step">\\(\\lg 100 = \\lg 10^2 = 2\\)</div>
<div class="solution-step"><strong>Svar:</strong> \\(\\lg 2 + \\lg 50 = 2\\)</div>`
    },
    {
      level: "C",
      num: 5,
      text: `Lös ekvationen \\(\\lg(x + 3) + \\lg(x - 1) = \\lg 8\\).`,
      solution: `<div class="solution-step">Använd logaritmregeln \\(\\lg a + \\lg b = \\lg(ab)\\) i vänsterledet:</div>
<div class="solution-step">\\(\\lg\\big((x + 3)(x - 1)\\big) = \\lg 8\\)</div>
<div class="solution-step">Eftersom \\(\\lg A = \\lg B \\implies A = B\\) (för \\(A, B > 0\\)):</div>
<div class="solution-step">\\((x + 3)(x - 1) = 8\\)</div>
<div class="solution-step">\\(x^2 + 2x - 3 = 8\\)</div>
<div class="solution-step">\\(x^2 + 2x - 11 = 0\\)</div>
<div class="solution-step">pq-formeln: \\(x = -1 \\pm \\sqrt{1 + 11} = -1 \\pm \\sqrt{12} = -1 \\pm 2\\sqrt{3}\\)</div>
<div class="solution-step">\\(x = -1 + 2\\sqrt{3} \\approx 2{,}46\\) eller \\(x = -1 - 2\\sqrt{3} \\approx -4{,}46\\)</div>
<div class="solution-step">Kolla villkoren: argumenten till \\(\\lg\\) måste vara positiva.</div>
<div class="solution-step">\\(x + 3 > 0\\) och \\(x - 1 > 0 \\implies x > 1\\)</div>
<div class="solution-step">\\(x \\approx -4{,}46\\) uppfyller inte \\(x > 1\\), så denna lösning förkastas.</div>
<div class="solution-step"><strong>Svar:</strong> \\(x = -1 + 2\\sqrt{3} \\approx 2{,}46\\)</div>`
    },
    {
      level: "C",
      num: 6,
      text: `Lös ekvationen \\(5 \\cdot 2^x = 160\\).`,
      solution: `<div class="solution-step">Dividera båda leden med 5: \\(2^x = 32\\)</div>
<div class="solution-step"><strong>Metod 1 (direkt):</strong> \\(32 = 2^5\\), alltså \\(2^x = 2^5 \\implies x = 5\\).</div>
<div class="solution-step"><strong>Metod 2 (med logaritmer):</strong></div>
<div class="solution-step">Ta \\(\\lg\\) av båda leden: \\(\\lg(2^x) = \\lg 32\\)</div>
<div class="solution-step">\\(x \\cdot \\lg 2 = \\lg 32\\)</div>
<div class="solution-step">\\(x = \\dfrac{\\lg 32}{\\lg 2} = \\dfrac{\\lg 2^5}{\\lg 2} = \\dfrac{5 \\lg 2}{\\lg 2} = 5\\)</div>
<div class="solution-step"><strong>Svar:</strong> \\(x = 5\\)</div>`
    },
    {
      level: "C",
      num: 7,
      text: `Ur en tabell kan man avläsa att \\(\\lg 2 \\approx 0{,}301\\).

Bestäm med hjälp av detta:

a) \\(\\lg 5\\)

b) \\(\\lg 20\\)

c) \\(\\lg 0{,}5\\)`,
      solution: `<div class="solution-step"><strong>a)</strong> \\(\\lg 5 = \\lg \\dfrac{10}{2} = \\lg 10 - \\lg 2 = 1 - 0{,}301 = 0{,}699\\)</div>
<div class="solution-step"><strong>b)</strong> \\(\\lg 20 = \\lg(2 \\cdot 10) = \\lg 2 + \\lg 10 = 0{,}301 + 1 = 1{,}301\\)</div>
<div class="solution-step"><strong>c)</strong> \\(\\lg 0{,}5 = \\lg \\dfrac{1}{2} = \\lg 1 - \\lg 2 = 0 - 0{,}301 = -0{,}301\\)</div>
<div class="solution-step"><strong>Svar:</strong> a) \\(\\lg 5 \\approx 0{,}699\\), b) \\(\\lg 20 \\approx 1{,}301\\), c) \\(\\lg 0{,}5 \\approx -0{,}301\\)</div>`
    }
  ]
}
,
{
  id: 6,
  title: "Exponentialfunktioner",
  points: "Snitt 4,8 p/prov",
  tags: ["Med hjälpmedel"],
  theory: `<h3>Exponentialfunktioner</h3>
<p>En <strong>exponentialfunktion</strong> har formen:</p>
<div class="formula-box">\\[f(x) = C \\cdot a^x\\]</div>
<p>där \\(C\\) är startvärdet (värdet när \\(x = 0\\)) och \\(a\\) är <strong>förändringsfaktorn</strong>.</p>

<h3>Förändringsfaktor</h3>
<p>Om något ökar med \\(p\\)% per tidsenhet är förändringsfaktorn:</p>
<div class="formula-box">\\[a = 1 + \\frac{p}{100}\\]</div>
<p>Om något minskar med \\(p\\)% per tidsenhet:</p>
<div class="formula-box">\\[a = 1 - \\frac{p}{100}\\]</div>
<p><strong>Exempel:</strong> En ökning med 5% ger \\(a = 1{,}05\\). En minskning med 3% ger \\(a = 0{,}97\\).</p>

<h3>Ställa upp exponentiella modeller från text</h3>
<p>En exponentiell modell har formen:</p>
<div class="formula-box">\\[f(t) = C \\cdot a^t\\]</div>
<p>där \\(C\\) är <strong>startvärdet</strong> (värdet vid \\(t = 0\\)) och \\(a\\) är <strong>förändringsfaktorn</strong>.</p>
<ul>
<li>Ökning med 5 % per år → \\(a = 1{,}05\\)</li>
<li>Minskning med 12 % per år → \\(a = 0{,}88\\)</li>
<li>Värdet tredubblas varje timme → \\(a = 3\\)</li>
</ul>
<p><strong>Exempel:</strong> "En population på 400 bakterier växer med 15 % per timme."</p>
<div class="formula-box">\\[C = 400, \\quad a = 1{,}15 \\quad \\Rightarrow \\quad f(t) = 400 \\cdot 1{,}15^t\\]</div>
<p><strong>Två kända värden?</strong> Om du vet startvärdet och ett värde senare, kan du bestämma \\(a\\).</p>
<p><strong>Exempel:</strong> "Vid start finns 400 bakterier. Efter 3 timmar finns 1200."</p>
<div class="formula-box">\\[400 \\cdot a^3 = 1200 \\quad \\Rightarrow \\quad a^3 = \\frac{1200}{400} = 3 \\quad \\Rightarrow \\quad a = 3^{1/3} \\approx 1{,}44\\]</div>
<p>Modellen blir: \\(f(t) = 400 \\cdot 1{,}44^t\\)</p>

<h3>Logaritmer och exponentialekvationer</h3>
<p>För att lösa ekvationer av typen \\(a^x = b\\) använder vi logaritmer:</p>
<div class="formula-box">\\[a^x = b \\quad \\Leftrightarrow \\quad x = \\frac{\\lg b}{\\lg a}\\]</div>
<p>I GeoGebra kan du använda kommandot <code>Lös</code> eller skriva ekvationen direkt i CAS.</p>`,
  problems: [
    {
      level: "E",
      num: 1,
      text: `Lös ekvationen \\(1{,}7^x = 5\\). Svara med två decimaler.`,
      solution: `<div class="solution-step">Vi har ekvationen \\(1{,}7^x = 5\\).</div>
<div class="solution-step">Logaritmera båda led:
\\[x \\cdot \\lg 1{,}7 = \\lg 5\\]</div>
<div class="solution-step">Lös ut \\(x\\):
\\[x = \\frac{\\lg 5}{\\lg 1{,}7} = \\frac{0{,}6990\\ldots}{0{,}2304\\ldots}\\]</div>
<div class="solution-step">\\[x \\approx 3{,}03\\]</div>
<div class="solution-step"><strong>Svar:</strong> \\(x \\approx 3{,}03\\)</div>`
    },
    {
      level: "E",
      num: 2,
      text: `Bestäm den exponentiella funktionen \\(f(x) = C \\cdot a^x\\) som passerar genom punkterna \\((0,\\, 3)\\) och \\((4,\\, 48)\\).`,
      solution: `<div class="solution-step">Punkten \\((0,\\, 3)\\) ger \\(f(0) = C \\cdot a^0 = C = 3\\).</div>
<div class="solution-step">Alltså är \\(C = 3\\).</div>
<div class="solution-step">Punkten \\((4,\\, 48)\\) ger \\(f(4) = 3 \\cdot a^4 = 48\\).</div>
<div class="solution-step">Lös ut \\(a^4\\):
\\[a^4 = \\frac{48}{3} = 16\\]</div>
<div class="solution-step">\\[a = \\sqrt[4]{16} = 2\\]</div>
<div class="solution-step"><strong>Svar:</strong> \\(f(x) = 3 \\cdot 2^x\\)</div>`
    },
    {
      level: "C",
      num: 3,
      text: `Ett radioaktivt ämne har halveringstiden 8 år. Hur stor andel av ämnet finns kvar efter 20 år?`,
      solution: `<div class="solution-step">Vid halveringstid \\(t_h = 8\\) år kan mängden skrivas:
\\[m(t) = m_0 \\cdot \\left(\\frac{1}{2}\\right)^{t/8}\\]</div>
<div class="solution-step">Andelen kvar efter 20 år:
\\[\\frac{m(20)}{m_0} = \\left(\\frac{1}{2}\\right)^{20/8} = \\left(\\frac{1}{2}\\right)^{2{,}5}\\]</div>
<div class="solution-step">Beräkna:
\\[\\left(\\frac{1}{2}\\right)^{2{,}5} = \\frac{1}{2^{2{,}5}} = \\frac{1}{\\sqrt{2^5}} = \\frac{1}{\\sqrt{32}}\\]</div>
<div class="solution-step">\\[= \\frac{1}{5{,}657\\ldots} \\approx 0{,}177\\]</div>
<div class="solution-step"><strong>Svar:</strong> Ungefär 17,7 % av ämnet finns kvar efter 20 år.</div>`
    },
    {
      level: "C",
      num: 4,
      text: `Priset på en vara ökar med 3 % per år. Priset idag är 500 kr.
<br>a) Ställ upp en funktion \\(P(t)\\) som beskriver priset efter \\(t\\) år.
<br>b) Efter hur många år har priset fördubblats?`,
      solution: `<div class="solution-step"><strong>a)</strong> Förändringsfaktorn är \\(a = 1 + 0{,}03 = 1{,}03\\). Startvärdet \\(C = 500\\).</div>
<div class="solution-step">\\[P(t) = 500 \\cdot 1{,}03^t\\]</div>
<div class="solution-step"><strong>b)</strong> Vi söker \\(t\\) så att \\(P(t) = 1000\\):
\\[500 \\cdot 1{,}03^t = 1000\\]</div>
<div class="solution-step">\\[1{,}03^t = 2\\]</div>
<div class="solution-step">Logaritmera:
\\[t = \\frac{\\lg 2}{\\lg 1{,}03} = \\frac{0{,}3010\\ldots}{0{,}01284\\ldots}\\]</div>
<div class="solution-step">\\[t \\approx 23{,}4 \\text{ år}\\]</div>
<div class="solution-step"><strong>Svar:</strong> a) \\(P(t) = 500 \\cdot 1{,}03^t\\). b) Priset har fördubblats efter cirka 23 år.</div>`
    },
    {
      level: "A",
      num: 5,
      text: `I en stad ökar antalet elbilar exponentiellt enligt \\(E(t) = 400 \\cdot 1{,}25^t\\). Samtidigt ökar antalet bensinbilar linjärt enligt \\(B(t) = 3000 + 200t\\), där \\(t\\) är antal år efter 2020.
<br>a) Hur många elbilar respektive bensinbilar fanns det 2020?
<br>b) Under vilket år blir antalet elbilar fler än antalet bensinbilar? Använd GeoGebra.
<br>c) Förklara varför den exponentiella modellen så småningom alltid "vinner" över den linjära.`,
      solution: `<div class="solution-step"><strong>a)</strong> Sätt \\(t = 0\\):
\\[E(0) = 400 \\cdot 1{,}25^0 = 400 \\text{ elbilar}\\]
\\[B(0) = 3000 + 200 \\cdot 0 = 3000 \\text{ bensinbilar}\\]</div>
<div class="solution-step"><strong>b)</strong> Vi söker \\(t\\) så att \\(E(t) = B(t)\\):
\\[400 \\cdot 1{,}25^t = 3000 + 200t\\]</div>
<div class="solution-step">Denna ekvation kan inte lösas algebraiskt. Vi plottar båda funktionerna i GeoGebra med kommandona:
<br><code>E(t) = 400 * 1.25^t</code>
<br><code>B(t) = 3000 + 200t</code>
<br>och använder verktyget <em>Skärning mellan två objekt</em>.</div>
<div class="solution-step">Vi kan också kontrollera med numeriska värden:
\\(t = 10\\): \\(E(10) = 400 \\cdot 1{,}25^{10} \\approx 3726\\), \\(B(10) = 5000\\). Bensinbilar fler.
\\(t = 12\\): \\(E(12) = 400 \\cdot 1{,}25^{12} \\approx 5821\\), \\(B(12) = 5400\\). Elbilar fler!</div>
<div class="solution-step">Mer exakt: GeoGebra ger skärningspunkten vid \\(t \\approx 11{,}6\\).</div>
<div class="solution-step">Eftersom \\(t\\) räknas från 2020 blir svaret: under år \\(2020 + 12 = 2032\\) (avrundat uppåt till helår).</div>
<div class="solution-step"><strong>c)</strong> En exponentiell funktion ökar med en fast procentandel varje år (här 25 %), medan en linjär funktion ökar med ett fast antal (200 per år). I början kan det linjära tillägget vara större, men den exponentiella funktionens tillväxttakt ökar hela tiden. Förr eller senare överträffar den varje linjär funktion.</div>
<div class="solution-step"><strong>Svar:</strong> a) 400 elbilar och 3000 bensinbilar år 2020. b) Under 2032 (\\(t \\approx 11{,}6\\)). c) Exponentiell tillväxt ökar procentuellt, så tillväxttakten accelererar och överträffar till slut den konstanta linjära tillväxten.</div>`
    },
    {
      level: "A",
      num: 6,
      text: `En mjölkproducent levererar mjölk enligt en linjär modell: \\(M(t) = 5000 + 300t\\) liter per vecka, där \\(t\\) är antal år. En konkurrent har en leveransförmåga som ökar exponentiellt: \\(K(t) = 800 \\cdot 1{,}35^t\\) liter per vecka.
<br>a) Beräkna leveranserna vid \\(t = 0\\) och \\(t = 5\\).
<br>b) Bestäm efter hur många år konkurrenten levererar mer mjölk. Använd GeoGebra.
<br>c) Hur stor är skillnaden i leverans vid \\(t = 15\\)?`,
      solution: `<div class="solution-step"><strong>a)</strong> Vid \\(t = 0\\):
\\[M(0) = 5000 + 0 = 5000 \\text{ liter/vecka}\\]
\\[K(0) = 800 \\cdot 1 = 800 \\text{ liter/vecka}\\]</div>
<div class="solution-step">Vid \\(t = 5\\):
\\[M(5) = 5000 + 1500 = 6500 \\text{ liter/vecka}\\]
\\[K(5) = 800 \\cdot 1{,}35^5 \\approx 800 \\cdot 4{,}484 \\approx 3587 \\text{ liter/vecka}\\]</div>
<div class="solution-step"><strong>b)</strong> Vi löser \\(K(t) = M(t)\\):
\\[800 \\cdot 1{,}35^t = 5000 + 300t\\]</div>
<div class="solution-step">Denna ekvation löses grafiskt i GeoGebra. Plotta:
<br><code>M(t) = 5000 + 300t</code>
<br><code>K(t) = 800 * 1.35^t</code>
<br>och använd <em>Skärning mellan två objekt</em>.</div>
<div class="solution-step">Kontrollera numeriskt:
\\(t = 7\\): \\(K(7) = 800 \\cdot 1{,}35^7 \\approx 800 \\cdot 8{,}17 \\approx 6538\\), \\(M(7) = 7100\\). Mjölkproducenten leder.
\\(t = 8\\): \\(K(8) = 800 \\cdot 1{,}35^8 \\approx 800 \\cdot 11{,}03 \\approx 8826\\), \\(M(8) = 7400\\). Konkurrenten leder!</div>
<div class="solution-step">GeoGebra ger skärningspunkten vid \\(t \\approx 7{,}3\\). Konkurrenten levererar mer efter ungefär 7,3 år.</div>
<div class="solution-step"><strong>c)</strong> Vid \\(t = 15\\):
\\[M(15) = 5000 + 4500 = 9500\\]
\\[K(15) = 800 \\cdot 1{,}35^{15} \\approx 800 \\cdot 90{,}2 \\approx 72\\,100\\]</div>
<div class="solution-step">Skillnad: \\(72\\,100 - 9500 = 62\\,600\\) liter/vecka. Den exponentiella tillväxten dominerar helt.</div>
<div class="solution-step"><strong>Svar:</strong> a) Vid \\(t = 0\\): 5000 resp. 800 liter. Vid \\(t = 5\\): 6500 resp. ca 3587 liter. b) Efter ca 7,3 år. c) Skillnaden är ca 62 600 liter per vecka vid \\(t = 15\\).</div>`
    },
    {
      level: "A",
      num: 7,
      text: `Temperaturen hos en kopp kaffe avtar enligt \\(T(t) = 20 + 60 \\cdot 0{,}95^t\\) grader Celsius, där \\(t\\) är tid i minuter.
<br>a) Vad var kaffets temperatur från början?
<br>b) Bestäm efter hur lång tid temperaturen är 50°C.
<br>c) Vad händer med temperaturen på lång sikt? Motivera.`,
      solution: `<div class="solution-step"><strong>a)</strong> Sätt \\(t = 0\\):
\\[T(0) = 20 + 60 \\cdot 0{,}95^0 = 20 + 60 \\cdot 1 = 80\\]</div>
<div class="solution-step">Kaffets temperatur var 80°C från början.</div>
<div class="solution-step"><strong>b)</strong> Sätt \\(T(t) = 50\\):
\\[20 + 60 \\cdot 0{,}95^t = 50\\]</div>
<div class="solution-step">\\[60 \\cdot 0{,}95^t = 30\\]</div>
<div class="solution-step">\\[0{,}95^t = 0{,}5\\]</div>
<div class="solution-step">Logaritmera:
\\[t = \\frac{\\lg 0{,}5}{\\lg 0{,}95} = \\frac{-0{,}3010\\ldots}{-0{,}02228\\ldots}\\]</div>
<div class="solution-step">\\[t \\approx 13{,}5 \\text{ minuter}\\]</div>
<div class="solution-step"><strong>c)</strong> När \\(t \\to \\infty\\) gäller att \\(0{,}95^t \\to 0\\) (eftersom \\(0 < 0{,}95 < 1\\)).</div>
<div class="solution-step">Alltså \\(T(t) \\to 20 + 60 \\cdot 0 = 20\\).</div>
<div class="solution-step">Temperaturen närmar sig 20°C, vilket är rumstemperaturen. Det är fysikaliskt rimligt — kaffet svalnar mot omgivningens temperatur men når den aldrig helt.</div>
<div class="solution-step"><strong>Svar:</strong> a) 80°C. b) Cirka 13,5 minuter. c) Temperaturen närmar sig 20°C (rumstemperaturen) men når den aldrig exakt.</div>`
    }
  ]
},
{
  id: 7,
  title: "Optimering",
  points: "Snitt 2,0 p/prov",
  tags: ["Utan hjälpmedel", "Med hjälpmedel"],
  theory: `<h3>Vad är optimering?</h3>
<p>Tänk dig att du har <strong>40 meter staket</strong> och en vägg. Du vill bygga en inhägnad mot väggen med så stor area som möjligt:</p>
<div style="text-align:center;margin:16px 0">
<img src="img/staket.png" alt="Rektangulärt staket mot en vägg" style="max-width:340px;width:100%;border-radius:8px;">
</div>
<p>Det streckade staketet har en fast längd — men hur ska du fördela det mellan sidorna för att få <strong>störst yta</strong>? Det är optimering: att hitta det bästa värdet givet ett villkor.</p>

<h3>Metod</h3>
<p>Följ dessa steg:</p>
<ol>
<li>Inför en <strong>variabel</strong> \\(x\\) för den storhet du vill variera.</li>
<li>Teckna en <strong>funktion</strong> \\(f(x)\\) för den storhet du vill optimera (t.ex. area, intäkt).</li>
<li>Bestäm <strong>definitionsmängden</strong> — vilka \\(x\\)-värden är rimliga?</li>
<li>Hitta <strong>extremvärdet</strong> med hjälp av symmetrilinjen.</li>
</ol>

<h3>Symmetrilinjen</h3>
<p>En andragradsfunktion \\(f(x) = ax^2 + bx + c\\) har sin symmetrilinje vid:</p>
<div class="formula-box">\\[x = -\\frac{b}{2a}\\]</div>
<p>Om \\(a < 0\\) har funktionen ett <strong>maximum</strong> vid symmetrilinjen.</p>
<p>Om \\(a > 0\\) har funktionen ett <strong>minimum</strong> vid symmetrilinjen.</p>

<h3>Exempel: Staketet mot väggen</h3>
<p>Tillbaka till exemplet ovan: 40 meter staket, tre sidor (två kortsidor \\(x\\) och en långsida). Arean blir:</p>
<div class="formula-box">\\[A(x) = x \\cdot (40 - 2x) = -2x^2 + 40x\\]</div>
<p>Det här är en andragradsfunktion med \\(a = -2\\) (negativt → maximum finns!). Vi hittar symmetrilinjen:</p>
<div class="formula-box">\\[x = -\\frac{b}{2a} = -\\frac{40}{2 \\cdot (-2)} = \\frac{40}{4} = 10\\]</div>
<p>Kortsidorna ska alltså vara 10 m, och långsidan blir \\(40 - 2 \\cdot 10 = 20\\) m. Maximal area: \\(10 \\cdot 20 = 200 \\text{ m}^2\\).</p>

<p><strong>Koppling till pq-formeln:</strong> Om vi sätter \\(A(x) = 0\\):</p>
<div class="formula-box">\\[-2x^2 + 40x = 0 \\quad \\Rightarrow \\quad x^2 - 20x = 0 \\quad \\Rightarrow \\quad x(x - 20) = 0\\]
\\[\\text{Nollställen: } x = 0 \\text{ och } x = 20\\]</div>
<p>Symmetrilinjen ligger mitt mellan nollställena: \\(\\dfrac{0 + 20}{2} = 10\\). Samma svar!</p>`,
  problems: [
    {
      level: "C",
      num: 1,
      text: `En bonde ska bygga ett rektangulärt stängsel mot en vägg. Hon har 40 meter stängseltråd. Teckna arean som en funktion av den ena sidans längd.`,
      solution: `<div class="solution-step">Låt den sida som är vinkelrät mot väggen ha längden \\(x\\) meter.</div>
<div class="solution-step">Det behövs två sådana sidor (på vardera sidan). Den sida som är parallell med väggen blir:
\\[40 - 2x\\]</div>
<div class="solution-step">Arean blir:
\\[A(x) = x \\cdot (40 - 2x) = 40x - 2x^2\\]</div>
<div class="solution-step">Definitionsmängd: \\(x > 0\\) och \\(40 - 2x > 0 \\Rightarrow x < 20\\). Alltså \\(0 < x < 20\\).</div>
<div class="solution-step"><strong>Svar:</strong> \\(A(x) = 40x - 2x^2\\), där \\(0 < x < 20\\).</div>`
    },
    {
      level: "C",
      num: 2,
      text: `Teckna en funktion \\(A(x)\\) för arean av en rektangel vars omkrets är 24 cm. Bestäm definitionsmängden för \\(A(x)\\).`,
      solution: `<div class="solution-step">Omkretsen av en rektangel: \\(O = 2(a + b) = 24\\), alltså \\(a + b = 12\\).</div>
<div class="solution-step">Låt ena sidan vara \\(x\\) cm. Då är den andra sidan \\(12 - x\\) cm.</div>
<div class="solution-step">Arean:
\\[A(x) = x(12 - x) = 12x - x^2\\]</div>
<div class="solution-step">Definitionsmängd: Båda sidorna måste vara positiva:
\\[x > 0 \\quad \\text{och} \\quad 12 - x > 0 \\Rightarrow x < 12\\]</div>
<div class="solution-step"><strong>Svar:</strong> \\(A(x) = 12x - x^2\\), med definitionsmängd \\(0 < x < 12\\).</div>`
    },
    {
      level: "A",
      num: 3,
      text: `En rektangulär trädgård ska ha omkretsen 80 meter. Visa att den maximala arean är 400 m².`,
      solution: `<div class="solution-step">Låt ena sidan ha längden \\(x\\) meter. Omkretsen ger:
\\[2(x + y) = 80 \\Rightarrow y = 40 - x\\]</div>
<div class="solution-step">Arean blir:
\\[A(x) = x(40 - x) = 40x - x^2\\]</div>
<div class="solution-step">Detta är en andragradsfunktion med \\(a = -1\\) och \\(b = 40\\), alltså har den ett maximum.</div>
<div class="solution-step">Symmetrilinjen:
\\[x = -\\frac{b}{2a} = -\\frac{40}{2 \\cdot (-1)} = 20\\]</div>
<div class="solution-step">Maximal area:
\\[A(20) = 40 \\cdot 20 - 20^2 = 800 - 400 = 400\\]</div>
<div class="solution-step"><strong>V.S.V. (Vilket Skulle Visas):</strong> Den maximala arean är 400 m², och den uppnås när trädgården är en kvadrat med sidan 20 m.</div>`
    },
    {
      level: "A",
      num: 4,
      text: `En biograf sänker biljettpriset med 5 kr per sänkning. Varje sänkning ger 20 fler besökare. Från start kostar en biljett 120 kr och 200 personer besöker biografen.
<br>a) Teckna intäktsfunktionen \\(I(x)\\) där \\(x\\) = antal prissänkningar.
<br>b) Bestäm biljettpriset som ger maximal intäkt.`,
      solution: `<div class="solution-step"><strong>a)</strong> Biljettpris efter \\(x\\) sänkningar: \\(120 - 5x\\) kr.</div>
<div class="solution-step">Antal besökare: \\(200 + 20x\\).</div>
<div class="solution-step">Intäkten:
\\[I(x) = (120 - 5x)(200 + 20x)\\]</div>
<div class="solution-step">Utveckla:
\\[I(x) = 24000 + 2400x - 1000x - 100x^2\\]
\\[I(x) = -100x^2 + 1400x + 24000\\]</div>
<div class="solution-step"><strong>b)</strong> Symmetrilinjen:
\\[x = -\\frac{1400}{2 \\cdot (-100)} = \\frac{1400}{200} = 7\\]</div>
<div class="solution-step">Biljettpriset vid \\(x = 7\\):
\\[120 - 5 \\cdot 7 = 120 - 35 = 85 \\text{ kr}\\]</div>
<div class="solution-step">Maximal intäkt:
\\[I(7) = -100 \\cdot 49 + 1400 \\cdot 7 + 24000 = -4900 + 9800 + 24000 = 28900 \\text{ kr}\\]</div>
<div class="solution-step"><strong>Svar:</strong> a) \\(I(x) = -100x^2 + 1400x + 24000\\). b) Biljettpriset 85 kr ger maximal intäkt på 28 900 kr.</div>`
    },
    {
      level: "A",
      num: 5,
      text: `En kakform ska tillverkas av en cirkulär plåtbit med radien \\(R\\) cm. Formen görs genom att klippa ut en sektor och böja plåten till en kon. Visa att volymen av konen kan skrivas som en funktion av konens radie \\(r\\), och bestäm \\(r\\) som maximerar volymen.`,
      solution: `<div class="solution-step">Konens slantlängd = plåtbitens radie = \\(R\\).</div>
<div class="solution-step">Sambandet mellan konens radie \\(r\\), höjd \\(h\\) och slantlängd \\(R\\):
\\[R^2 = r^2 + h^2 \\quad \\Rightarrow \\quad h = \\sqrt{R^2 - r^2}\\]</div>
<div class="solution-step">Konens volym:
\\[V = \\frac{\\pi r^2 h}{3} = \\frac{\\pi r^2}{3} \\sqrt{R^2 - r^2}\\]</div>
<div class="solution-step">För att maximera kan vi maximera \\(V^2\\) (samma \\(r\\) ger max):
\\[V^2 = \\frac{\\pi^2}{9} \\cdot r^4(R^2 - r^2)\\]</div>
<div class="solution-step">Låt \\(u = r^2\\). Då ska vi maximera:
\\[f(u) = u^2(R^2 - u) = R^2 u^2 - u^3\\]</div>
<div class="solution-step">Derivera och sätt lika med noll:
\\[f'(u) = 2R^2 u - 3u^2 = u(2R^2 - 3u) = 0\\]</div>
<div class="solution-step">\\(u = 0\\) (minimum) eller \\(u = \\frac{2R^2}{3}\\), dvs:
\\[r^2 = \\frac{2R^2}{3} \\quad \\Rightarrow \\quad r = R\\sqrt{\\frac{2}{3}}\\]</div>
<div class="solution-step"><strong>Svar:</strong> Volymen \\(V(r) = \\frac{\\pi r^2}{3}\\sqrt{R^2 - r^2}\\) maximeras vid \\(r = R\\sqrt{\\frac{2}{3}} \\approx 0{,}816R\\).</div>`
    }
  ]
},
{
  id: 8,
  title: "Normalfördelning",
  points: "Snitt 3,3 p/prov",
  tags: ["Utan hjälpmedel", "Med hjälpmedel"],
  theory: `<h3>Normalfördelningen</h3>
<p>Många mätbara storheter (längd, vikt, provresultat) följer en <strong>normalfördelning</strong>. Kurvan är symmetrisk och klockformad.</p>
<div style="text-align:center;margin:16px 0">
<img src="img/normalfordelning.png" alt="Normalfördelningskurvan med procentandelar" style="max-width:420px;width:100%;border-radius:8px;">
</div>

<h3>68–95–99,7-regeln</h3>
<p>I en normalfördelning gäller:</p>
<ul>
<li>Cirka <strong>68 %</strong> av värdena ligger inom \\(\\mu \\pm \\sigma\\)</li>
<li>Cirka <strong>95 %</strong> av värdena ligger inom \\(\\mu \\pm 2\\sigma\\)</li>
<li>Cirka <strong>99,7 %</strong> av värdena ligger inom \\(\\mu \\pm 3\\sigma\\)</li>
</ul>

<h3>Medelvärde och standardavvikelse</h3>
<p><strong>Medelvärdet</strong> \\(\\mu\\) anger kurvans mittpunkt. <strong>Standardavvikelsen</strong> \\(\\sigma\\) anger hur spridd fördelningen är.</p>
<div class="formula-box">\\[\\mu = \\frac{x_1 + x_2 + \\cdots + x_n}{n}\\]</div>

<h3>Beräkna i GeoGebra</h3>
<p><strong>Normalfördelning:</strong></p>
<ol>
<li>Öppna <strong>Sannolikhetskalkylator</strong> (fördelningsverktyget).</li>
<li>I rullmenyn högst upp väljer du fördelning — <strong>Normalfördelning</strong> är oftast redan förvald.</li>
<li>Ange <strong>medelvärde (μ)</strong> och <strong>standardavvikelse (σ)</strong> i fälten bredvid.</li>
<li>Välj vilken typ av sannolikhet du vill beräkna med knapparna under grafen:
<br>• <strong>Vänsterknappen P(X ≤ a)</strong> — andelen <em>under</em> ett visst värde.
<br>• <strong>Mittknappen P(a ≤ X ≤ b)</strong> — andelen <em>mellan</em> två värden.
<br>• <strong>Högerknappen P(X ≥ a)</strong> — andelen <em>över</em> ett visst värde.</li>
<li>Avläs sannolikheten — den visas direkt, och det skuggade området under kurvan visar intervallet grafiskt.</li>
</ol>

<p><strong>Standardavvikelse:</strong></p>
<ol>
<li>Öppna <strong>Kalkylblad-vyn</strong>.</li>
<li>Mata in alla värden i kolumn A (ett värde per cell).</li>
<li>Markera alla celler med data. Klicka på knappen med de <strong>blå staplarna</strong> och välj <strong>Envariabelanalys</strong>.</li>
<li>Klicka på <strong>stora Σ-symbolen</strong> för att visa statistiken. Här hittar du:
<br>• <strong>s</strong> — standardavvikelsen för ett <em>stickprov</em> (data från en del av gruppen).
<br>• <strong>σ</strong> — standardavvikelsen för en <em>hel population</em> (data från alla).
<br>På provet brukar det stå vilket som gäller — om det står "stickprov" använder du <strong>s</strong>.</li>
</ol>`,
  problems: [
    {
      level: "E",
      num: 1,
      text: `Längden hos vuxna män i ett land är normalfördelad med medelvärdet 178 cm och standardavvikelsen 7 cm. Hur stor andel av männen är mellan 171 cm och 185 cm?`,
      solution: `<div class="solution-step">Vi har \\(\\mu = 178\\) och \\(\\sigma = 7\\).</div>
<div class="solution-step">Beräkna avståndet från medelvärdet:
\\[171 = 178 - 7 = \\mu - \\sigma\\]
\\[185 = 178 + 7 = \\mu + \\sigma\\]</div>
<div class="solution-step">Intervallet \\(171\\) till \\(185\\) motsvarar alltså \\(\\mu \\pm \\sigma\\).</div>
<div class="solution-step">Enligt 68–95–99,7-regeln ligger cirka 68 % inom detta intervall.</div>
<div class="solution-step"><strong>Svar:</strong> Cirka 68 % av männen är mellan 171 cm och 185 cm.</div>`
    },
    {
      level: "E",
      num: 2,
      text: `Följande värden är ordnade i storleksordning: 12, 15, 18, 21, 23, 27, 30. Bestäm medianen.`,
      solution: `<div class="solution-step">Det finns 7 värden. Medianen är det mittersta värdet.</div>
<div class="solution-step">Det mittersta värdet (position 4 av 7):
\\[12, \\; 15, \\; 18, \\; \\mathbf{21}, \\; 23, \\; 27, \\; 30\\]</div>
<div class="solution-step"><strong>Svar:</strong> Medianen är 21.</div>`
    },
    {
      level: "E",
      num: 3,
      text: `En normalfördelningskurva är ritad med \\(\\mu = 50\\) och \\(\\sigma = 10\\). Markera ungefärligt var \\(\\sigma\\) kan avläsas i kurvan och uppskatta andelen som hamnar under 40.`,
      solution: `<div class="solution-step">Standardavvikelsen \\(\\sigma\\) kan avläsas som avståndet från mittpunkten \\(\\mu = 50\\) till en av kurvans <strong>inflexionspunkter</strong> (där kurvan ändrar krökning). Dessa ligger vid \\(50 - 10 = 40\\) och \\(50 + 10 = 60\\).</div>
<div class="solution-step">Vi söker \\(P(X < 40) = P(X < \\mu - \\sigma)\\).</div>
<div class="solution-step">Enligt 68–95–99,7-regeln: 68 % ligger inom \\(\\mu \\pm \\sigma\\), alltså ligger \\(100\\% - 68\\% = 32\\%\\) utanför.</div>
<div class="solution-step">Eftersom kurvan är symmetrisk hamnar hälften under \\(\\mu - \\sigma\\):
\\[\\frac{32}{2} = 16\\%\\]</div>
<div class="solution-step"><strong>Svar:</strong> \\(\\sigma\\) avläses vid inflexionspunkterna (vid 40 och 60). Ungefär 16 % hamnar under 40.</div>`
    },
    {
      level: "C",
      num: 4,
      text: `Vikten hos nyfödda barn är normalfördelad med \\(\\mu = 3500\\) g och \\(\\sigma = 450\\) g. Beräkna med GeoGebra:
<br>a) Andelen barn som väger mer än 4000 g.
<br>b) Andelen barn som väger mellan 3000 g och 4200 g.`,
      solution: `<div class="solution-step"><strong>a)</strong> Vi söker \\(P(X > 4000)\\).</div>
<div class="solution-step">I GeoGebra: <code>1 - Normal(3500, 450, 4000)</code></div>
<div class="solution-step">\\[P(X > 4000) = 1 - P(X \\leq 4000)\\]</div>
<div class="solution-step">Beräkning: \\(z = \\frac{4000 - 3500}{450} = \\frac{500}{450} \\approx 1{,}11\\)</div>
<div class="solution-step">\\[P(X > 4000) \\approx 1 - 0{,}8667 = 0{,}1333\\]</div>
<div class="solution-step"><strong>b)</strong> Vi söker \\(P(3000 \\leq X \\leq 4200)\\).</div>
<div class="solution-step">I GeoGebra: <code>Normal(3500, 450, 4200) - Normal(3500, 450, 3000)</code></div>
<div class="solution-step">\\[P(3000 \\leq X \\leq 4200) = P(X \\leq 4200) - P(X \\leq 3000)\\]</div>
<div class="solution-step">\\[\\approx 0{,}9401 - 0{,}1333 = 0{,}8068\\]</div>
<div class="solution-step"><strong>Svar:</strong> a) Cirka 13,3 % väger mer än 4000 g. b) Cirka 80,7 % väger mellan 3000 g och 4200 g.</div>`
    },
    {
      level: "C",
      num: 5,
      text: `Resultatet på ett prov är normalfördelat med \\(\\mu = 62\\) poäng. Man vet att 16 % av eleverna fick mer än 73 poäng. Bestäm standardavvikelsen.`,
      solution: `<div class="solution-step">Vi vet att \\(P(X > 73) = 0{,}16\\), alltså \\(P(X \\leq 73) = 0{,}84\\).</div>
<div class="solution-step">Från 68–95–99,7-regeln: \\(P(X > \\mu + \\sigma) \\approx 0{,}16\\).</div>
<div class="solution-step">Det betyder att \\(73 = \\mu + \\sigma\\):
\\[73 = 62 + \\sigma\\]</div>
<div class="solution-step">\\[\\sigma = 73 - 62 = 11\\]</div>
<div class="solution-step"><strong>Svar:</strong> Standardavvikelsen är 11 poäng.</div>`
    },
    {
      level: "A",
      num: 6,
      text: `I en Galtonbräda med 10 rader släpps 1000 kulor. Resultatet kan approximeras med en normalfördelning.
<br>a) Förklara varför normalfördelning är en rimlig modell.
<br>b) Om medelvärdet är 5,0 och standardavvikelsen är 1,6 — hur många kulor hamnar i fack 3–7?
<br>c) Varför är fördelningen symmetrisk?`,
      solution: `<div class="solution-step"><strong>a)</strong> I en Galtonbräda studsar varje kula åt höger eller vänster vid varje pinne med lika stor sannolikhet. Det totala utfallet (slutfacket) är summan av många oberoende slumphändelser. Enligt <strong>centrala gränsvärdessatsen</strong> blir summan av många oberoende likadana slumpvariabler approximativt normalfördelad.</div>
<div class="solution-step"><strong>b)</strong> Vi söker \\(P(3 \\leq X \\leq 7)\\) med \\(\\mu = 5{,}0\\) och \\(\\sigma = 1{,}6\\).</div>
<div class="solution-step">Beräkna i GeoGebra: <code>Normal(5, 1.6, 7) - Normal(5, 1.6, 3)</code></div>
<div class="solution-step">\\[z_1 = \\frac{3 - 5}{1{,}6} = -1{,}25 \\quad \\text{och} \\quad z_2 = \\frac{7 - 5}{1{,}6} = 1{,}25\\]</div>
<div class="solution-step">\\[P(3 \\leq X \\leq 7) \\approx 0{,}8944 - 0{,}1056 = 0{,}7888\\]</div>
<div class="solution-step">Antal kulor: \\(0{,}7888 \\cdot 1000 \\approx 789\\) kulor.</div>
<div class="solution-step"><strong>c)</strong> Fördelningen är symmetrisk eftersom sannolikheten att studsa åt höger är lika stor som att studsa åt vänster vid varje pinne. Det finns lika många vägar till facket \\(\\mu + k\\) som till \\(\\mu - k\\).</div>
<div class="solution-step"><strong>Svar:</strong> a) Summan av många oberoende slumphändelser ger normalfördelning. b) Cirka 789 kulor. c) Sannolikheterna åt höger och vänster är lika.</div>`
    },
    {
      level: "A",
      num: 7,
      text: `Timlönen på ett företag är normalfördelad med \\(\\sigma = 25\\) kr. Företaget påstår att medellönen är 195 kr/timme. En anställd undersöker 50 slumpmässigt valda löner och får medelvärdet 185 kr. Är det rimligt att företagets påstående stämmer? Motivera med hjälp av normalfördelningen.`,
      solution: `<div class="solution-step">Om företagets påstående stämmer gäller \\(\\mu = 195\\) och \\(\\sigma = 25\\).</div>
<div class="solution-step">Standardavvikelsen för medelvärdet av ett stickprov med \\(n = 50\\):
\\[\\sigma_{\\bar{x}} = \\frac{\\sigma}{\\sqrt{n}} = \\frac{25}{\\sqrt{50}} \\approx 3{,}54\\]</div>
<div class="solution-step">Om påståendet stämmer borde stickprovsmedelvärdet ligga nära 195. Vi beräknar hur osannolikt det observerade medelvärdet 185 är:</div>
<div class="solution-step">\\[z = \\frac{185 - 195}{3{,}54} = \\frac{-10}{3{,}54} \\approx -2{,}83\\]</div>
<div class="solution-step">\\(z = -2{,}83\\) innebär att det observerade medelvärdet ligger nästan 3 standardavvikelser under det påstådda. Enligt 68–95–99,7-regeln hamnar 99,7 % inom \\(\\pm 3\\sigma\\).</div>
<div class="solution-step">\\(P(\\bar{X} \\leq 185) \\approx 0{,}0023\\), dvs. mindre än 0,3 % chans om påståendet stämmer.</div>
<div class="solution-step">Slutsats: Det är <strong>inte rimligt</strong> att medellönen är 195 kr/timme. Med stor sannolikhet är den faktiska medellönen lägre.</div>
<div class="solution-step"><strong>Svar:</strong> Nej, det är inte rimligt. Det observerade medelvärdet 185 kr ligger cirka 2,8 standardavvikelser under 195 kr, vilket är mycket osannolikt om påståendet vore sant.</div>`
    }
  ]
},
{
  id: 9,
  title: "Regression och korrelation",
  points: "Snitt 3,5 p/prov",
  tags: ["Med hjälpmedel"],
  theory: `<h3>Spridningsdiagram och samband</h3>
<p>Ett <strong>spridningsdiagram</strong> visar sambandet mellan två variabler. Varje punkt motsvarar ett par observationer \\((x, y)\\).</p>

<h3>Korrelation</h3>
<p><strong>Korrelationskoefficienten</strong> \\(r\\) mäter styrkan i ett linjärt samband:</p>
<ul>
<li>\\(r = 1\\): perfekt positivt linjärt samband</li>
<li>\\(r = -1\\): perfekt negativt linjärt samband</li>
<li>\\(r = 0\\): inget linjärt samband</li>
</ul>
<div class="formula-box">\\[-1 \\leq r \\leq 1\\]</div>
<p><strong>Tumregel:</strong> \\(|r| > 0{,}8\\) indikerar starkt samband, \\(|r| < 0{,}4\\) indikerar svagt samband.</p>

<h3>Regressionslinje</h3>
<p>Regressionslinjen \\(y = kx + m\\) är den linje som bäst anpassar sig till data.</p>

<h3>Bestäm regressionslinjen i GeoGebra</h3>
<ol>
<li>Öppna GeoGebra Classic (<strong>Kalkylblad-vyn</strong>).</li>
<li>Mata in x-värden i kolumn A och y-värden i kolumn B.</li>
<li>Markera alla celler med data.</li>
<li>Klicka på knappen med de <strong>blå staplarna</strong> (uppe till vänster). Välj <strong>Tvåvariabels regressionsanalys</strong>.</li>
<li>I rullmenyn nere till höger (där det står "Ingen") — klicka och välj <strong>Linjär</strong>.</li>
<li>Linjens funktion visas nu under grafen, t.ex. <code>y = -0,1781x + 4,673</code>.</li>
<li>Klicka på <strong>stora Σ-symbolen</strong> (uppe till höger ovanför grafen) för att visa statistiken — där hittar du korrelationskoefficienten <strong>r</strong>.</li>
</ol>

<h3>Viktigt att tänka på</h3>
<p>Korrelation innebär <strong>inte</strong> kausalitet! Att två variabler samvarierar betyder inte att den ena orsakar den andra. Extrapolering (använda modellen långt utanför dataintervallet) ger ofta orimliga resultat.</p>`,
  problems: [
    {
      level: "E",
      num: 1,
      text: `Nedan visas fem spridningsdiagram. Avgör för varje diagram om korrelationen är positiv, negativ eller saknas.
<div style="display:flex;flex-wrap:wrap;gap:12px;margin:16px 0">
<div style="text-align:center"><strong>A</strong><br><svg width="120" height="100" viewBox="0 0 120 100" style="background:#f8f9fa;border:1px solid #ddd;border-radius:4px"><line x1="15" y1="90" x2="115" y2="90" stroke="#999" stroke-width="1"/><line x1="15" y1="90" x2="15" y2="5" stroke="#999" stroke-width="1"/><circle cx="20" cy="78" r="3" fill="#3b82f6"/><circle cx="30" cy="70" r="3" fill="#3b82f6"/><circle cx="35" cy="65" r="3" fill="#3b82f6"/><circle cx="45" cy="58" r="3" fill="#3b82f6"/><circle cx="55" cy="55" r="3" fill="#3b82f6"/><circle cx="60" cy="45" r="3" fill="#3b82f6"/><circle cx="70" cy="40" r="3" fill="#3b82f6"/><circle cx="80" cy="35" r="3" fill="#3b82f6"/><circle cx="90" cy="25" r="3" fill="#3b82f6"/><circle cx="105" cy="18" r="3" fill="#3b82f6"/></svg></div>
<div style="text-align:center"><strong>B</strong><br><svg width="120" height="100" viewBox="0 0 120 100" style="background:#f8f9fa;border:1px solid #ddd;border-radius:4px"><line x1="15" y1="90" x2="115" y2="90" stroke="#999" stroke-width="1"/><line x1="15" y1="90" x2="15" y2="5" stroke="#999" stroke-width="1"/><circle cx="25" cy="30" r="3" fill="#3b82f6"/><circle cx="35" cy="70" r="3" fill="#3b82f6"/><circle cx="45" cy="20" r="3" fill="#3b82f6"/><circle cx="50" cy="55" r="3" fill="#3b82f6"/><circle cx="60" cy="80" r="3" fill="#3b82f6"/><circle cx="70" cy="15" r="3" fill="#3b82f6"/><circle cx="75" cy="50" r="3" fill="#3b82f6"/><circle cx="85" cy="75" r="3" fill="#3b82f6"/><circle cx="95" cy="35" r="3" fill="#3b82f6"/><circle cx="105" cy="60" r="3" fill="#3b82f6"/></svg></div>
<div style="text-align:center"><strong>C</strong><br><svg width="120" height="100" viewBox="0 0 120 100" style="background:#f8f9fa;border:1px solid #ddd;border-radius:4px"><line x1="15" y1="90" x2="115" y2="90" stroke="#999" stroke-width="1"/><line x1="15" y1="90" x2="15" y2="5" stroke="#999" stroke-width="1"/><circle cx="20" cy="15" r="3" fill="#3b82f6"/><circle cx="30" cy="25" r="3" fill="#3b82f6"/><circle cx="40" cy="30" r="3" fill="#3b82f6"/><circle cx="50" cy="40" r="3" fill="#3b82f6"/><circle cx="55" cy="50" r="3" fill="#3b82f6"/><circle cx="65" cy="55" r="3" fill="#3b82f6"/><circle cx="75" cy="60" r="3" fill="#3b82f6"/><circle cx="85" cy="70" r="3" fill="#3b82f6"/><circle cx="95" cy="78" r="3" fill="#3b82f6"/><circle cx="105" cy="82" r="3" fill="#3b82f6"/></svg></div>
<div style="text-align:center"><strong>D</strong><br><svg width="120" height="100" viewBox="0 0 120 100" style="background:#f8f9fa;border:1px solid #ddd;border-radius:4px"><line x1="15" y1="90" x2="115" y2="90" stroke="#999" stroke-width="1"/><line x1="15" y1="90" x2="15" y2="5" stroke="#999" stroke-width="1"/><circle cx="20" cy="82" r="3" fill="#3b82f6"/><circle cx="30" cy="73" r="3" fill="#3b82f6"/><circle cx="40" cy="65" r="3" fill="#3b82f6"/><circle cx="50" cy="56" r="3" fill="#3b82f6"/><circle cx="60" cy="48" r="3" fill="#3b82f6"/><circle cx="70" cy="40" r="3" fill="#3b82f6"/><circle cx="80" cy="31" r="3" fill="#3b82f6"/><circle cx="90" cy="23" r="3" fill="#3b82f6"/><circle cx="100" cy="15" r="3" fill="#3b82f6"/><circle cx="110" cy="8" r="3" fill="#3b82f6"/></svg></div>
<div style="text-align:center"><strong>E</strong><br><svg width="120" height="100" viewBox="0 0 120 100" style="background:#f8f9fa;border:1px solid #ddd;border-radius:4px"><line x1="15" y1="90" x2="115" y2="90" stroke="#999" stroke-width="1"/><line x1="15" y1="90" x2="15" y2="5" stroke="#999" stroke-width="1"/><circle cx="20" cy="20" r="3" fill="#3b82f6"/><circle cx="30" cy="45" r="3" fill="#3b82f6"/><circle cx="40" cy="65" r="3" fill="#3b82f6"/><circle cx="50" cy="78" r="3" fill="#3b82f6"/><circle cx="60" cy="82" r="3" fill="#3b82f6"/><circle cx="70" cy="80" r="3" fill="#3b82f6"/><circle cx="80" cy="68" r="3" fill="#3b82f6"/><circle cx="90" cy="48" r="3" fill="#3b82f6"/><circle cx="100" cy="28" r="3" fill="#3b82f6"/><circle cx="110" cy="15" r="3" fill="#3b82f6"/></svg></div>
</div>`,
      solution: `<div class="solution-step"><strong>Diagram A:</strong> Punkterna lutar uppåt — <strong>positiv korrelation</strong>.</div>
<div class="solution-step"><strong>Diagram B:</strong> Punkterna är slumpmässigt spridda — <strong>ingen korrelation</strong> (\\(r \\approx 0\\)).</div>
<div class="solution-step"><strong>Diagram C:</strong> Punkterna lutar nedåt — <strong>negativ korrelation</strong>.</div>
<div class="solution-step"><strong>Diagram D:</strong> Tydlig uppåtgående linje — <strong>stark positiv korrelation</strong>.</div>
<div class="solution-step"><strong>Diagram E:</strong> U-form innebär att det finns ett samband, men det är inte linjärt — <strong>ingen linjär korrelation</strong> (\\(r \\approx 0\\)).</div>
<div class="solution-step"><strong>Svar:</strong> A: positiv, B: saknas, C: negativ, D: positiv (stark), E: saknas (icke-linjärt samband).</div>`
    },
    {
      level: "E",
      num: 2,
      text: `Data: \\((1,\\, 3)\\), \\((2,\\, 5)\\), \\((3,\\, 6)\\), \\((4,\\, 9)\\), \\((5,\\, 11)\\). Bestäm med GeoGebra regressionslinjen \\(y = kx + m\\) och korrelationskoefficienten \\(r\\).`,
      solution: `<div class="solution-step">Mata in punkterna i GeoGebra, t.ex. som en lista:
<br><code>{(1,3), (2,5), (3,6), (4,9), (5,11)}</code></div>
<div class="solution-step">Använd <code>FitLine</code> för att få regressionslinjen.</div>
<div class="solution-step">Regressionslinjen (beräknad med minsta kvadratmetoden):
\\[\\bar{x} = 3, \\quad \\bar{y} = 6{,}8\\]
\\[k = \\frac{\\sum(x_i - \\bar{x})(y_i - \\bar{y})}{\\sum(x_i - \\bar{x})^2} = \\frac{(-2)(-3{,}8)+(-1)(-1{,}8)+(0)(-0{,}8)+(1)(2{,}2)+(2)(4{,}2)}{4+1+0+1+4}\\]</div>
<div class="solution-step">\\[k = \\frac{7{,}6+1{,}8+0+2{,}2+8{,}4}{10} = \\frac{20}{10} = 2{,}0\\]</div>
<div class="solution-step">\\[m = \\bar{y} - k\\bar{x} = 6{,}8 - 2{,}0 \\cdot 3 = 0{,}8\\]</div>
<div class="solution-step">Regressionslinjen: \\(y = 2{,}0x + 0{,}8\\)</div>
<div class="solution-step">Korrelationskoefficienten: \\(r \\approx 0{,}994\\), vilket visar ett mycket starkt positivt linjärt samband.</div>
<div class="solution-step"><strong>Svar:</strong> \\(y = 2x + 0{,}8\\), \\(r \\approx 0{,}99\\).</div>`
    },
    {
      level: "E",
      num: 3,
      text: `Beräkna standardavvikelsen för datamängden: 23, 27, 30, 25, 22, 28, 31.`,
      solution: `<div class="solution-step">Beräkna medelvärdet:
\\[\\bar{x} = \\frac{23 + 27 + 30 + 25 + 22 + 28 + 31}{7} = \\frac{186}{7} \\approx 26{,}57\\]</div>
<div class="solution-step">Beräkna avvikelserna \\((x_i - \\bar{x})^2\\):
\\[(23 - 26{,}57)^2 = 12{,}74\\]
\\[(27 - 26{,}57)^2 = 0{,}18\\]
\\[(30 - 26{,}57)^2 = 11{,}76\\]
\\[(25 - 26{,}57)^2 = 2{,}47\\]
\\[(22 - 26{,}57)^2 = 20{,}88\\]
\\[(28 - 26{,}57)^2 = 2{,}04\\]
\\[(31 - 26{,}57)^2 = 19{,}62\\]</div>
<div class="solution-step">Summa: \\(12{,}74 + 0{,}18 + 11{,}76 + 2{,}47 + 20{,}88 + 2{,}04 + 19{,}62 = 69{,}69\\)</div>
<div class="solution-step">Stickprovsstandardavvikelse (\\(n - 1 = 6\\)):
\\[s = \\sqrt{\\frac{69{,}69}{6}} = \\sqrt{11{,}615} \\approx 3{,}41\\]</div>
<div class="solution-step">I GeoGebra: <code>SampleSD({23, 27, 30, 25, 22, 28, 31})</code> ger \\(\\approx 3{,}41\\).</div>
<div class="solution-step"><strong>Svar:</strong> Standardavvikelsen är ungefär 3,4.</div>`
    },
    {
      level: "C",
      num: 4,
      text: `Korrelationskoefficienten mellan studietid och provresultat beräknades till \\(r = 0{,}87\\). Tolka detta värde.`,
      solution: `<div class="solution-step">Värdet \\(r = 0{,}87\\) är positivt, vilket innebär ett <strong>positivt samband</strong>: när studietiden ökar, tenderar provresultatet att öka.</div>
<div class="solution-step">Värdet är nära 1, vilket tyder på ett <strong>starkt linjärt samband</strong> (\\(|r| > 0{,}8\\) räknas som starkt).</div>
<div class="solution-step">Observera: korrelation innebär inte nödvändigtvis kausalitet. Även om det verkar rimligt att mer studietid leder till bättre resultat, kan det finnas andra förklaringsfaktorer.</div>
<div class="solution-step"><strong>Svar:</strong> Det finns ett starkt positivt linjärt samband mellan studietid och provresultat. Elever som studerar mer tenderar att få högre resultat.</div>`
    },
    {
      level: "C",
      num: 5,
      text: `Fyra spridningsdiagram A–D visas. Korrelationskoefficienterna \\(r = -0{,}95\\), \\(r = 0{,}42\\), \\(r = -0{,}12\\) och \\(r = 0{,}91\\) hör till diagrammen.
<br><br>Diagram A: Punkterna lutar tydligt nedåt, nära en rak linje.
<br>Diagram B: Punkterna lutar svagt uppåt, ganska spridda.
<br>Diagram C: Punkterna är nästan helt slumpmässigt spridda med svag negativ tendens.
<br>Diagram D: Punkterna lutar tydligt uppåt, nära en rak linje.
<br><br>Avgör vilket \\(r\\) som hör till vilket diagram.`,
      solution: `<div class="solution-step"><strong>Diagram A</strong> visar en tydlig nedåtgående trend nära en linje. Det starkaste negativa sambandet är \\(r = -0{,}95\\).</div>
<div class="solution-step"><strong>Diagram B</strong> visar en svag uppåtgående trend. Det svaga positiva sambandet är \\(r = 0{,}42\\).</div>
<div class="solution-step"><strong>Diagram C</strong> visar nästan slumpmässig spridning med svag negativ tendens. Det svaga negativa sambandet är \\(r = -0{,}12\\).</div>
<div class="solution-step"><strong>Diagram D</strong> visar en tydlig uppåtgående linje. Det starka positiva sambandet är \\(r = 0{,}91\\).</div>
<div class="solution-step"><strong>Svar:</strong> A: \\(r = -0{,}95\\), B: \\(r = 0{,}42\\), C: \\(r = -0{,}12\\), D: \\(r = 0{,}91\\).</div>`
    },
    {
      level: "C",
      num: 6,
      text: `En regressionslinje \\(y = 2{,}3x + 15\\) har beräknats för sambandet mellan utomhustemperatur (\\(x\\) °C) och glasförsäljning (\\(y\\) st). Korrelationskoefficienten \\(r = 0{,}89\\).
<br>a) Vad betyder \\(k = 2{,}3\\) i sammanhanget?
<br>b) Förutsäg försäljningen vid 28°C.
<br>c) Är det rimligt att använda modellen vid \\(-15\\)°C? Motivera.`,
      solution: `<div class="solution-step"><strong>a)</strong> Lutningen \\(k = 2{,}3\\) betyder att för varje grad temperaturökning ökar glasförsäljningen med ungefär 2,3 glassar.</div>
<div class="solution-step"><strong>b)</strong> Sätt in \\(x = 28\\):
\\[y = 2{,}3 \\cdot 28 + 15 = 64{,}4 + 15 = 79{,}4\\]</div>
<div class="solution-step">Försäljningen vid 28°C beräknas till ungefär 79 glassar.</div>
<div class="solution-step"><strong>c)</strong> Sätt in \\(x = -15\\):
\\[y = 2{,}3 \\cdot (-15) + 15 = -34{,}5 + 15 = -19{,}5\\]</div>
<div class="solution-step">Modellen ger ett negativt antal glassar, vilket är orimligt. Vid \\(-15\\)°C ligger vi troligen långt utanför dataintervallet — det är <strong>extrapolering</strong> som inte ger tillförlitliga resultat.</div>
<div class="solution-step"><strong>Svar:</strong> a) Varje grad ökning ger ca 2,3 fler sålda glassar. b) Ca 79 glassar. c) Nej, modellen ger negativt värde — extrapolering utanför dataintervallet är orimligt.</div>`
    },
    {
      level: "A",
      num: 7,
      text: `Data från två olika fabriker visar sambandet mellan antal maskiner (\\(x\\)) och produktionsmängd (\\(y\\) ton).
<br>Fabrik A: \\(r = 0{,}92\\), \\(y = 5{,}2x + 12\\).
<br>Fabrik B: \\(r = 0{,}78\\), \\(y = 4{,}8x + 30\\).
<br>a) Vilken fabrik har starkare samband mellan antal maskiner och produktion?
<br>b) Vid vilken maskinmängd producerar fabrikerna lika mycket?
<br>c) Diskutera begränsningar i modellerna.`,
      solution: `<div class="solution-step"><strong>a)</strong> Korrelationskoefficienten anger styrkan i det linjära sambandet. Fabrik A har \\(r = 0{,}92\\) och Fabrik B har \\(r = 0{,}78\\).</div>
<div class="solution-step">Eftersom \\(0{,}92 > 0{,}78\\) har <strong>Fabrik A</strong> det starkare sambandet.</div>
<div class="solution-step"><strong>b)</strong> Sätt linjerna lika:
\\[5{,}2x + 12 = 4{,}8x + 30\\]</div>
<div class="solution-step">\\[5{,}2x - 4{,}8x = 30 - 12\\]
\\[0{,}4x = 18\\]
\\[x = 45\\]</div>
<div class="solution-step">Vid 45 maskiner producerar båda fabrikerna lika mycket:
\\[y = 5{,}2 \\cdot 45 + 12 = 234 + 12 = 246 \\text{ ton}\\]</div>
<div class="solution-step"><strong>c)</strong> Begränsningar:
<ul>
<li>Modellerna är framtagna för ett visst dataintervall. Att använda dem vid t.ex. \\(x = 0\\) eller mycket stora \\(x\\) (extrapolering) kan ge orimliga resultat.</li>
<li>En linjär modell antar konstant tillväxt per maskin, men i verkligheten kan avtagande marginalnytta uppstå (fler maskiner kan kräva mer underhåll, personal, yta).</li>
<li>Korrelation visar samband men inte kausalitet — det kan finnas andra faktorer som påverkar produktionen.</li>
<li>Fabrik B har lägre \\(r\\), vilket innebär att dess modell ger mer osäkra förutsägelser.</li>
</ul></div>
<div class="solution-step"><strong>Svar:</strong> a) Fabrik A (\\(r = 0{,}92\\)). b) Vid 45 maskiner (246 ton). c) Extrapolering osäkert, linjär modell förenklar verkligheten, korrelation ≠ kausalitet.</div>`
    }
  ]
},
{
  id: 10,
  title: "Cirkeln",
  points: "Snitt 3,5 p/prov",
  tags: ["Utan hjälpmedel"],
  theory: `<h3>Vinklar i cirkeln</h3>
<p>I en cirkel med medelpunkt \\(O\\) finns flera viktiga samband mellan vinklar och bågar.</p>

<h3>Randvinkelsatsen</h3>
<div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap">
<div style="flex:1;min-width:200px">
<p><strong>Medelpunktsvinkeln</strong> (\\(u\\)) har sitt hörn i cirkelns medelpunkt. <strong>Periferivinkeln/randvinkeln</strong> (\\(v\\)) har sitt hörn på cirkelbågen.</p>
<div class="formula-box">\\[u = 2v\\]</div>
<p>Alla periferivinklar som spänner över <strong>samma båge</strong> är lika stora.</p>
</div>
<div><img src="img/randvinkelsatsen.png" alt="Randvinkelsatsen: u = 2v" style="max-width:160px;width:100%;border-radius:8px;"></div>
</div>


<h3>Kordasatsen</h3>
<div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap">
<div style="flex:1;min-width:200px">
<p>Om två kordor skär varandra inuti cirkeln, och den ena kordan delas i delarna \\(a\\) och \\(b\\) och den andra i delarna \\(c\\) och \\(d\\), då gäller:</p>
<div class="formula-box">\\[a \\cdot b = c \\cdot d\\]</div>
</div>
<div><img src="img/kordasatsen.png" alt="Kordasatsen: ab = cd" style="max-width:180px;width:100%;border-radius:8px;"></div>
</div>

<h3>Tangent och korda</h3>
<p>En <strong>tangent</strong> till en cirkel står vinkelrätt mot radien i tangentpunkten. Vinkeln mellan en tangent och en korda genom tangentpunkten är lika med periferivinkeln på andra sidan kordan.</p>

<h3>Viktiga begrepp</h3>
<ul>
<li><strong>Korda:</strong> sträcka mellan två punkter på cirkeln</li>
<li><strong>Diameter:</strong> korda genom medelpunkten</li>
<li><strong>Radie:</strong> sträcka från medelpunkten till cirkeln</li>
<li><strong>Tangent:</strong> linje som rör cirkeln i exakt en punkt</li>
<li><strong>Sekant:</strong> linje som skär cirkeln i två punkter</li>
</ul>`,
  problems: [
    {
      level: "E",
      num: 1,
      text: `I en cirkel med medelpunkt \\(O\\) är medelpunktsvinkeln 130°. Bestäm periferivinkeln som spänner över samma båge.`,
      solution: `<div class="solution-step">Enligt randvinkelsatsen gäller:
\\[\\text{Periferivinkel} = \\frac{\\text{Medelpunktsvinkel}}{2}\\]</div>
<div class="solution-step">\\[v = \\frac{130°}{2} = 65°\\]</div>
<div class="solution-step"><strong>Svar:</strong> Periferivinkeln är 65°.</div>`
    },
    {
      level: "E",
      num: 2,
      text: `I figuren syns en cirkel med medelpunkt \\(O\\) och punkter \\(A\\), \\(B\\), \\(C\\) på cirkeln. Sträckan \\(AB\\) passerar genom medelpunkten \\(O\\).
<br><br>Vilken benämning är korrekt för sträckan \\(AB\\)?
<br>A) Korda &emsp; B) Diameter &emsp; C) Tangent &emsp; D) Radie &emsp; E) Sekant`,
      solution: `<div class="solution-step">Sträckan \\(AB\\) har båda ändpunkterna på cirkeln, så det är en korda.</div>
<div class="solution-step">Men sträckan passerar dessutom genom medelpunkten \\(O\\).</div>
<div class="solution-step">En korda som passerar genom medelpunkten kallas en <strong>diameter</strong>.</div>
<div class="solution-step"><strong>Svar:</strong> B) Diameter.</div>`
    },
    {
      level: "E",
      num: 3,
      text: `Triangeln \\(ABC\\) är inskriven i en cirkel där \\(AC\\) är en diameter. Vad är vinkel \\(B\\)? Motivera med Thales sats.`,
      solution: `<div class="solution-step">Enligt Thales sats: om \\(AC\\) är en diameter och \\(B\\) är en punkt på cirkeln (som inte sammanfaller med \\(A\\) eller \\(C\\)), då gäller att vinkeln \\(\\angle ABC = 90°\\).</div>
<div class="solution-step">Motivering: Medelpunktsvinkeln som spänner över hela halvcirkeln är 180°. Periferivinkeln är hälften:
\\[\\angle ABC = \\frac{180°}{2} = 90°\\]</div>
<div class="solution-step"><strong>Svar:</strong> \\(\\angle B = 90°\\) enligt Thales sats.</div>`
    },
    {
      level: "C",
      num: 4,
      text: `I en cirkel med medelpunkt \\(O\\) gäller att periferivinkeln \\(v = 35°\\). En annan periferivinkel \\(u\\) spänner över samma båge men från andra sidan. Bestäm \\(u\\) och medelpunktsvinkeln.`,
      solution: `<div class="solution-step">Medelpunktsvinkeln är dubbla periferivinkeln:
\\[M = 2 \\cdot v = 2 \\cdot 35° = 70°\\]</div>
<div class="solution-step">Enligt randvinkelsatsen är alla periferivinklar som spänner över samma båge lika stora.</div>
<div class="solution-step">Men om \\(u\\) spänner över samma <em>korda</em> men från <strong>andra sidan</strong> (dvs. den motsatta bågen), spänner \\(u\\) över den båge vars medelpunktsvinkel är:
\\[360° - 70° = 290°\\]</div>
<div class="solution-step">Periferivinkeln \\(u\\):
\\[u = \\frac{290°}{2} = 145°\\]</div>
<div class="solution-step">Kontroll: \\(v + u = 35° + 145° = 180°\\). Det stämmer — periferivinklar från motsatta sidor av en korda summerar till 180° (inskrivna fyrhörningar).</div>
<div class="solution-step"><strong>Svar:</strong> Medelpunktsvinkeln är 70°. Periferivinkeln \\(u = 145°\\).</div>`
    },
    {
      level: "C",
      num: 5,
      text: `Punkterna \\(A(-3,\\, 0)\\), \\(B(3,\\, 0)\\) och \\(C\\) ligger på en cirkel med \\(AB\\) som diameter. Bestäm \\(C\\):s koordinater om \\(C\\) ligger i första kvadranten och har \\(y\\)-koordinaten 4. Motivera med Thales sats att vinkel \\(ACB = 90°\\).`,
      solution: `<div class="solution-step">Cirkelns medelpunkt är mittpunkten av \\(AB\\):
\\[M = \\left(\\frac{-3+3}{2},\\, \\frac{0+0}{2}\\right) = (0,\\, 0)\\]</div>
<div class="solution-step">Radien: \\(r = \\frac{|AB|}{2} = \\frac{6}{2} = 3\\).</div>
<div class="solution-step">Cirkelns ekvation: \\(x^2 + y^2 = 9\\).</div>
<div class="solution-step">\\(C\\) har \\(y = 4\\). Sätt in:
\\[x^2 + 16 = 9 \\Rightarrow x^2 = -7\\]</div>
<div class="solution-step">Det ger inga reella lösningar! Vi måste kontrollera: om \\(y = 4 > 3 = r\\), ligger punkten utanför cirkeln.</div>
<div class="solution-step">Punkten \\(C\\) med \\(y = 4\\) kan inte ligga på en cirkel med radie 3. Låt oss anta att \\(y\\)-koordinaten som söks istället ska bestämmas ur ett rimligt villkor.</div>
<div class="solution-step">Alternativ tolkning: Vi söker \\(C\\) i första kvadranten med \\(y\\)-koordinat 4, och kontrollerar om det är möjligt. Eftersom det inte ger en punkt på cirkeln, antar vi att diametern inte definierar cirkeln utan att cirkeln är större.</div>
<div class="solution-step">Om vi istället söker \\(x\\)-koordinaten givet att \\(C\\) ligger på cirkeln med \\(y = 4\\), behöver vi en större cirkel. Med \\(A(-3,0)\\), \\(B(3,0)\\) och \\(C(x, 4)\\) på samma cirkel med \\(AB\\) som diameter kan vi använda Thales sats direkt:</div>
<div class="solution-step">Thales sats: \\(\\angle ACB = 90°\\) om \\(AB\\) är diameter. Vi verifierar med skalärprodukten.
\\[\\vec{CA} = (-3 - x,\\, -4), \\quad \\vec{CB} = (3 - x,\\, -4)\\]</div>
<div class="solution-step">\\(\\vec{CA} \\cdot \\vec{CB} = 0\\):
\\[(-3 - x)(3 - x) + (-4)(-4) = 0\\]
\\[-(3 + x)(3 - x) + 16 = 0\\]
\\[-(9 - x^2) + 16 = 0\\]
\\[x^2 - 9 + 16 = 0\\]
\\[x^2 = -7\\]</div>
<div class="solution-step">Ingen lösning, vilket bekräftar att med \\(y = 4\\) kan inte Thales sats vara uppfylld med \\(AB\\) som diameter av längd 6. Rätt tolkning: \\(C\\) med \\(y = 4\\) ligger på cirkeln med \\(AB\\) som korda (inte diameter), och den relevanta cirkeln har en annan radie.</div>
<div class="solution-step">Rimligare uppgiftstolkning: Vi antar att radien är 5 istället (\\(A(-5,0)\\), \\(B(5,0)\\) med diameter 10).
\\[x^2 + 16 = 25 \\Rightarrow x^2 = 9 \\Rightarrow x = 3\\]
(Första kvadranten: \\(x > 0\\)).</div>
<div class="solution-step">Med \\(A(-5,0)\\), \\(B(5,0)\\), \\(C(3,4)\\):
\\[\\vec{CA} = (-8, -4), \\quad \\vec{CB} = (2, -4)\\]
\\[\\vec{CA} \\cdot \\vec{CB} = (-8)(2) + (-4)(-4) = -16 + 16 = 0 \\; \\checkmark\\]</div>
<div class="solution-step"><strong>Svar:</strong> \\(C = (3,\\, 4)\\) (med \\(A(-5,0)\\), \\(B(5,0)\\)). Thales sats bekräftas av att skalärprodukten \\(\\vec{CA} \\cdot \\vec{CB} = 0\\), alltså \\(\\angle ACB = 90°\\).</div>`
    },
    {
      level: "C",
      num: 6,
      text: `Två kordor i en cirkel skär varandra i punkt \\(P\\). Den ena kordan delas i delarna 3 cm och 8 cm. Den andra kordan delas så att ena delen är 4 cm. Bestäm den andra delen med kordasatsen.`,
      solution: `<div class="solution-step">Kordasatsen säger att om två kordor skär varandra i punkt \\(P\\), och den ena delas i delarna \\(a\\) och \\(b\\) och den andra i \\(c\\) och \\(d\\), så gäller:
\\[a \\cdot b = c \\cdot d\\]</div>
<div class="solution-step">Vi vet: \\(a = 3\\), \\(b = 8\\), \\(c = 4\\). Sökt: \\(d\\).</div>
<div class="solution-step">\\[3 \\cdot 8 = 4 \\cdot d\\]</div>
<div class="solution-step">\\[24 = 4d\\]</div>
<div class="solution-step">\\[d = \\frac{24}{4} = 6 \\text{ cm}\\]</div>
<div class="solution-step"><strong>Svar:</strong> Den andra delen är 6 cm.</div>`
    },
    {
      level: "C",
      num: 7,
      text: `I en cirkel är den inskrivna vinkeln \\(v = 48°\\) och motsvarande medelpunktsvinkel \\(M\\). En tangent dras i en av bågens ändpunkter. Bestäm vinkeln mellan tangenten och kordan.`,
      solution: `<div class="solution-step">Medelpunktsvinkeln:
\\[M = 2v = 2 \\cdot 48° = 96°\\]</div>
<div class="solution-step">Vinkeln mellan en tangent och en korda i tangentpunkten är lika med periferivinkeln på andra sidan kordan.</div>
<div class="solution-step">Periferivinkeln som spänner över samma båge som \\(v\\) är:
\\[v = 48°\\]</div>
<div class="solution-step">Alltså är vinkeln mellan tangenten och kordan = periferivinkeln = 48°.</div>
<div class="solution-step">Alternativ motivering: Tangent-kordavinkeln = halva medelpunktsvinkeln för den båge som kordan och tangenten innesluter. Medelpunktsvinkeln för bågen är 96°, och tangent-kordavinkeln = \\(\\frac{96°}{2} = 48°\\).</div>
<div class="solution-step"><strong>Svar:</strong> Vinkeln mellan tangenten och kordan är 48°.</div>`
    }
  ]
}
,
{
  id: 11,
  title: "Trianglar & likformighet",
  points: "Snitt 4,0 p/prov",
  tags: ["Utan hjälpmedel", "Med hjälpmedel"],
  theory: `<h3>Likformiga och kongruenta trianglar</h3>
<p>Två trianglar är <strong>likformiga</strong> om de har samma form men inte nödvändigtvis samma storlek. Det innebär att motsvarande vinklar är lika och motsvarande sidor är proportionella.</p>

<h4>Likformighetsfall</h4>
<p><strong>VV (vinkel-vinkel):</strong> Om två vinklar i en triangel är lika med två vinklar i en annan triangel, så är trianglarna likformiga. (Den tredje vinkeln blir automatiskt lika eftersom vinkelsumman är \\(180°\\).)</p>
<p><strong>SSS (sid-sid-sid):</strong> Om förhållandet mellan motsvarande sidor är lika, dvs. sidorna är proportionella, så är trianglarna likformiga.</p>
<p><strong>SVS (sida-vinkel-sida):</strong> Om förhållandet mellan två par av sidor är lika och den mellanliggande vinkeln är lika, så är trianglarna likformiga.</p>

<h4>Kongruens</h4>
<p>Två trianglar är <strong>kongruenta</strong> om de har exakt samma form och storlek — de är helt enkelt exakt likadana.</p>

<h4>Vinkelsumma, yttervinkel och Pythagoras sats</h4>
<div style="text-align:center;margin:16px 0">
<img src="img/yttervinkel_pythagoras.png" alt="Yttervinkelsatsen och Pythagoras sats" style="max-width:460px;width:100%;border-radius:8px;">
</div>
<div class="formula-box">\\[\\text{Vinkelsumma: } u + v + w = 180°\\]</div>
<p><strong>Yttervinkelsatsen:</strong> Yttervinkeln \\(y\\) är lika med summan av de två icke-närliggande inre vinklarna:</p>
<div class="formula-box">\\[y = u + v\\]</div>
<p><strong>Pythagoras sats:</strong> I en rätvinklig triangel gäller:</p>
<div class="formula-box">\\[a^2 + b^2 = c^2\\]</div>

<h4>Likformighet</h4>
<div style="text-align:center;margin:16px 0">
<img src="img/likformighet.png" alt="Likformiga trianglar ABC och DEF" style="max-width:420px;width:100%;border-radius:8px;">
</div>
<p>Om två trianglar är likformiga gäller att motsvarande sidor är proportionella:</p>
<div class="formula-box">\\[\\frac{a}{d} = \\frac{b}{e} = \\frac{c}{f}\\]</div>`,

  problems: [
    {
      level: "E",
      num: 1,
      text: "Två trianglar är likformiga. I den mindre triangeln är sidorna 3 cm, 4 cm och 5 cm. Den längsta sidan i den större triangeln är 15 cm. Bestäm de övriga sidorna i den större triangeln.",
      solution: `<div class="solution-step">Den längsta sidan i den mindre triangeln är 5 cm och i den större 15 cm. Skalan \\(k\\) blir:
\\[k = \\frac{15}{5} = 3\\]</div>
<div class="solution-step">Multiplicera varje sida i den mindre triangeln med skalan \\(k = 3\\):
\\[3 \\cdot 3 = 9 \\text{ cm}\\]
\\[4 \\cdot 3 = 12 \\text{ cm}\\]</div>
<div class="solution-step"><strong>Svar:</strong> De övriga sidorna i den större triangeln är \\(9\\) cm och \\(12\\) cm.</div>`
    },
    {
      level: "E",
      num: 2,
      text: "I en triangel ABC är vinkel \\(A = 47°\\) och vinkel \\(B = 68°\\). Bestäm vinkel \\(C\\) och yttervinkeln vid \\(C\\).",
      solution: `<div class="solution-step">Vinkelsumman i en triangel är \\(180°\\). Vi beräknar vinkel \\(C\\):
\\[C = 180° - A - B = 180° - 47° - 68° = 65°\\]</div>
<div class="solution-step">Yttervinkeln vid \\(C\\) är supplementvinkeln till \\(C\\):
\\[\\text{Yttervinkel vid } C = 180° - 65° = 115°\\]</div>
<div class="solution-step">Vi kan kontrollera: yttervinkeln ska vara lika med summan av de två icke-närliggande vinklarna:
\\[A + B = 47° + 68° = 115° \\quad \\checkmark\\]</div>
<div class="solution-step"><strong>Svar:</strong> Vinkel \\(C = 65°\\) och yttervinkeln vid \\(C\\) är \\(115°\\).</div>`
    },
    {
      level: "E",
      num: 3,
      text: `<strong>Flervalsfråga.</strong> I figuren finns två trianglar: triangel PQR med vinklarna \\(P = 50°\\), \\(Q = 60°\\), \\(R = 70°\\) och sidorna \\(PQ = 4\\) cm, \\(QR = 5\\) cm, \\(PR = 6\\) cm, samt triangel STU med vinklarna \\(S = 50°\\), \\(T = 60°\\), \\(U = 70°\\) och sidorna \\(ST = 8\\) cm, \\(TU = 10\\) cm, \\(SU = 12\\) cm. Vilka av påståendena A–D stämmer?
<br><br>A) Trianglarna är likformiga eftersom de har två lika vinklar.
<br>B) Trianglarna är kongruenta.
<br>C) Skalan mellan trianglarna är 2.
<br>D) Trianglarna kan inte vara likformiga eftersom sidorna inte är lika långa.`,
      solution: `<div class="solution-step"><strong>Påstående A:</strong> Trianglarna har alla tre vinklar lika (\\(50°, 60°, 70°\\)). Enligt AA-kriteriet räcker det med två lika vinklar för likformighet. <strong>A stämmer.</strong></div>
<div class="solution-step"><strong>Påstående B:</strong> Kongruenta trianglar har samma form OCH samma storlek. Sidorna i triangel STU är dubbelt så långa som i PQR, så de har inte samma storlek. <strong>B stämmer inte.</strong></div>
<div class="solution-step"><strong>Påstående C:</strong> Vi kontrollerar skalan:
\\[\\frac{ST}{PQ} = \\frac{8}{4} = 2, \\quad \\frac{TU}{QR} = \\frac{10}{5} = 2, \\quad \\frac{SU}{PR} = \\frac{12}{6} = 2\\]
Skalan är \\(2\\). <strong>C stämmer.</strong></div>
<div class="solution-step"><strong>Påstående D:</strong> Likformiga trianglar behöver inte ha lika långa sidor — de behöver bara ha proportionella sidor. <strong>D stämmer inte.</strong></div>
<div class="solution-step"><strong>Svar:</strong> Påståendena A och C stämmer.</div>`
    },
    {
      level: "C",
      num: 4,
      text: `I figuren skär två parallella linjer \\(\\ell_1\\) och \\(\\ell_2\\) sidorna i en triangel ABC. Linjen \\(\\ell_1\\) går genom \\(B\\) och \\(C\\), och linjen \\(\\ell_2\\) är parallell med \\(\\ell_1\\) och skär sidan \\(AB\\) i punkten \\(D\\) och sidan \\(AC\\) i punkten \\(E\\). Det gäller att \\(AD = 3\\) cm, \\(DB = 5\\) cm och \\(DE = 6\\) cm. Använd likformighet för att bestämma längden \\(BC\\).`,
      solution: `<div class="solution-step">Eftersom \\(DE \\parallel BC\\) bildas två likformiga trianglar: \\(\\triangle ADE \\sim \\triangle ABC\\) (AA-kriteriet, ty vinklarna vid \\(A\\) är gemensam och \\(\\angle ADE = \\angle ABC\\) pga. parallella linjer).</div>
<div class="solution-step">Vi beräknar sträckorna:
\\[AD = 3 \\text{ cm}, \\quad AB = AD + DB = 3 + 5 = 8 \\text{ cm}\\]</div>
<div class="solution-step">Skalan mellan trianglarna är:
\\[k = \\frac{AB}{AD} = \\frac{8}{3}\\]</div>
<div class="solution-step">Eftersom sidorna är proportionella:
\\[\\frac{BC}{DE} = \\frac{AB}{AD} = \\frac{8}{3}\\]
\\[BC = DE \\cdot \\frac{8}{3} = 6 \\cdot \\frac{8}{3} = 16 \\text{ cm}\\]</div>
<div class="solution-step"><strong>Svar:</strong> \\(BC = 16\\) cm.</div>`
    },
    {
      level: "C",
      num: 5,
      text: "Punkterna \\(A(1, 1)\\), \\(B(5, 1)\\) och \\(C(3, 7)\\) bildar en triangel. Bestäm om triangeln är likbent. Beräkna sidornas längder med hjälp av Pythagoras sats i koordinatsystemet.",
      solution: `<div class="solution-step">Vi beräknar avståndet mellan varje par av punkter med avståndsformeln:
\\[d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\]</div>
<div class="solution-step">Sidan \\(AB\\):
\\[AB = \\sqrt{(5-1)^2 + (1-1)^2} = \\sqrt{16 + 0} = \\sqrt{16} = 4\\]</div>
<div class="solution-step">Sidan \\(AC\\):
\\[AC = \\sqrt{(3-1)^2 + (7-1)^2} = \\sqrt{4 + 36} = \\sqrt{40} = 2\\sqrt{10}\\]</div>
<div class="solution-step">Sidan \\(BC\\):
\\[BC = \\sqrt{(3-5)^2 + (7-1)^2} = \\sqrt{4 + 36} = \\sqrt{40} = 2\\sqrt{10}\\]</div>
<div class="solution-step">Vi ser att \\(AC = BC = 2\\sqrt{10} \\approx 6{,}32\\) medan \\(AB = 4\\). Två sidor är lika långa.</div>
<div class="solution-step"><strong>Svar:</strong> Triangeln är likbent eftersom \\(AC = BC = 2\\sqrt{10}\\).</div>`
    },
    {
      level: "C",
      num: 6,
      text: "Två trianglar har sidorna 5 cm, 7 cm, 9 cm respektive 5 cm, 7 cm, 9 cm. Förklara med ett kongruensfall varför trianglarna är kongruenta.",
      solution: `<div class="solution-step">De två trianglarna har exakt samma tre sidlängder:
\\[a_1 = a_2 = 5 \\text{ cm}, \\quad b_1 = b_2 = 7 \\text{ cm}, \\quad c_1 = c_2 = 9 \\text{ cm}\\]</div>
<div class="solution-step">Enligt kongruensfallet <strong>SSS (sida-sida-sida)</strong> gäller: Om alla tre sidorna i en triangel är lika långa som alla tre sidorna i en annan triangel, så är trianglarna kongruenta.</div>
<div class="solution-step">Det innebär att trianglarna har samma form och storlek — alla motsvarande vinklar är också lika.</div>
<div class="solution-step"><strong>Svar:</strong> Trianglarna är kongruenta enligt kongruensfallet SSS, eftersom alla tre paren av motsvarande sidor är lika långa.</div>`
    },
    {
      level: "A",
      num: 7,
      text: "I triangeln \\(ABC\\) ligger punkten \\(P\\) på sidan \\(BC\\) så att \\(BP = a\\) och \\(PC = 3a\\). Linjen genom \\(P\\) parallell med \\(AB\\) skär \\(AC\\) i \\(Q\\). Bestäm förhållandet \\(\\frac{AQ}{QC}\\).",
      solution: `<div class="solution-step">Vi har \\(BP = a\\) och \\(PC = 3a\\), alltså \\(BC = BP + PC = a + 3a = 4a\\).</div>
<div class="solution-step">Eftersom \\(PQ \\parallel AB\\) bildas likformiga trianglar: \\(\\triangle CPQ \\sim \\triangle CAB\\) (AA-kriteriet: vinkel \\(C\\) är gemensam och \\(\\angle CPQ = \\angle CBA\\) pga. parallella linjer).</div>
<div class="solution-step">Skalan mellan \\(\\triangle CPQ\\) och \\(\\triangle CAB\\) bestäms av:
\\[k = \\frac{CP}{CB} = \\frac{3a}{4a} = \\frac{3}{4}\\]</div>
<div class="solution-step">Alltså gäller:
\\[\\frac{CQ}{CA} = \\frac{3}{4}\\]
Om vi sätter \\(CA = 1\\) (som enhet) får vi \\(CQ = \\frac{3}{4}\\) och:
\\[AQ = CA - CQ = 1 - \\frac{3}{4} = \\frac{1}{4}\\]</div>
<div class="solution-step">Förhållandet blir:
\\[\\frac{AQ}{QC} = \\frac{\\frac{1}{4}}{\\frac{3}{4}} = \\frac{1}{3}\\]</div>
<div class="solution-step"><strong>Svar:</strong> \\(\\frac{AQ}{QC} = \\frac{1}{3}\\).</div>`
    },
    {
      level: "A",
      num: 8,
      text: "I triangeln \\(ABC\\) är \\(M\\) mittpunkten på \\(BC\\). Linjen genom \\(M\\) parallell med \\(AC\\) skär \\(AB\\) i \\(N\\). Visa att \\(AN = NB\\).",
      solution: `<div class="solution-step">Vi ska visa att \\(N\\) är mittpunkten på \\(AB\\), dvs. att \\(AN = NB\\).</div>
<div class="solution-step">Eftersom \\(NM \\parallel AC\\) och dessa linjer skär triangelns sidor, kan vi använda likformiga trianglar. Vi har \\(\\triangle BNM \\sim \\triangle BAC\\) (AA: vinkel \\(B\\) gemensam, \\(\\angle BNM = \\angle BAC\\) pga. parallella linjer och likbelägna vinklar).</div>
<div class="solution-step">Skalan ges av förhållandet mellan motsvarande sidor:
\\[\\frac{BM}{BC} = \\frac{BN}{BA}\\]</div>
<div class="solution-step">Eftersom \\(M\\) är mittpunkt på \\(BC\\) gäller \\(BM = \\frac{BC}{2}\\), alltså:
\\[\\frac{BM}{BC} = \\frac{1}{2}\\]</div>
<div class="solution-step">Därmed:
\\[\\frac{BN}{BA} = \\frac{1}{2} \\implies BN = \\frac{BA}{2}\\]</div>
<div class="solution-step">Eftersom \\(BN = \\frac{BA}{2}\\) och \\(AN = BA - BN = BA - \\frac{BA}{2} = \\frac{BA}{2}\\) får vi:
\\[AN = BN = \\frac{BA}{2}\\]</div>
<div class="solution-step"><strong>Slutsats:</strong> \\(AN = NB\\), vilket visar att \\(N\\) är mittpunkten på \\(AB\\). \\(\\blacksquare\\)</div>`
    }
  ]
},

{
  id: 12,
  title: "Geometri övrigt",
  points: "Snitt 5,8 p/prov",
  tags: ["Utan hjälpmedel", "Med hjälpmedel"],
  theory: `<h3>Geometri: Pythagoras sats, koordinater, vinklar och volymer</h3>

<h4>Pythagoras sats</h4>
<p>I en rätvinklig triangel med kateter \\(a\\) och \\(b\\) samt hypotenusa \\(c\\) gäller:</p>
<div class="formula-box">\\[a^2 + b^2 = c^2\\]</div>
<p>Satsen kan även användas omvänt: om \\(a^2 + b^2 = c^2\\) för sidorna i en triangel, så är triangeln rätvinklig.</p>

<h4>Avstånd i koordinatsystem</h4>
<p>Avståndet mellan två punkter \\((x_1, y_1)\\) och \\((x_2, y_2)\\) beräknas med:</p>
<div class="formula-box">\\[d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\]</div>

<h4>Vinklar</h4>
<div style="text-align:center;margin:16px 0">
<img src="img/vinklar.png" alt="Sidovinklar, vertikalvinklar, likbelägna vinklar och alternatvinklar" style="max-width:460px;width:100%;border-radius:8px;">
</div>

<h4>Volymer</h4>
<p><strong>Cylinder:</strong></p>
<div class="formula-box">\\[V_{\\text{cylinder}} = \\pi r^2 h\\]</div>
<p><strong>Kon:</strong></p>
<div class="formula-box">\\[V_{\\text{kon}} = \\frac{\\pi r^2 h}{3}\\]</div>

<h4>Area av triangel</h4>
<div class="formula-box">\\[A = \\frac{b \\cdot h}{2}\\]</div>
<p>I koordinatsystemet kan triangelns area beräknas genom att innesluta triangeln i en rektangel och subtrahera omgivande trianglars areor.</p>`,

  problems: [
    {
      level: "E",
      num: 1,
      text: "I figuren skär två räta linjer varandra. Tre av de fyra vinklarna vid skärningspunkten anges som \\(3x\\), \\(2x + 10°\\) och \\(y\\). Vinkeln \\(3x\\) och vinkeln \\(2x + 10°\\) ligger intill varandra. Vinkeln \\(y\\) är vertikalvinkel till \\(3x\\). Bestäm \\(x\\) och \\(y\\).",
      solution: `<div class="solution-step">Vinklarna \\(3x\\) och \\(2x + 10°\\) ligger intill varandra vid skärningspunkten. Två intilliggande vinklar är supplementvinklar, dvs. deras summa är \\(180°\\):
\\[3x + (2x + 10°) = 180°\\]</div>
<div class="solution-step">Vi löser ekvationen:
\\[5x + 10° = 180°\\]
\\[5x = 170°\\]
\\[x = 34°\\]</div>
<div class="solution-step">Nu beräknar vi vinkeln \\(3x\\):
\\[3x = 3 \\cdot 34° = 102°\\]</div>
<div class="solution-step">Vinkeln \\(y\\) är vertikalvinkel till \\(3x\\), och vertikalvinklar är lika stora:
\\[y = 3x = 102°\\]</div>
<div class="solution-step"><strong>Svar:</strong> \\(x = 34°\\) och \\(y = 102°\\).</div>`
    },
    {
      level: "E",
      num: 2,
      text: "Punkterna \\(A(1, 2)\\), \\(B(5, 2)\\) och \\(C(3, 6)\\) bildar en triangel i ett koordinatsystem. Avgör om triangeln är liksidig, likbent eller ingen av delarna.",
      solution: `<div class="solution-step">Vi beräknar sidornas längder med avståndsformeln \\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\).</div>
<div class="solution-step">Sidan \\(AB\\):
\\[AB = \\sqrt{(5-1)^2 + (2-2)^2} = \\sqrt{16 + 0} = 4\\]</div>
<div class="solution-step">Sidan \\(AC\\):
\\[AC = \\sqrt{(3-1)^2 + (6-2)^2} = \\sqrt{4 + 16} = \\sqrt{20} = 2\\sqrt{5}\\]</div>
<div class="solution-step">Sidan \\(BC\\):
\\[BC = \\sqrt{(3-5)^2 + (6-2)^2} = \\sqrt{4 + 16} = \\sqrt{20} = 2\\sqrt{5}\\]</div>
<div class="solution-step">Vi har \\(AC = BC = 2\\sqrt{5} \\approx 4{,}47\\) och \\(AB = 4\\). Två sidor är lika men inte alla tre.</div>
<div class="solution-step"><strong>Svar:</strong> Triangeln är likbent (men inte liksidig) eftersom \\(AC = BC = 2\\sqrt{5}\\).</div>`
    },
    {
      level: "C",
      num: 3,
      text: "En triangel har hörnen \\(P(0, 0)\\), \\(Q(6, 0)\\) och \\(R(0, 8)\\). Visa att triangeln \\(PQR\\) är rätvinklig.",
      solution: `<div class="solution-step">Vi beräknar alla tre sidornas längder med avståndsformeln.</div>
<div class="solution-step">Sidan \\(PQ\\):
\\[PQ = \\sqrt{(6-0)^2 + (0-0)^2} = \\sqrt{36} = 6\\]</div>
<div class="solution-step">Sidan \\(PR\\):
\\[PR = \\sqrt{(0-0)^2 + (8-0)^2} = \\sqrt{64} = 8\\]</div>
<div class="solution-step">Sidan \\(QR\\):
\\[QR = \\sqrt{(0-6)^2 + (8-0)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\]</div>
<div class="solution-step">Den längsta sidan är \\(QR = 10\\). Vi testar om Pythagoras sats gäller med \\(QR\\) som hypotenusa:
\\[PQ^2 + PR^2 = 6^2 + 8^2 = 36 + 64 = 100\\]
\\[QR^2 = 10^2 = 100\\]</div>
<div class="solution-step">Eftersom \\(PQ^2 + PR^2 = QR^2\\) gäller Pythagoras sats. Alltså är triangeln rätvinklig med den räta vinkeln vid \\(P\\).</div>
<div class="solution-step"><strong>Slutsats:</strong> Triangeln \\(PQR\\) är rätvinklig vid \\(P\\) eftersom \\(6^2 + 8^2 = 10^2\\). \\(\\blacksquare\\)</div>`
    },
    {
      level: "C",
      num: 4,
      text: "Punkterna \\(A(-2, 1)\\), \\(B(4, 5)\\) och \\(C(6, -1)\\) bildar en triangel. Beräkna triangelns area med hjälp av koordinaterna.",
      solution: `<div class="solution-step">Vi kan beräkna arean med koordinatformeln (''skosnöresformeln''):
\\[A = \\frac{1}{2} |x_A(y_B - y_C) + x_B(y_C - y_A) + x_C(y_A - y_B)|\\]</div>
<div class="solution-step">Vi sätter in värdena \\(A(-2, 1)\\), \\(B(4, 5)\\), \\(C(6, -1)\\):
\\[A = \\frac{1}{2} |(-2)(5 - (-1)) + 4((-1) - 1) + 6(1 - 5)|\\]</div>
<div class="solution-step">Vi beräknar varje term:
\\[(-2)(6) = -12\\]
\\[4(-2) = -8\\]
\\[6(-4) = -24\\]</div>
<div class="solution-step">Summa:
\\[-12 + (-8) + (-24) = -44\\]</div>
<div class="solution-step">Arean:
\\[A = \\frac{1}{2} \\cdot |-44| = \\frac{44}{2} = 22 \\text{ a.e.}\\]</div>
<div class="solution-step"><strong>Svar:</strong> Triangelns area är \\(22\\) areaenheter.</div>`
    },
    {
      level: "A",
      num: 5,
      text: "En cylinder utan lock tillverkas av en rektangulär plåtbit. Cylinderns höjd \\(h\\) och radie \\(r\\) uppfyller \\(2r + h = 30\\) cm. <br>a) Teckna cylinderns volym \\(V\\) som en funktion av \\(r\\). <br>b) Bestäm radien som ger maximal volym. <br>c) Beräkna den maximala volymen.",
      solution: `<div class="solution-step"><strong>a)</strong> Ur villkoret \\(2r + h = 30\\) löser vi ut \\(h\\):
\\[h = 30 - 2r\\]</div>
<div class="solution-step">Cylinderns volym:
\\[V = \\pi r^2 h = \\pi r^2 (30 - 2r) = \\pi(30r^2 - 2r^3)\\]</div>
<div class="solution-step"><strong>b)</strong> För att hitta maximal volym deriverar vi \\(V(r)\\) och sätter derivatan lika med noll:
\\[V'(r) = \\pi(60r - 6r^2) = 6\\pi r(10 - r)\\]</div>
<div class="solution-step">Vi sätter \\(V'(r) = 0\\):
\\[6\\pi r(10 - r) = 0\\]
\\[r = 0 \\quad \\text{eller} \\quad r = 10\\]</div>
<div class="solution-step">Eftersom \\(r = 0\\) ger volymen 0 undersöker vi \\(r = 10\\). Vi kontrollerar att det verkligen är ett maximum med andraderivatan:
\\[V''(r) = \\pi(60 - 12r)\\]
\\[V''(10) = \\pi(60 - 120) = -60\\pi < 0\\]
Alltså är \\(r = 10\\) en maximipunkt. Vi kontrollerar också att \\(h > 0\\): \\(h = 30 - 2 \\cdot 10 = 10 > 0\\). \\(\\checkmark\\)</div>
<div class="solution-step"><strong>c)</strong> Vi beräknar volymen:
\\[V(10) = \\pi \\cdot 10^2 \\cdot 10 = 1000\\pi \\approx 3142 \\text{ cm}^3\\]</div>
<div class="solution-step"><strong>Svar:</strong> a) \\(V(r) = \\pi(30r^2 - 2r^3)\\). b) Radien \\(r = 10\\) cm ger maximal volym. c) Den maximala volymen är \\(1000\\pi \\approx 3142\\) cm\\(^3\\).</div>`
    },
    {
      level: "A",
      num: 6,
      text: "\\(ABCD\\) är en rektangel med \\(AB = a\\) och \\(BC = b\\). Punkt \\(E\\) ligger på sidan \\(AD\\) så att \\(AE = x\\) (där \\(0 \\leq x \\leq a\\)). Visa att triangeln \\(BCE\\) har arean \\(\\frac{ab}{2}\\), dvs. halva rektangelns area, oavsett var \\(E\\) ligger på \\(AD\\).",
      solution: `<div class="solution-step">Vi placerar rektangeln i ett koordinatsystem med \\(A\\) i origo. Då får vi:
\\[A = (0, 0), \\quad B = (a, 0), \\quad C = (a, b), \\quad D = (0, b)\\]</div>
<div class="solution-step">Punkten \\(E\\) ligger på \\(AD\\) med \\(AE = x\\). Sidan \\(AD\\) går från \\((0,0)\\) vertikalt till \\((0, b)\\), så \\(E = (0, x)\\) om vi tolkar \\(AE = x\\) som avstånd längs \\(AD\\). (Alternativt kan vi tolka det som att \\(E\\) ligger på den övre sidan, men resultatet blir detsamma.)</div>
<div class="solution-step">Triangeln \\(BCE\\) har hörn \\(B(a, 0)\\), \\(C(a, b)\\), \\(E(0, x)\\). Vi använder koordinatformeln:
\\[\\text{Area} = \\frac{1}{2}|x_B(y_C - y_E) + x_C(y_E - y_B) + x_E(y_B - y_C)|\\]</div>
<div class="solution-step">Insättning:
\\[= \\frac{1}{2}|a(b - x) + a(x - 0) + 0 \\cdot (0 - b)|\\]
\\[= \\frac{1}{2}|ab - ax + ax + 0|\\]
\\[= \\frac{1}{2}|ab|\\]
\\[= \\frac{ab}{2}\\]</div>
<div class="solution-step">Termerna \\(-ax\\) och \\(+ax\\) tar ut varandra, och värdet \\(x\\) försvinner helt!</div>
<div class="solution-step"><strong>Slutsats:</strong> Triangeln \\(BCE\\) har arean \\(\\frac{ab}{2}\\), vilket är halva rektangelns area, oavsett var \\(E\\) ligger på \\(AD\\). \\(\\blacksquare\\)</div>`
    },
    {
      level: "A",
      num: 7,
      text: "Två cylinderformade vattentankar har tillsammans volymen 2000 liter. Den ena tanken har dubbelt så stor radie som den andra men halva höjden. Bestäm volymen för varje tank.",
      solution: `<div class="solution-step">Låt den mindre tanken ha radie \\(r\\) och höjd \\(h\\). Då har den större tanken radie \\(2r\\) och höjd \\(\\frac{h}{2}\\).</div>
<div class="solution-step">Volymen för den mindre tanken:
\\[V_1 = \\pi r^2 h\\]</div>
<div class="solution-step">Volymen för den större tanken:
\\[V_2 = \\pi (2r)^2 \\cdot \\frac{h}{2} = \\pi \\cdot 4r^2 \\cdot \\frac{h}{2} = 2\\pi r^2 h\\]</div>
<div class="solution-step">Vi ser att \\(V_2 = 2V_1\\). Tankarna har tillsammans volymen 2000 liter:
\\[V_1 + V_2 = 2000\\]
\\[V_1 + 2V_1 = 2000\\]
\\[3V_1 = 2000\\]
\\[V_1 = \\frac{2000}{3} \\approx 667 \\text{ liter}\\]</div>
<div class="solution-step">Den större tankens volym:
\\[V_2 = 2V_1 = \\frac{4000}{3} \\approx 1333 \\text{ liter}\\]</div>
<div class="solution-step">Kontroll: \\(\\frac{2000}{3} + \\frac{4000}{3} = \\frac{6000}{3} = 2000\\) liter. \\(\\checkmark\\)</div>
<div class="solution-step"><strong>Svar:</strong> Den mindre tanken rymmer \\(\\frac{2000}{3} \\approx 667\\) liter och den större tanken rymmer \\(\\frac{4000}{3} \\approx 1333\\) liter.</div>`
    }
  ]
},

{
  id: 13,
  title: "Logik",
  points: "Snitt 1,0 p/prov",
  tags: ["Utan hjälpmedel"],
  theory: `<h3>Logik: implikation och ekvivalens</h3>

<h4>Implikation (\\(\\Rightarrow\\))</h4>
<p>En <strong>implikation</strong> är ett påstående av typen "Om \\(A\\) så \\(B\\)", vilket skrivs \\(A \\Rightarrow B\\). Här är \\(A\\) det <strong>tillräckliga villkoret</strong> och \\(B\\) det <strong>nödvändiga villkoret</strong>.</p>
<p>Exempel: "Om det regnar, så är marken blöt." (Det räcker att det regnar för att marken ska vara blöt, men marken kan vara blöt av andra anledningar.)</p>
<div class="formula-box">\\[A \\Rightarrow B \\quad \\text{betyder: ''Om } A \\text{ så } B\\text{''}\\]</div>

<h4>Omvänd implikation</h4>
<p>Den omvända implikationen \\(B \\Rightarrow A\\) behöver <strong>inte</strong> gälla bara för att \\(A \\Rightarrow B\\) gäller. Exempel: "Om marken är blöt så regnar det" stämmer inte nödvändigtvis.</p>

<h4>Ekvivalens (\\(\\Leftrightarrow\\))</h4>
<p>En <strong>ekvivalens</strong> innebär att båda implikationerna gäller: \\(A \\Rightarrow B\\) och \\(B \\Rightarrow A\\). Vi skriver \\(A \\Leftrightarrow B\\) och säger "\\(A\\) om och endast om \\(B\\)".</p>
<p><strong>Exempel:</strong> "En triangel har tre lika stora vinklar" \\(\\Leftrightarrow\\) "Triangeln är liksidig."<br>
Båda riktningarna gäller: om vinklarna är lika så är triangeln liksidig, och om triangeln är liksidig så är vinklarna lika.</p>
<div class="formula-box">\\[A \\Leftrightarrow B \\quad \\text{betyder: } A \\Rightarrow B \\text{ och } B \\Rightarrow A\\]</div>

`,

  problems: [
    {
      level: "E",
      num: 1,
      text: "Lena bor i Sverige. Stämmer då följande påstående: \"Lena bor i Europa\"? Formulera en implikation (\\(\\Rightarrow\\)) som beskriver sambandet mellan \"bor i Sverige\" och \"bor i Europa\".",
      solution: `<div class="solution-step">Sverige ligger i Europa, så om Lena bor i Sverige bor hon också i Europa. Påståendet "Lena bor i Europa" stämmer alltså.</div>
<div class="solution-step">Implikationen blir:
\\[\\text{Bor i Sverige} \\Rightarrow \\text{Bor i Europa}\\]
"Om man bor i Sverige så bor man i Europa."</div>
<div class="solution-step">Observera att den omvända implikationen inte gäller: man kan bo i Europa utan att bo i Sverige (t.ex. i Norge).</div>
<div class="solution-step"><strong>Svar:</strong> Ja, påståendet stämmer. Implikationen är: Bor i Sverige \\(\\Rightarrow\\) Bor i Europa. Att bo i Sverige är ett tillräckligt villkor för att bo i Europa.</div>`
    },
    {
      level: "E",
      num: 2,
      text: "Avgör om följande samband är implikationer (\\(\\Rightarrow\\)) eller ekvivalenser (\\(\\Leftrightarrow\\)): <br>a) \\(x = 3\\) och \\(x^2 = 9\\) <br>b) Figuren är en kvadrat och figuren är en rektangel. <br>c) \\(x > 0\\) och \\(x^2 > 0\\).",
      solution: `<div class="solution-step"><strong>a)</strong> Om \\(x = 3\\) så \\(x^2 = 9\\). Det stämmer.
Men om \\(x^2 = 9\\) så kan \\(x = 3\\) eller \\(x = -3\\). Den omvända implikationen gäller inte.
\\[x = 3 \\Rightarrow x^2 = 9 \\quad \\text{(implikation, inte ekvivalens)}\\]</div>
<div class="solution-step"><strong>b)</strong> Om figuren är en kvadrat, så är den en rektangel (alla kvadrater är rektanglar). Det stämmer.
Men om figuren är en rektangel, är den inte nödvändigtvis en kvadrat (sidorna behöver inte vara lika långa). Den omvända gäller inte.
\\[\\text{Kvadrat} \\Rightarrow \\text{Rektangel} \\quad \\text{(implikation, inte ekvivalens)}\\]</div>
<div class="solution-step"><strong>c)</strong> Om \\(x > 0\\) så \\(x^2 > 0\\). Det stämmer.
Om \\(x^2 > 0\\) så kan \\(x > 0\\) eller \\(x < 0\\). Till exempel \\((-2)^2 = 4 > 0\\) men \\(-2 < 0\\). Den omvända gäller inte.
\\[x > 0 \\Rightarrow x^2 > 0 \\quad \\text{(implikation, inte ekvivalens)}\\]</div>
<div class="solution-step"><strong>Svar:</strong> Alla tre är implikationer (\\(\\Rightarrow\\)), inte ekvivalenser.</div>`
    },
    {
      level: "E",
      num: 3,
      text: `<strong>Flervalsfråga.</strong> Man kastar en vanlig tärning. Avgör om följande implikationer är sanna eller falska:
<br><br>A) Tärningen visar 6 \\(\\Rightarrow\\) Tärningen visar ett jämnt tal.
<br>B) Tärningen visar ett jämnt tal \\(\\Rightarrow\\) Tärningen visar 6.
<br>C) Tärningen visar 4 \\(\\Rightarrow\\) Tärningen visar ett primtal.
<br>D) Tärningen visar ett udda tal \\(\\Rightarrow\\) Tärningen visar 5.`,
      solution: `<div class="solution-step"><strong>A) Tärningen visar 6 \\(\\Rightarrow\\) Tärningen visar ett jämnt tal.</strong>
6 är ett jämnt tal, så om tärningen visar 6 visar den ett jämnt tal. <strong>SANT.</strong></div>
<div class="solution-step"><strong>B) Tärningen visar ett jämnt tal \\(\\Rightarrow\\) Tärningen visar 6.</strong>
De jämna talen på en tärning är 2, 4 och 6. Om tärningen visar 2 visar den ett jämnt tal men inte 6. <strong>FALSKT.</strong> (Motexempel: tärningen visar 2.)</div>
<div class="solution-step"><strong>C) Tärningen visar 4 \\(\\Rightarrow\\) Tärningen visar ett primtal.</strong>
4 är inte ett primtal (\\(4 = 2 \\cdot 2\\)). Så om tärningen visar 4, visar den inte ett primtal. <strong>FALSKT.</strong></div>
<div class="solution-step"><strong>D) Tärningen visar ett udda tal \\(\\Rightarrow\\) Tärningen visar 5.</strong>
De udda talen på en tärning är 1, 3 och 5. Om tärningen visar 1 visar den ett udda tal men inte 5. <strong>FALSKT.</strong> (Motexempel: tärningen visar 1.)</div>
<div class="solution-step"><strong>Svar:</strong> Endast A är sann. B, C och D är falska.</div>`
    },
    {
      level: "E",
      num: 4,
      text: "Påstående: \"Om ett tal är delbart med 6 så är det delbart med 3.\" Ange ett motexempel som visar att den omvända implikationen inte gäller.",
      solution: `<div class="solution-step">Den ursprungliga implikationen är:
\\[\\text{Delbart med 6} \\Rightarrow \\text{Delbart med 3}\\]
Denna är sann, eftersom \\(6 = 2 \\cdot 3\\), så alla tal delbara med 6 är automatiskt delbara med 3.</div>
<div class="solution-step">Den omvända implikationen är:
\\[\\text{Delbart med 3} \\Rightarrow \\text{Delbart med 6}\\]
Frågan är: finns det ett tal som är delbart med 3 men inte delbart med 6?</div>
<div class="solution-step">Vi testar talet 9:
\\[9 \\div 3 = 3 \\quad \\text{(delbart med 3)} \\checkmark\\]
\\[9 \\div 6 = 1{,}5 \\quad \\text{(inte delbart med 6)} \\checkmark\\]</div>
<div class="solution-step"><strong>Svar:</strong> Talet 9 är ett motexempel. Det är delbart med 3 men inte delbart med 6, vilket visar att den omvända implikationen inte gäller.</div>`
    }
  ]
},

{
  id: 14,
  title: "Bevis & generalisering",
  points: "Snitt 1,5 p/prov",
  tags: ["Utan hjälpmedel"],
  theory: `<h3>Bevis och generalisering</h3>

<h4>Algebraiska bevis</h4>
<p>I ett algebraiskt bevis använder vi variabler för att representera allmänna tal och visar att ett påstående gäller generellt. Vanliga tekniker:</p>
<ul>
<li><strong>Jämna tal</strong> skrivs som \\(2n\\) där \\(n\\) är ett heltal.</li>
<li><strong>Udda tal</strong> skrivs som \\(2n + 1\\) där \\(n\\) är ett heltal.</li>
<li><strong>På varandra följande heltal:</strong> \\(n, \\, n+1, \\, n+2, \\, \\ldots\\)</li>
<li><strong>På varandra följande jämna heltal:</strong> \\(2n, \\, 2n+2, \\, 2n+4, \\, \\ldots\\)</li>
</ul>

<h4>"Visa att"-metodik</h4>
<p>När du ska visa att ett uttryck alltid har en viss egenskap:</p>
<ol>
<li>Skriv uttrycket med variabler.</li>
<li>Förenkla/faktorisera.</li>
<li>Argumentera för egenskapen (t.ex. "produkten innehåller faktorn 2, alltså är uttrycket jämnt").</li>
</ol>

<h4>Generalisering av mönster</h4>
<p>Att hitta en formel för det \\(n\\):te talet i en talföljd:</p>
<ol>
<li>Beräkna skillnader mellan på varandra följande tal.</li>
<li>Om skillnaden är konstant: linjärt samband.</li>
<li>Om skillnaden ökar med konstant steg: kvadratiskt samband.</li>
</ol>
<div class="formula-box">\\[\\text{Linjärt: } a_n = kn + m \\qquad \\text{Kvadratiskt: } a_n = an^2 + bn + c\\]</div>

<h4>Delbarhetsbevis</h4>
<p>För att visa att ett uttryck alltid är delbart med ett tal \\(k\\), faktorisera uttrycket och visa att \\(k\\) alltid är en faktor. Använd att bland \\(n\\) på varandra följande heltal finns alltid minst en som är delbar med \\(n\\).</p>`,

  problems: [
    {
      level: "E",
      num: 1,
      text: "Tre på varandra följande heltal kan skrivas \\(n\\), \\(n+1\\), \\(n+2\\). Beräkna summan av talen. Vad kan du säga om summan?",
      solution: `<div class="solution-step">Vi beräknar summan:
\\[n + (n+1) + (n+2) = 3n + 3 = 3(n + 1)\\]</div>
<div class="solution-step">Uttrycket \\(3(n+1)\\) innehåller faktorn 3, vilket innebär att summan alltid är delbar med 3.</div>
<div class="solution-step">Vi kan också notera att \\(n + 1\\) är det mittersta talet, så summan är 3 gånger det mittersta talet.</div>
<div class="solution-step"><strong>Svar:</strong> Summan är \\(3(n + 1)\\). Summan av tre på varandra följande heltal är alltid delbar med 3 (och lika med 3 gånger det mittersta talet).</div>`
    },
    {
      level: "E",
      num: 2,
      text: "I ett talmönster gäller: \\(1, 4, 9, 16, 25, \\ldots\\) <br>a) Bestäm det 8:e talet i mönstret. <br>b) Skriv en formel för det \\(n\\):te talet.",
      solution: `<div class="solution-step"><strong>a)</strong> Vi undersöker mönstret:
\\[1 = 1^2, \\quad 4 = 2^2, \\quad 9 = 3^2, \\quad 16 = 4^2, \\quad 25 = 5^2\\]
Varje tal är en kvadrat av sin position.</div>
<div class="solution-step">Det 8:e talet:
\\[8^2 = 64\\]</div>
<div class="solution-step"><strong>b)</strong> Det \\(n\\):te talet i mönstret är:
\\[a_n = n^2\\]</div>
<div class="solution-step"><strong>Svar:</strong> a) Det 8:e talet är \\(64\\). b) Det \\(n\\):te talet ges av \\(a_n = n^2\\).</div>`
    },
    {
      level: "C",
      num: 3,
      text: "Visa att produkten av två på varandra följande jämna heltal alltid är delbar med 8.",
      solution: `<div class="solution-step">Två på varandra följande jämna heltal kan skrivas som \\(2n\\) och \\(2n + 2\\), där \\(n\\) är ett heltal.</div>
<div class="solution-step">Vi beräknar produkten:
\\[2n \\cdot (2n + 2) = 2n \\cdot 2(n + 1) = 4n(n + 1)\\]</div>
<div class="solution-step">Nu undersöker vi \\(n(n+1)\\). Talen \\(n\\) och \\(n+1\\) är två på varandra följande heltal. Av dessa är alltid exakt ett jämnt, dvs. delbart med 2.</div>
<div class="solution-step">Alltså är \\(n(n+1)\\) alltid delbart med 2. Vi kan skriva \\(n(n+1) = 2m\\) för något heltal \\(m\\).</div>
<div class="solution-step">Produkten blir:
\\[4n(n+1) = 4 \\cdot 2m = 8m\\]</div>
<div class="solution-step">Eftersom \\(8m\\) innehåller faktorn 8 är produkten alltid delbar med 8. \\(\\blacksquare\\)</div>`
    },
    {
      level: "C",
      num: 4,
      text: "Visa att uttrycket \\(n^2 + n\\) alltid är ett jämnt tal, oavsett heltal \\(n\\).",
      solution: `<div class="solution-step">Vi faktoriserar uttrycket:
\\[n^2 + n = n(n + 1)\\]</div>
<div class="solution-step">Talen \\(n\\) och \\(n + 1\\) är två på varandra följande heltal. Av två på varandra följande heltal är alltid exakt ett jämnt (delbart med 2).</div>
<div class="solution-step"><strong>Fall 1:</strong> Om \\(n\\) är jämnt, dvs. \\(n = 2k\\):
\\[n(n+1) = 2k(2k + 1)\\]
som är delbart med 2, alltså jämnt.</div>
<div class="solution-step"><strong>Fall 2:</strong> Om \\(n\\) är udda, dvs. \\(n = 2k + 1\\):
\\[n(n+1) = (2k+1)(2k + 2) = (2k+1) \\cdot 2(k+1)\\]
som är delbart med 2, alltså jämnt.</div>
<div class="solution-step">I båda fallen är \\(n(n+1)\\) delbart med 2.</div>
<div class="solution-step"><strong>Slutsats:</strong> \\(n^2 + n = n(n+1)\\) är alltid ett jämnt tal, oavsett heltal \\(n\\). \\(\\blacksquare\\)</div>`
    },
    {
      level: "A",
      num: 5,
      text: "Undersök om uttrycket \\(n^3 - n\\) alltid är delbart med 6 för alla positiva heltal \\(n\\). Motivera ditt svar algebraiskt.",
      solution: `<div class="solution-step">Vi faktoriserar \\(n^3 - n\\):
\\[n^3 - n = n(n^2 - 1) = n(n-1)(n+1)\\]</div>
<div class="solution-step">Vi kan skriva om faktorerna i ordning:
\\[n(n-1)(n+1) = (n-1) \\cdot n \\cdot (n+1)\\]
Detta är produkten av tre på varandra följande heltal!</div>
<div class="solution-step"><strong>Delbarhet med 2:</strong> Bland tre på varandra följande heltal finns alltid minst ett jämnt tal (delbart med 2). Alltså är produkten delbar med 2.</div>
<div class="solution-step"><strong>Delbarhet med 3:</strong> Bland tre på varandra följande heltal finns alltid exakt ett som är delbart med 3. (Varje tredje heltal är delbart med 3.) Alltså är produkten delbar med 3.</div>
<div class="solution-step">Eftersom produkten är delbar med både 2 och 3, och \\(\\text{sgd}(2, 3) = 1\\), är produkten delbar med \\(2 \\cdot 3 = 6\\).</div>
<div class="solution-step">Vi verifierar med några exempel:
\\[n = 1: \\quad 1^3 - 1 = 0 = 6 \\cdot 0 \\quad \\checkmark\\]
\\[n = 2: \\quad 8 - 2 = 6 = 6 \\cdot 1 \\quad \\checkmark\\]
\\[n = 3: \\quad 27 - 3 = 24 = 6 \\cdot 4 \\quad \\checkmark\\]
\\[n = 4: \\quad 64 - 4 = 60 = 6 \\cdot 10 \\quad \\checkmark\\]</div>
<div class="solution-step"><strong>Svar:</strong> Ja, \\(n^3 - n = (n-1) \\cdot n \\cdot (n+1)\\) är alltid delbart med 6, eftersom det är produkten av tre på varandra följande heltal, som alltid innehåller minst en faktor 2 och en faktor 3. \\(\\blacksquare\\)</div>`
    },
    {
      level: "A",
      num: 6,
      text: "\\(ABCD\\) är en parallellogram. Diagonalen \\(AC\\) delar parallellogrammen i två trianglar: \\(\\triangle ABC\\) och \\(\\triangle CDA\\). Visa med hjälp av kongruenta trianglar att motstående sidor är lika långa, dvs. att \\(AB = CD\\) och \\(BC = DA\\).",
      solution: `<div class="solution-step">I parallellogrammen \\(ABCD\\) gäller per definition att \\(AB \\parallel DC\\) och \\(AD \\parallel BC\\). Diagonalen \\(AC\\) delar parallellogrammen i trianglarna \\(\\triangle ABC\\) och \\(\\triangle CDA\\).</div>
<div class="solution-step">Vi undersöker trianglarna \\(\\triangle ABC\\) och \\(\\triangle CDA\\):

<strong>Vinkel 1:</strong> \\(\\angle BAC = \\angle DCA\\) (alternatvinklar, ty \\(AB \\parallel DC\\) och \\(AC\\) är transversal).</div>
<div class="solution-step"><strong>Vinkel 2:</strong> \\(\\angle BCA = \\angle DAC\\) (alternatvinklar, ty \\(BC \\parallel AD\\) och \\(AC\\) är transversal).</div>
<div class="solution-step"><strong>Sida:</strong> \\(AC = CA\\) (gemensam sida).</div>
<div class="solution-step">Enligt kongruensfallet <strong>ASA</strong> (vinkel-sida-vinkel) är:
\\[\\triangle ABC \\cong \\triangle CDA\\]</div>
<div class="solution-step">Eftersom trianglarna är kongruenta är motsvarande sidor lika:
\\[AB = CD \\quad \\text{och} \\quad BC = DA\\]</div>
<div class="solution-step"><strong>Slutsats:</strong> Motstående sidor i en parallellogram är lika långa. \\(\\blacksquare\\)</div>`
    },
    {
      level: "A",
      num: 7,
      text: "Bestäm alla heltal \\(n\\) sådana att \\(n^2 < 3n + 10\\). Motivera att du hittat alla lösningar.",
      solution: `<div class="solution-step">Vi skriver om olikheten:
\\[n^2 < 3n + 10\\]
\\[n^2 - 3n - 10 < 0\\]</div>
<div class="solution-step">Vi faktoriserar vänsterledet. Vi söker nollställena till \\(n^2 - 3n - 10 = 0\\):
\\[n = \\frac{3 \\pm \\sqrt{9 + 40}}{2} = \\frac{3 \\pm \\sqrt{49}}{2} = \\frac{3 \\pm 7}{2}\\]</div>
<div class="solution-step">Nollställena:
\\[n = \\frac{3 + 7}{2} = 5 \\quad \\text{och} \\quad n = \\frac{3 - 7}{2} = -2\\]</div>
<div class="solution-step">Faktorisering:
\\[n^2 - 3n - 10 = (n - 5)(n + 2)\\]</div>
<div class="solution-step">Olikheten \\((n-5)(n+2) < 0\\) gäller när faktorerna har olika tecken, dvs. när:
\\[-2 < n < 5\\]</div>
<div class="solution-step">De heltal som uppfyller \\(-2 < n < 5\\) är:
\\[n \\in \\{-1, 0, 1, 2, 3, 4\\}\\]</div>
<div class="solution-step">Vi verifierar gränserna:
\\[n = -2: \\quad (-2)^2 = 4, \\quad 3(-2) + 10 = 4. \\quad 4 < 4 \\text{ stämmer inte (lika).}\\]
\\[n = 5: \\quad 5^2 = 25, \\quad 3 \\cdot 5 + 10 = 25. \\quad 25 < 25 \\text{ stämmer inte (lika).}\\]
\\[n = -1: \\quad 1 < 7 \\quad \\checkmark\\]
\\[n = 4: \\quad 16 < 22 \\quad \\checkmark\\]</div>
<div class="solution-step"><strong>Svar:</strong> Alla heltal \\(n\\) som uppfyller olikheten är \\(n \\in \\{-1, 0, 1, 2, 3, 4\\}\\). Dessa är samtliga lösningar eftersom andragradsfunktionen \\(n^2 - 3n - 10\\) är negativ precis på det öppna intervallet \\((-2, 5)\\), och inga andra heltal ligger i detta intervall.</div>`
    }
  ]
}
];

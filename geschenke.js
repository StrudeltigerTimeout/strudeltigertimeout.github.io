// Persönliche Angaben. Hier Name, Widmung und Absender anpassen.
// Einfache Anführungszeichen ' in Texten vermeiden, stattdessen ’ verwenden.
const CONFIG = {
  name: '',               // Name des Geburtstagskinds, z. B. 'Lena'. Leer lassen = ohne Namen.
  von: 'Dion',            // Absender unter der Widmung
  ueberraschung: true,    // true: Geschenke sind auf der Seite verpackt, bis sie ausgepackt werden
  widmung: `
    <p>Alles Gute zum Geburtstag!</p>
    <p>Dieses Jahr gibt es Zeit geschenkt: sieben kleine Auszeiten zum Selbermachen, jede in einem eigenen Päckchen. Zum Malen, Backen, Basteln und Durchatmen. Und für die neue Wohnung bleibt am Ende auch etwas übrig.</p>
    <p>Ja, ausgerechnet eine Website. Sie ist nur der Wegweiser: Hier steht, was in den Päckchen steckt und wie es geht. Danach kommt das Handy weg.</p>
    <p>Es gibt keine Reihenfolge und keine Frist. Nimm dir die Auszeiten, wann du sie brauchst.</p>`,
  anleitung: `
    <ul>
      <li><b>Sieben Päckchen:</b> Jedes Geschenk hat eine Nummer. Hier auf der Seite bleibt es verpackt, bis du es auspackst.</li>
      <li><b>Wie viel Zeit hast du?</b> Wähl aus, wie viel Zeit du gerade hast und worauf du Lust hast. Dann siehst du nur die Geschenke, die passen.</li>
      <li><b>Überrasch mich:</b> Wenn du dich nicht entscheiden kannst, zieht die Seite ein Los für dich.</li>
      <li><b>Auszeit-Timer:</b> Bei jedem Geschenk startest du einen Timer und legst das Handy umgedreht weg. Wenn die Zeit um ist, klingelt es leise. Die Seite merkt sich, wie oft du zwischendurch doch zum Handy gegriffen hast.</li>
      <li><b>Abstempeln:</b> Danach stempelst du das Geschenk ab und schreibst einen Satz dazu, wie es war. Alles sammelt sich in deinem Auszeit-Tagebuch.</li>
    </ul>
    <p>Zurück auf diese Seite kommst du jederzeit, indem du dein Handy wieder an den Anhänger hältst.</p>`,
  finale: `
    <p>Alle sieben Auszeiten geschafft. Be proud of your progress!</p>
    <p>Behalte die Gewohnheit: einmal pro Woche eine Stunde ohne Bildschirm. Der Timer bleibt hier für dich.</p>`
};

// Filter: Zeit und Lust. Die Schlüssel werden unten bei den Geschenken verwendet.
const ZEITEN = {
  kurz: 'Ein paar Minuten',
  mittel: 'Eine halbe Stunde',
  lang: 'Den ganzen Abend'
};
const LUST = {
  runterkommen: 'Runterkommen',
  kreativ: 'Kreativ sein',
  genuss: 'Genießen',
  zuhause: 'Fürs Zuhause',
  knobeln: 'Knobeln'
};

// farbe: rosa, flieder, butter, petrol, orange, kirsch, salbei
// symbol: tasse, pinsel, cupcake, puzzle, staffelei, kerze, blume
// minuten: Vorschlag für den Auszeit-Timer
const GESCHENKE = [

{
  nr: 1, titel: 'Tee + koreanische Gesichtsmaske', motto: 'für eine kleine Me-Time',
  zeit: '10–20 Min.', minuten: 20, zeitStufen: ['kurz'], lust: ['runterkommen', 'genuss'],
  farbe: 'rosa', symbol: 'tasse',
  inhalt: ['Tee', 'Koreanische Tuchmaske (Sheet Mask)'],
  schritte: [
    'Wasser aufsetzen und den Tee ziehen lassen. Wie lange, steht auf der Packung. Faustregel: grüner Tee 2 bis 3 Minuten, Kräutertee 5 bis 8 Minuten.',
    'Gesicht waschen und abtrocknen. Haare zurückbinden.',
    'Maske aus der Packung nehmen, auffalten und eine eventuelle Schutzfolie abziehen. Auf das Gesicht legen, an Augen, Nase und Mund ausrichten und glatt streichen.',
    'Hinlegen, Tee trinken, nichts tun. Die Maske bleibt meist 15 bis 20 Minuten drauf.',
    'Maske abziehen und den Rest der Essenz sanft einklopfen. Nicht abwaschen.'
  ],
  tipps: [
    'Was in der Packung übrig bleibt, reicht noch für Hals und Hände.',
    'Maske vorher zehn Minuten in den Kühlschrank legen. Das fühlt sich besonders frisch an.',
    'Im Liegen rutscht die Maske nicht.'
  ],
  detox: 'Während die Maske wirkt: Augen zu, drei tiefe Atemzüge und dann einfach mal nichts. Kein Podcast, kein Scrollen.'
},

{
  nr: 2, titel: 'Watercolor-Buch + Pinsel', motto: 'H2O Farbe',
  zeit: '15–30 Min.', minuten: 30, zeitStufen: ['kurz', 'mittel'], lust: ['runterkommen', 'kreativ'],
  farbe: 'flieder', symbol: 'pinsel',
  inhalt: ['Watercolor-Buch', 'Pinsel'],
  schritte: [
    'Ein Glas Wasser und ein Küchentuch bereitstellen. Mehr brauchst du nicht: Die Farbe steckt schon im Buch, Wasser macht sie lebendig.',
    'Seite aussuchen. Damit nichts durchweicht, ein Stück Pappe darunterlegen.',
    'Pinsel ins Wasser tauchen und am Glasrand abstreifen. Lieber zu wenig Wasser als zu viel.',
    'Von hellen zu dunklen Flächen arbeiten und den Pinsel zwischendurch ausspülen.',
    'Die fertige Seite offen trocknen lassen, bevor du umblätterst.'
  ],
  tipps: [
    'Mehr Wasser macht die Farbe heller und weicher, weniger Wasser kräftiger.',
    'Für Verläufe die Fläche erst nass machen und dann Farbe hineintupfen.',
    'Es muss nicht schön werden. Es geht ums Malen, nicht ums Bild.'
  ],
  detox: 'Mal eine Seite, ohne sie zu fotografieren. Sie ist nur für dich.'
},

{
  nr: 3, titel: 'Backmischung + Topping', motto: 'leckere Auszeit',
  zeit: '30 Min.', minuten: 30, zeitStufen: ['mittel'], lust: ['genuss'],
  farbe: 'butter', symbol: 'cupcake',
  inhalt: ['Backmischung', 'Topping'],
  schritte: [
    'Packung lesen: Dort steht, was du zusätzlich brauchst, meist Butter, Eier oder Milch. Alles bereitlegen.',
    'Ofen vorheizen, wie auf der Packung angegeben.',
    'Teig nach Anleitung anrühren und in die Form oder auf das Blech geben.',
    'Backen. Die Backzeit ist deine Pause: Timer starten und nicht nachsehen, was es Neues gibt.',
    'Abkühlen lassen und erst dann das Topping drauf, sonst verläuft es.'
  ],
  tipps: [
    'Stäbchenprobe: Holzspieß in die Mitte stechen. Bleibt kein Teig hängen, ist es fertig.',
    'Schmeckt am besten noch leicht warm, mit Musik aus dem Radio statt vom Handy.',
    'Etwas abgeben macht doppelt glücklich.'
  ],
  detox: 'Das erste Stück wird gegessen, nicht fotografiert.'
},

{
  nr: 4, titel: 'Puzzle', motto: 'Connecting pieces',
  zeit: '1+ Std.', minuten: 60, zeitStufen: ['lang'], lust: ['runterkommen', 'knobeln'],
  farbe: 'petrol', symbol: 'puzzle',
  inhalt: ['Puzzle'],
  schritte: [
    'Einen Platz suchen, an dem das Puzzle ein paar Tage liegen bleiben darf. Ein großes Tablett oder eine Pappe macht es tragbar.',
    'Alle Teile mit dem Bild nach oben umdrehen.',
    'Randteile heraussuchen und zuerst den Rahmen legen.',
    'Die übrigen Teile nach Farben und Mustern sortieren, zum Beispiel in Schälchen.',
    'Abschnitt für Abschnitt füllen. Auffällige Stellen wie Schrift oder klare Kanten im Bild zuerst.'
  ],
  tipps: [
    'Nicht nur auf die Farbe achten, auch auf die Form der Teile.',
    'Es muss nicht an einem Abend fertig werden. Jeden Abend ein Stück.',
    'Zu zweit puzzelt es sich besser.'
  ],
  detox: 'Connecting pieces, connecting people: Puzzle einen Abend mit jemandem zusammen. Beide Handys liegen in einer anderen Ecke.'
},

{
  nr: 5, titel: 'Leinwand + Mini-Staffelei', motto: 'decorate your new home',
  zeit: '30+ Min.', minuten: 45, zeitStufen: ['mittel', 'lang'], lust: ['kreativ', 'zuhause'],
  farbe: 'orange', symbol: 'staffelei',
  inhalt: ['Leinwand', 'Mini-Staffelei'],
  schritte: [
    'Einen Platz in der neuen Wohnung aussuchen, an dem das Bild stehen soll. Die Farben drumherum geben eine gute Richtung vor.',
    'Motiv wählen (Ideen unten) und mit Bleistift leicht vorzeichnen.',
    'Mit dem Hintergrund und großen Flächen anfangen. Gut trocknen lassen.',
    'Danach Details und Konturen. Dunkle Farben zuletzt.',
    'Signieren, datieren und auf die Staffelei stellen.'
  ],
  tipps: [
    'Motivideen: abstrakte Formen in drei Farben, eine einzelne Blume, Streifen oder Karos, die Hausnummer, der Blick aus dem Fenster.',
    'Acrylfarbe deckt auf Leinwand am besten und trocknet schnell.',
    'Malerkrepp für gerade Kanten: aufkleben, malen und abziehen, solange die Farbe noch feucht ist.'
  ],
  detox: 'Mal, was du aus deinem Fenster siehst, nicht was du auf Pinterest gesehen hast.'
},

{
  nr: 6, titel: 'Kerzen + Wachsstifte', motto: 'Coole Kerzen für die kühle Jahreszeit',
  zeit: '1+ Std.', minuten: 60, zeitStufen: ['lang'], lust: ['kreativ', 'zuhause'],
  farbe: 'kirsch', symbol: 'kerze',
  inhalt: ['Kerzen', 'Wachsstifte'],
  schritte: [
    'Kerze mit einem trockenen Tuch abwischen, damit sie staub- und fettfrei ist.',
    'Anleitung der Stifte lesen. Viele Wachsstifte kommen vorher ein paar Minuten in warmes Wasser, damit das Wachs flüssig wird.',
    'Motiv mit einem Zahnstocher leicht vorritzen.',
    'Mit wenig Druck malen. Erst Flächen, dann Linien und Punkte.',
    'Kerze gut trocknen lassen, am besten über Nacht, bevor sie brennt.'
  ],
  tipps: [
    'Motivideen: Herbstblätter, Sterne, Wellen, Karos, Punkte, ein Name.',
    'Kleine Fehler lassen sich nach dem Trocknen vorsichtig mit dem Fingernagel abheben.',
    'Kerzen nie unbeaufsichtigt brennen lassen.'
  ],
  detox: 'Den ersten Abend mit der neuen Kerze ohne Bildschirm verbringen. Nur Kerzenlicht.'
},

{
  nr: 7, titel: 'Crepe Paper Flower DIY Kit', motto: 'Blumen für die Ewigkeit',
  zeit: '1+ Std.', minuten: 60, zeitStufen: ['lang'], lust: ['kreativ', 'zuhause'],
  farbe: 'salbei', symbol: 'blume',
  inhalt: ['Krepppapier', 'Draht, Floristenband und Anleitung (je nach Kit)'],
  schritte: [
    'Anleitung des Kits durchlesen und mit der einfachsten Blume anfangen.',
    'Blütenblätter nach Schablone ausschneiden. Die Rillen im Krepppapier sollen dabei längs durch das Blatt laufen.',
    'Blätter formen: in der Mitte mit beiden Daumen vorsichtig dehnen, damit eine Wölbung entsteht. Die Ränder mit einem Stift oder Holzspieß einrollen.',
    'Blätter einzeln um die Blütenmitte legen und unten festkleben oder mit Draht fixieren.',
    'Den Stiel straff mit Floristenband umwickeln. Das Band dabei leicht dehnen, dann klebt es.'
  ],
  tipps: [
    'Wenig Kleber verwenden, sonst wellt sich das Papier.',
    'Lieber ein Blatt zu viel ausschneiden. Krepppapier verzeiht viel.',
    'Der fertige Strauß passt gut neben das Bild aus Geschenk 5.'
  ],
  detox: 'Bastel eine Blume mehr und verschenk sie. Persönlich, nicht per Nachricht.'
}

];

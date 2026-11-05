# Digital Detox: Geburtstagsgeschenk

Statische Website zu sieben DIY- und Detox-Geschenken. Wird über einen NFC-Anhänger geöffnet, läuft ohne externe Abhängigkeiten und funktioniert offline (Web-App mit Service Worker).

## Dateien
- `geschenke.js`: alle Texte. Name, Widmung, Absender und die sieben Geschenke.
- `index.html`: Design und Funktionen.
- `sw.js`: Offline-Speicher. Nach Änderungen die Versionsnummer in `CACHE` erhöhen.
- `fonts/`: Fraunces, Gochi Hand, Nunito (SIL Open Font License, über Google Fonts).

## Texte selbst ändern
Auf GitHub `geschenke.js` öffnen, Stift-Symbol, ändern, „Commit changes“. Nach 1 bis 2 Minuten online. Einfache Anführungszeichen ' vermeiden, stattdessen ’ verwenden.

## Funktionen
- Geschenke als Tickets mit Nummer, Titel, Motto und Zeitaufwand; optional verpackt, bis sie ausgepackt werden (`CONFIG.ueberraschung`).
- Filter nach Zeit, Lust und Status, dazu „Überrasch mich“ als Losziehung.
- Auszeit-Timer mit Vollbild, Gong am Ende und Zähler, wie oft zwischendurch zum Handy gegriffen wurde.
- Abstempeln mit Bewertung und Notiz, Auszeit-Tagebuch mit Fortschritt und Offline-Zeit.
- Alle Daten bleiben lokal im Browser (localStorage).

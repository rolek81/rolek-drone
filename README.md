# ROLEK.DRONE — niezależna strona

Otwórz `index.html` w przeglądarce. Strona działa bez instalacji, budowania i konta ChatGPT.

## Zmiana treści

Edytuj `config.js`: kontakt, ceny, opisy, link do kanału, własne filmy i zdjęcie główne. Zapisz i odśwież stronę. Nie usuwaj cudzysłowów, przecinków i nawiasów. Pozostałe teksty są w `index.html`, wygląd w `styles.css`.

Dane i ceny pochodzą z dostarczonego materiału: 149 / 179 / 199 / 249 zł. Przed publikacją potwierdź aktualność cen, sprzętu i uprawnień. Ujęcia 4K są ofertą materiału, nie obietnicą dla każdego drona.

## Własne portfolio

Dodaj własne zdjęcie jako `assets/hero.jpg` i ustaw `heroImage: 'assets/hero.jpg'`. Obecna grafika pochodzi z wcześniejszego pakietu strony na Twoim pulpicie. Dodaj `assets/showreel.mp4` i ustaw `showreel: 'assets/showreel.mp4'`. Film ma kontrolki i nie odtwarza się sam.

Do `videos` dodaj obiekty z tytułem i rzeczywistym ID filmu YouTube. ID to część adresu po `watch?v=` lub `youtu.be/`. Lista zawiera showreel i trzy filmy z wcześniejszego pakietu strony. Linki i miniatury pochodzą z jego konfiguracji; dostępność samych filmów wymaga sprawdzenia w YouTube. Miniatury są lokalne. Przy nowych filmach ustaw lokalne `image`, aby strona nie łączyła się z YouTube przed kliknięciem.

## Hosting poza ChatGPT

Projekt to zwykła strona statyczna. Można umieścić cały folder w repozytorium GitHub, a następnie wskazać je w Cloudflare Pages albo innym hostingu statycznym. Nie wymaga polecenia budowania; katalog publikacji to katalog zawierający `index.html`. Nie wysyłaj README ani zrzutów testowych do publicznego katalogu, jeśli nie chcesz ich udostępniać.

Docelowy właściciel GitHub: rolek81. Nie utworzono kont hostingu, repozytorium ani publicznej domeny. Publikacja wymaga dostępnego konta właściciela. Projekt nie ma formularza ani zaplecza serwerowego: przyciski otwierają telefon, pocztę lub WhatsApp. Nie wysyłają wiadomości automatycznie.

## Pliki

- `index.html` — struktura i teksty
- `config.js` — dane do regularnych zmian
- `styles.css` — układ na komputer i telefon
- `app.js` — cennik, filmy, menu i okno prywatności
- `assets/` — grafiki i miejsce na Twoje materiały

Projekt nie wymaga abonamentu ChatGPT. Warunki i opłaty hostingu oraz domeny zależą od wybranego dostawcy. Strona nie zawiera analityki i nie zapisuje cookies.

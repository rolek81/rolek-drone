// Tutaj zmieniaj kontakt, ceny i filmy. Bez budowania strony i bez abonamentu.
window.ROLEK = {
  brand: 'ROLEK.DRONE', name: 'Bartosz Polek', phone: '+48884787541', phoneLabel: '884 787 541', email: 'bartoszp81@gmail.com',
  youtube: 'https://www.youtube.com/@rolek81', area: 'Mielec i Podkarpacie',
  // Ścieżka do banera nad ofertą.
  heroImage: 'assets/banner.jpg',
  // Własny plik MP4, np. assets/showreel.mp4. Film rusza po kliknięciu.
  showreel: '',
  // Dodaj zweryfikowane filmy: { title: 'Tytuł', id: '11-znakowe-ID-YouTube' }
  videos: [
    {title:'Showreel — Mielec z powietrza', id:'pfKAY-YNjTQ', image:'assets/showreel.jpg'},
    {title:'Spokojna ziemia mielecka', id:'VOQ2CBr9r90', image:'assets/natura.jpg'},
    {title:'Mielec po zmroku', id:'0j4rPOsAhoc', image:'assets/noc.jpg'},
    {title:'Zimowa panorama', id:'kXwtT182XfI', image:'assets/zima.jpg'}
  ],
  services: [
    {title:'Zdjęcia nieruchomości', text:'Pokaż dom, działkę lub obiekt firmowy razem z jego otoczeniem.', scope:'8–10 zdjęć', price:139},
    {title:'Oględziny wizualne', text:'Zobacz dach, komin, elewację lub postęp prac z perspektywy drona.', scope:'10–15 kadrów', price:169},
    {title:'Surowe ujęcia wideo', text:'Materiał do własnego montażu, ogłoszenia lub mediów społecznościowych.', scope:'Ujęcia w jakości 4K', price:189},
    {title:'Film promocyjny', text:'Wybrane ujęcia, montaż i podkład muzyczny. Gotowy materiał dla Twojej marki.', scope:'Film 20–40 sekund', price:229}
  ]
};

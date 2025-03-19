document.addEventListener("DOMContentLoaded", ()=>{
    const musicData = [
        { title: 'Eu sou daqui', artist: 'Pontas de Lança', image: './img/song_eu-sou-daqui_pontas-de-lanca.jpg' },
        { title: 'Magoa', artist: 'Jay Arghh', image: './img/song_magoa_jay-arghh.jpg' },
        { title: 'MOÇAMBIQUE (feat. Deltino Guerreiro)', artist: 'Justino Ubakka', image: './img/song_mocambique_justino-ubakka_deltino-guerreiro.jpg' },
        { title: 'Perfeita', artist: 'Hot Blaze', image: './img/song_perfeita_hot-blaze.jpg' },
        { title: 'Tha Crew', artist: 'Laylizzy', image: './img/song_tha-crew_laylizzy.jpg' }        
    ]
    const artistsData = [
        { name: 'Henrique & Juliano', image: './img/artista-henrique-juliano.jpg' },
        { name: 'Jorge & Mateus', image: './img/artista-jorge-mateus.jpg' },
        { name: 'Zé Neto & Cristiano', image: './img/artista-ze-neto.jpg' },
        { name: 'Gusttavo Lima', image: './img/artista-gustavo-limma.jpg' },
        { name: 'Luan Santana', image: './img/artista-luan-santana.jpg' }
        ];
        
    const albunsData = [
        { name: 'White Noise (Sleep & Relaxation Sounds)', artist: 'Sleepy John', image: './img/album-white-noise.jpg' },
        { name: '0 Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano', image: './img/album-ceu-explica.jpg' },
        { name: 'Nada como um dia após o outro', artist: 'Racionais', image: './img/album-vida-loka.jpg' },
        { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: './img/album-hit-me.jpg' },
        { name: 'CAJU', artist: 'Liniker', image: './img/album-caju.jpg' }
        ];


    const musicGrid = document.querySelector('.music-grid');
    const artistsGrid = document.querySelector('.artists-grid');
    const albunsGrid = document.querySelector(".albuns-grid");

    musicData.forEach(song => {
        const songCard = document.createElement('div');
        songCard.classList.add("song-card");
        songCard.classList.add("grid-item");

        songCard.innerHTML = 
        `<img src="${song.image}">
        <h3>${song.title}</h3>
        <p>${song.artist}</p>`;
    
    
        musicGrid.appendChild(songCard);
    });

    artistsData.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.classList.add("artist-card");
        artistCard.classList.add("grid-item");
         
        artistCard.innerHTML = 
            `<img src="${artist.image}">
            <h3>${artist.name}</h3>
            <p>Artista</p>`;
        
        
        artistsGrid.appendChild(artistCard);
    });
    
    albunsData.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.classList.add("album-card")
        albumCard.classList.add("grid-item");

        albumCard.innerHTML = 
            `<img src="${album.image}">
            <h3>${album.name}</h3>
            <p>${album.artist}</p>`;

        albunsGrid.appendChild(albumCard);
    });
})


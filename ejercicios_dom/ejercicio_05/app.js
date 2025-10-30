const albums = [
    {
        title: "De Mysteriis Dom Sathanas",
        artist: "Mayhem",
        year: 1994,
        coverUrl: "https://m.media-amazon.com/images/I/81v3F9ORXfL._SL1500_.jpg"
    },
    {
        title: "Reign in Blood",
        artist: "Slayer",
        year: 1986,
        coverUrl: "https://m.media-amazon.com/images/I/71ddQM0qHCL._SL1500_.jpg"
    },
    {
        title: "Ride the Lightning",
        artist: "Metallica",
        year: 1984,
        coverUrl: "https://m.media-amazon.com/images/I/716FcW7qgSL._SL1200_.jpg"
    },
    {
        title: "Painkiller",
        artist: "Judas Priest",
        year: 1990,
        coverUrl: "https://m.media-amazon.com/images/I/81XNEZ7MtJL._SL1500_.jpg"
    },
    {
        title: "Iron Fist",
        artist: "Motörhead",
        year: 1982,
        coverUrl: "https://m.media-amazon.com/images/I/91BULydS6yL.jpg"
    }
];

const main = document.body.querySelector("main");
const ul = document.createElement("ul");
main.appendChild(ul);
for (const album of albums) {
    const li = document.createElement("li");
    li.innerHTML= `<h2>${album.artist} - ${album.title}</h2>
    <img src="${album.coverUrl}" alt="${album.title} cover">
    <h3>${album.year}</h3>
    `;
    ul.appendChild(li);
}

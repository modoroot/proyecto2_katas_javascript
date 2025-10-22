const movies = [  
  { title: 'The Matrix', releaseYear: 1999 },  
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },  
  { title: 'Inception', releaseYear: 2010 },  
  { title: 'Jurassic Park', releaseYear: 1993 },  
  { title: 'The Shawshank Redemption', releaseYear: 1994 },  
  { title: 'Pulp Fiction', releaseYear: 1994 },  
  { title: 'Avatar', releaseYear: 2009 },  
  { title: 'The Dark Knight', releaseYear: 2008 },  
  { title: 'Fight Club', releaseYear: 1999 },  
  { title: 'Forrest Gump', releaseYear: 1994 }  
];
let post2000Movies = 0;
let pre2000Movies = 0;
for (let i = 0; i < movies.length; i++) {
    if (movies[i].releaseYear >= 2000)
        post2000Movies++;
    else
        pre2000Movies++;
}

console.log(`Películas anteriores al 2000: ${pre2000Movies}, Películas posteriores al 2000: ${post2000Movies}`)
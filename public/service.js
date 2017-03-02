app.service('service', function(){
  var movies = [
  {title:"Tarzan", 
  year:1995, 
  poster:"http://static.comicvine.com/uploads/original/10/104544/4068923-tarzan-wallpaper-walt-disneys-tarzan-6248938-1024-768.jpg", 
  description:"This is wild movie."},
  {title:"Tarzan 2", 
  year:1995, 
  poster:"http://static.comicvine.com/uploads/original/10/104544/4068923-tarzan-wallpaper-walt-disneys-tarzan-6248938-1024-768.jpg", 
  description:"This is wilder movie."},
  {title:"Tarzan 3", 
  year:1995, 
  poster:"http://static.comicvine.com/uploads/original/10/104544/4068923-tarzan-wallpaper-walt-disneys-tarzan-6248938-1024-768.jpg", 
  description:"This is an even wilder movie."},
  {title:"Tarzan 4", 
  year:1995, 
  poster:"http://static.comicvine.com/uploads/original/10/104544/4068923-tarzan-wallpaper-walt-disneys-tarzan-6248938-1024-768.jpg", 
  description:"This movie is just the wildest."}
  ];

  var collection = [

  ];

  return { 
    movies: movies,
    collection: collection
  };
});
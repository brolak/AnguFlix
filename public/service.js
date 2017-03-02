app.service('service', function(){
  var movies = [
  {
  	title:"Tarzan", 
  	year:1995, 
  	poster:"https://barryreesedotnet.files.wordpress.com/2013/06/tarzan-disney-9065913-1024-768.jpg?w=300&h=225", 
  	description:"This is wild movie.",
  	collected: false
  },
  {
  	title:"Tarzan 2", 
  	year:1995, 
  	poster:"https://barryreesedotnet.files.wordpress.com/2013/06/tarzan-disney-9065913-1024-768.jpg?w=300&h=225", 
  	description:"This is wilder movie.",
  	collected: false
  },
  {
  	title:"Tarzan 3", 
  	year:1995, 
  	poster:"https://barryreesedotnet.files.wordpress.com/2013/06/tarzan-disney-9065913-1024-768.jpg?w=300&h=225", 
  	description:"This is an even wilder movie.",
  	collected: false
  },
  {
  	title:"Tarzan 4", 
  	year:1995, 
  	poster:"https://barryreesedotnet.files.wordpress.com/2013/06/tarzan-disney-9065913-1024-768.jpg?w=300&h=225", 
  	description:"This movie is just the wildest.",
  	collected: false
  }
  ];

  return { 
    movies: movies
  };
});
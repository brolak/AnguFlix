app.service('service', function(){
  var movies = [
  {
  	title:"Tarzan", 
  	year:1995, 
  	poster:"http://vignette1.wikia.nocookie.net/disney/images/f/f7/Tarzan-disneyscreencaps.com-2704.jpg/revision/latest?cb=20140415221438", 
  	description:"This is wild movie.",
  	collected: false
  },
  {
  	title:"Tarzan Two: Tarzaner", 
  	year:1995, 
  	poster:"https://barryreesedotnet.files.wordpress.com/2013/06/tarzan-disney-9065913-1024-768.jpg?w=300&h=225", 
  	description:"This is wilder movie.",
  	collected: false
  },
  {
  	title:"Tarzan Three: Tarzan Rides Again", 
  	year:1995, 
  	poster:"http://vignette1.wikia.nocookie.net/disney/images/0/01/Tarzan-disneyscreencaps.com-9805.jpg/revision/latest?cb=20140415221153", 
  	description:"This is an even wilder movie.",
  	collected: false
  },
  {
  	title:"Tarzan Four: Fourzan", 
  	year:1995, 
  	poster:"http://www.rotoscopers.com/wp-content/uploads/2016/09/tarzan-disney-01.jpg", 
  	description:"This movie is just the wildest.",
  	collected: false
  }
  ];

  var collection = [];

  return { 
    movies: movies,
    collection: collection
  };
});
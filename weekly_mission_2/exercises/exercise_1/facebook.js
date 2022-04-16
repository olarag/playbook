const datos = {
 name: "NASA - National Aeronautics and Space Administration",
 author: "NASA",
 following: 141,
 followers: 25000000,
 numberOfPosts: 3000,
 type: "Government organization",
 photos: 1200,
 bio: "Explore the universe and discover our home planet with the official NASA page on Facebook. Visit us at www.nasa.gov",
 getTotalPosts: function(){
   return this.numberOfPosts + this.photos
 },
 getGeneralInfo: function(){
   return `This Twitter is from ${this.name} was created by ${this.author} and has ${this.followers} followers`
 }
}

console.log("Nombre del usuario:" + datos.name)
console.log("Biografía del usuario:" + datos.bio)
console.log("Tweets totales y media: " + datos.getTotalPosts())
console.log(datos.getGeneralInfo())

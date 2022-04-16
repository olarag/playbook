const datos = {
 name: "SpaceX",
 author: "SpaceX",
 following: 100,
 followers: 21200000,
 numberOfTweets: 5822,
 joined: 2009,
 likes: 358,
 photos: 1897,
 bocation: "Hawthorne, CA",
 bio: "SpaceX designs, manufactures and launches the world’s most advanced rockets and spacecraft",
 getTotalTweetts: function(){
   return this.numberOfTweets + this.photos
 },
 getGeneralInfo: function(){
   return `This Twitter is from ${this.name} was created by ${this.author} and has ${this.followers} followers`
 }
}

console.log("Nombre del usuario:" + datos.name)
console.log("Biografía del usuario:" + datos.bio)
console.log("Tweets totales y media: " + datos.getTotalTweets())
console.log(datos.getGeneralInfo())

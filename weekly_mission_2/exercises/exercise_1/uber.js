const datos = {
 name: "Carl's JR",
 author: "carls-js",
 rating: 4.7,
 ratings: 254,
 numberOfProducts: 8,
 type: "Hamburguesas",
 getProduct: function(){
   return `Has ${this.numberOfProducts} products and ${this.rating} rating`
 },
 getGeneralInfo: function(){
   return `This Uber Eats is from ${this.name} was created by ${this.author}`
 }
}

console.log("Nombre del usuario:" + datos.name)
console.log(datos.getProduct())
console.log(datos.getGeneralInfo())

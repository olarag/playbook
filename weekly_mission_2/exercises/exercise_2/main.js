const explorers = [
 {
   name: "Explorer 1",
   exercises_completed: 10,
   rate: 99,
   city: "CDMX",
   stack: [
     "js",
     "c#"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: true,
       exercisesFinished: true
     }
   }
 },
 {
   name: "Explorer 2",
   exercises_completed: 9,
   city: "Veracruz",
   rate: 50,
   stack: [
     "js"
   ],
   missions: {
     onboarding: {
       isFinished: false,
       exercisesFinished: false
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 },
 {
   name: "Explorer 3",
   exercises_completed: 3,
   city: "Sonora",
   rate: 100,
   stack: [
     "elixir"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 }
]

// 2.1 Nombre de los explorers.
console.log("Ejercicio 2.1")
explorers.forEach(explorer => console.log("El nombre del explorer es: " + explorer.name))

// 2.2 Stack del explorer.
console.log("Ejercicio 2.2")
explorers.forEach(explorer => console.log("El stack del explorer es: " + explorer.stack))

// 2.3 Stacks con map.
console.log("Ejercicio 2.3")
const explorerStacks = explorers.map(explorer => explorer.stack)
console.log(explorerStacks)

// 2.4 Filtro de stack que tengan js.
console.log("Ejercicio 2.4")
const explorerStacksFilter = explorers.filter(explorer => explorer.stack.includes("js"))
console.log(explorerStacksFilter)

// 2.5 Buscar explorer de CDMX.
console.log("Ejercicio 2.5")
const explorerFind = explorers.find(explorer => explorer.city === "CDMX")
console.log(explorerFind)

// 2.6 Suma de ejercicios de explorers. 
console.log("Ejercicio 2.6")
const explorerAcc = explorers.reduce((acc, explorer) => acc + explorer.exercises_completed, 0)
console.log(explorerAcc)

// 2.7 Verificar si algun explorer tiene terminado el frontend.
console.log("Ejercicio 2.7")
const explorerSome = explorers.some(explorer => explorer.missions.frontend.exercisesFinished)
console.log(explorerSome)

// 2.8 Valida si todos tiene terminado el onboarding.
console.log("Ejercicio 2.8")
const explorerEvery = explorers.every(explorer => explorer.missions.onboarding.isFinished)
console.log(explorerEvery)

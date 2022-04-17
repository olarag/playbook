class Logger{  
  constructor() {
        this.name = "playbook",
        this.author = "olarag",
        this.language =  "JavaScript",
        this.numberOfCommits = 59,
        this.stars = 0,
        this.forks = 690,
        this.issues_open = 5,
        this.issues_close = 7
  }


        getTotalIssues (){
           return this.issues_open + this.issues_close
         }

         getGeneralInfo (){
           return `This repository ${this.name} was created by ${this.author}`
         }


}

const datos = new Logger()
console.log("Nombre del repo:" + datos.name)
console.log("Issues totales: " + datos.getTotalIssues())
console.log(datos.getGeneralInfo())

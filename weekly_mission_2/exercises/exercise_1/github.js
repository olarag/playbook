const repo = {
 name: "playbook",
 author: "olarag",
 language: "JavaScript",
 numberOfCommits: 59,
 stars: 0,
 forks: 690,
 issues_open: 5,
 issues_close: 7,
 getTotalIssues: function(){
   return this.issues_open + this.issues_close
 },
 getGeneralInfo: function(){
   return `This repository ${this.name} was created by ${this.author}`
 }
}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

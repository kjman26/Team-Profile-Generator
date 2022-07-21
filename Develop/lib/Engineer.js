// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

const Engineer extends Employee {
    constructor(name, id, email, GitHub){
        super(name, id, email)
        
        this.GitHub = GitHub
  }  

  getGithub(){
    return this.GitHub
  }

  getRole(){
    return "Engineer"
  }
}

module.exports = Engineer
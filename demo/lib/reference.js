function Reference(target,path = ["references"]){
  this.target = target
  this.path = path
  this.toJSON = () => {
    return `$ref:${this.path.join('.')}.${this.target}`
  }
  this.toGON = () => {
    return `$${this.path.join('.')}.${this.target}`
  }
}

export default Reference
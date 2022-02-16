// module.exports.graceFaveFood=["cherries", "sushi", "korean food"]
let graceFaveFood=["cherries", "sushi", "korean food"]

module.exports.printFood=()=>{
  for (let i=0; i < graceFaveFood.length; i++){
    console.log(graceFaveFood[i])
  }
}
//name of object that will be exported from this file
module.exports.beBasic= () => console.log("thats so fetch!")

module.exports.count = () => {
  for(let i=0; i<10; i++){
    console.log(i)
  }
}

const myName = 'Taylor'
module.exports.greeting = () => {
  console.log(`helllow ${myName}`)
}

// const beBasic = () => console.log("That's so fetch!")

// const count = () => {
//     for(let i=0; i<=10; i++) {
//         console.log(i)
//     }
// }

// const functions = {
//     count: count,
//     beBasic: beBasic
// }

// module.exports.myFunctions = functions
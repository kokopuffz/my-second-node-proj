console.log('sup, im your second node!')

//imports module from file we indicate 
const myModule = require('./myModule.js')
// console.log(myModule)
myModule.beBasic()
myModule.count()
myModule.greeting()

const myModuleFood = require('./myModuleFood')
// console.log(myModuleFood.graceFaveFood.length)

// for (let i=0; i < myModuleFood.graceFaveFood.length; i++){
//   console.log(myModuleFood.graceFaveFood[i])
// }         

myModuleFood.printFood()

//import the core module called fs
//crud 
const fs=require('fs')
const dayjs = require('dayjs')
fs.readFile('story.txt', 'utf8', (err, data)=> {
  if (err) console.log('there was problem reading file')
  else console.log(data)
})

// setInterval(()=>{
//   console.log("grace is me")
// }, 3000)

// console.log(dayjs('2022-02-16'))
// console.log(dayjs().format('MMM DD YYYY'))

console.log(dayjs('1983-07-03'))
console.log(dayjs("1983-07-03").format(`dddd[, ]D of MMMM, [year] YYYY`));

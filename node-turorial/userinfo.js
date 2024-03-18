const os = require('os')

//info about user

const user = os.userInfo() 
console.log(user)

// nethod returning the system uptime in seconds 

console.log(`The system Uptime is ${os.uptime} seconds`)

// Current os info

const currentOS = {
    name: os.type() ,
    release:os.release() ,
    totalMem: os.totalmem() ,
    freeMem: os.freemem()
}

console.log(currentOS)
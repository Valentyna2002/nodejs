const fs = require('node:fs/promises');
const path = require('node:path')

module.exports = {
    read: async () =>{
        const pathToFile = path.join(__dirname,'db.json')
        const data = await  fs.readFile(pathToFile,'utf8')
        return data ? JSON.parse(data):[]
    },
    write: async (users)=>{
        const pathToFile = path.join(__dirname,'db.json')

        await writeFile(pathToFile,JSON.stringify(users))

    }
}
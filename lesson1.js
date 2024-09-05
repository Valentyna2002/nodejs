const {foo:helperFoo} =require('../helper')
// const http = require('node:http');
// const path = require('node:path');
const readline = require("node:readline/promises");


const foo = async ()=>{

    // http
    // const server = http.createServer(
    //     (req, res) => {
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify({
    //         data: 'Hello World!',
    //     }));
    // });
    //
    // server.listen(3000);
    //
    //
    // path
    // const patchFile =__filename
    // console.log(patchFile)
    // console.log(path.dirname(patchFile))
    // console.log(path.extname(patchFile))
    // console.log(path.basename(patchFile))
    // console.log(path.parse(patchFile))
    // console.log(path.isAbsolute(patchFile))


    // readline
   const rlInstance= readline.createInterface({
        input: process.stdin,
        output:process.stdout
    })

   const name = await rlInstance.question('Name?');
    console.log(`Your name is ${name}`)
process.exit(0)

}
void foo();
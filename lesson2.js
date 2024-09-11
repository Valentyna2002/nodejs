const fsPromises = require('node:fs/promises');
//
const {foo: helperFoo} = require('./helper');
const path = require("node:path");
const fs = require("node:fs");
const EventEmitter = require("events");
const os = require("os");
const foo = async () =>{



// FC
//     створення папки
 // const pathToFiles =path.join(__dirname,'test.txt')
 // await fsPromises.writeFile(pathToFiles,'Hello World\n')
 // const data = await fsPromises.readFile(pathToFiles,'utf8')
 // console.log(data);
 // await fsPromises.appendFile(pathToFiles,'Some new data')
 //  await fsPromises.mkdir(path.join(__dirname,'new-folder'),{recursive:true})
  // await fsPromises.mkdir(path.join(__dirname,'new-folder','another-folder','another-folder'))
  // await fsPromises.mkdir(path.join(__dirname,'new-folder','another-folder','another-folder'),{recursive:true})
  // await fsPromises.rm(path.join(__dirname,'new-folder'),{recursive:true})

 // await fsPromises.unlink(pathToFiles)  //delete file
 // await fsPromises.rename(pathToFiles,path.join(__dirname,'new-folder','new-file.txt'))
 // await fsPromises.copyFile(pathToFiles,path.join(__dirname,'new-folder','new-file.txt'))
 // const stat = await fsPromises.stat(pathToFiles)
 // console.log(stat.isDirectory())



 //Stream
 //    const pathToFile  = path.join(__dirname,'Resume.pdf');
 //    const readStream = fs.createReadStream(pathToFile);
 //    const writeStream = fs.createWriteStream(path.join(__dirname,'new-big-file.pdf'));
    // readStream.on('data', (chunk) => {
    //     console.log('chunk', chunk.length);
    //     writeStream.write(chunk);
    // })
    // readStream.pipe(writeStream);


    //Events
    // const emitter = new EventEmitter();
    // emitter.on("event", err => {
    //     console.log('Even happened')
    // })
    // emitter.emit('event')
    // emitter.emit('event')
    // emitter.emit('event')
    // emitter.emit('event')
    // emitter.emit('event')
    // emitter.emit('event')
    // emitter.once("event", (...args) => {
    //     console.log('_________________')
    //     console.log('Even 1 happened')
    //     console.log(args)
    //     console.log('________________')
    // })
    // emitter.on("event", (...args) => {
    //     console.log('Even 2 happened')
    //     console.log(args)
    // })
    // emitter.emit('event','Hello',345,44)
    // emitter.emit('event')
    // emitter.emit('event',555)



    //os
    console.log(os.arch())
    console.log(os.cpus())
    console.log(os.totalmem()/1024/1024/1024,'gb')
    console.log(os.freemem()/1024/1024/1024,'gb')
    console.log(os.homedir())
    console.log(os.hostname())



}

void foo();
const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const {read,write}= require("./hw3")

const users = [
    {id: 1, name: 'Maksym', email: 'feden@gmail.com', password: 'qwe123'},
    {id: 2, name: 'Alina', email: 'alindosik@gmail.com', password: 'ert345'},
    {id: 3, name: 'Anna', email: 'ann43@gmail.com', password: 'ghj393'},
    {id: 4, name: 'Tamara', email: 'tomochka23@gmail.com', password: 'afs787'},
    {id: 5, name: 'Dima', email: 'taper@gmail.com', password: 'rtt443'},
    {id: 6, name: 'Rita', email: 'torpeda@gmail.com', password: 'vcx344'},
    {id: 7, name: 'Denis', email: 'denchik@gmail.com', password: 'sdf555'},
    {id: 8, name: 'Sergey', email: 'BigBoss@gmail.com', password: 'ccc322'},
    {id: 9, name: 'Angela', email: 'lala@gmail.com', password: 'cdd343'},
    {id: 10, name: 'Irina', email: 'irka7@gmail.com', password: 'kkk222'},
];

app.get('/users', async (req, res) => {
    try{
        const users = await read();
        res.send(users);
    }catch (e) {
        res.status(500).send(e.message);
    }
});
app.post('/users', async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const users = await read();
        const id = users[users.length - 1].id+1;
        const newUser = {name, email, password};
        users.push(newUser)
        await write(users);
    res.status(201).send(newUser);
    }catch (e){
        res.status(500).send(e.message);
    }
});
app.get('/users/:userId',async (req, res) => {
    try{
    const userId = Number(req.params.userId)
        const users = await read()
    const user = users.find(user=>user.id === userId);
    res.send(user)}catch (e) {
        res.status(500).send(e.message);
    }
});
app.put('/users/:userId',async (req, res) => {
    try {
        const userId = Number(req.params.userId);
        const users = await read();
        const userIndex = users.findIndex(user => user.id === userId);
        if (userIndex === -1) {
            return res.status(404).send('User not found');
        }
        const {name, email, password} = req.body;
        //TODO validate data
        // users[userIndex] = {...users[userIndex], name, email, password};
        users[userIndex].name = name;
        users[userIndex].email = email;
        users[userIndex].password = password;

        await write(users)
        res.status(201).send(users[userIndex]);
    } catch (e) {
        res.status(500).send(e.message);
    }
});
app.delete('/users/:userId', async (req, res) => {
    try {
        const userId = Number(req.params.userId);
        const users = await read()
        const userIndex = users.findIndex(user => user.id === userId);
        if (userIndex === -1) {
            return res.status(404).send('User not found');
        }
        users.splice(userIndex, 1);

        await write()
        res.sendStatus(204);
    } catch (e) {
        res.status(500).send(e.message);
    }
});



app.listen(3000,()=>{
    console.log('Server started on http://localhost:3000/users');
})

app.delete('/users/:userId', (req, res) => {

})

// const server = http.createServer((req, res) => {
//     if (req.url === '/users' && req.method === 'GET') {
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify({
//             data: 'Hello World!',
//         }));
//         return
//     }
    // if (req.url === '/users/:id' && req.method === 'GET') {
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     res.end(JSON.stringify({
    //         data: 'Hello World!',
    //     }));
    //     return
    // }
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.end(JSON.stringify({
//         data: 'Hello World!',
//     }));
// });
// server.listen(3000);

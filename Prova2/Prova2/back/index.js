const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { ObjectId } = require('mongodb');
const app = express();

app.use(bodyParser.urlencoded({'extended': false}));
app.use(bodyParser.json());
app.use(cors());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mayarasilvasenac:WDbKidNUV504OA0d@prova.yb1c53c.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const db = client.db('tarefaCrud');

async function insereElemento(nome){
    const tarefas = db.collection('todo');
    const newtarefa = {nome: nome};
    await tarefas.insertOne(newtarefa);

}

async function editaElemento(_id, nome){
    const tarefas = db.collection('todo');
    const filtro = { _id: new ObjectId(_id) };
    const update = { "$set": { nome: nome} };
    await tarefas.updateOne(filtro, update);

}

async function removeElemento(nome){
    const tarefas = db.collection('todo');
    tarefas.findOneAndDelete({ nome: nome });
}

async function pegaTodos(res){
    const tarefas = await db.collection('todo').find();
    let tarefasres = [];
    for await (let tarefa of tarefas){
        tarefasres.push(tarefa);
    }
    res.json(tarefasres);
}


app.post('/tarefas', (req, res) => {
    const {nome} = req.body;
    insereElemento(nome);
    res.json("Tarefa Inserida com Sucesso");
})

app.delete('/tarefas', (req, res) => {
    const {nome} = req.body;
    removeElemento(nome);
    res.json("Tarefa Deletada com sucesso");
})

app.get('/tarefas', (req, res) => {
    pegaTodos(res);
})

app.put('/tarefas', (req, res) => {
    const {_id, nome} = req.body;
    editaElemento(_id, nome);
    res.json("Tarefa editada com Sucesso");
});




app.listen(3001, () => {
    console.log("Servidor online na porta 3001");
})
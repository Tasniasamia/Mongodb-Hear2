const express = require('express')
const app = express()
var cors = require('cors')
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5700
app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ioy1chb.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const database = client.db("Chocholate").collection("allchocholate");

  
    // Send a ping to confirm a successful connection
    app.get('/chocholates',async(req,res)=>{
        const cursor =database.find(); 
        const result=await cursor.toArray()       
        res.send(result);
        console.log(result);
    })
    app.get('/chocholates/:id',async(req,res)=>{

        const id=req.params.id;
        const query = { _id:new ObjectId(id)};
        const movie = await database.findOne(query);
        res.send(movie);
    })
    app.put('/chocholates/:id',async(req,res)=>{
        const id=req.params.id;
        const user=req.body;
        const filter = { _id:new ObjectId(id)};
        const options = { upsert: true };
        const updateDoc = {

            $set: {
      
             photo:user.photo,
             name:user.name,
             country:user.country,
             catagory:user.catagory      
            },
      
          };
          const result = await database.updateOne(filter, updateDoc, options);
          res.send(result);
    })
    app.delete('/chocholates/:id',async(req,res)=>{
        const id=req.params.id;
        const query = { _id: new ObjectId(id) };
        const movie = await database.deleteOne(query);
        res.send(movie);
    })
    app.post('/chocholates',async(req,res)=>{
        const newuser=req.body;
        console.log(newuser);
        const result = await database.insertOne(newuser);
        res.send(result);
        console.log(result);
    })
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
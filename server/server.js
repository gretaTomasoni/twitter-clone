const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;
const MongoClient = require("mongodb").MongoClient;

const uri =
  "mongodb+srv://gretatomasoni:0000@cluster0.ightwgc.mongodb.net/twitter-clone?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

// Utilizzo del middleware cors
app.use(cors());

app.get("/tweets", async (req, res) => {
  try {
    await client.connect();
    const database = client.db("twitter-clone");
    const tweetsCollection = database.collection("tweets");
    const tweets = await tweetsCollection.find().toArray();
    res.status(200).json(tweets);
  } catch (error) {
    console.error(error);
    res.status(500).send("Errore del server");
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`L'app è in ascolto su http://localhost:${port}`);
});

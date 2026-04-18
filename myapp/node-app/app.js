const http = require("http");
const { MongoClient } = require("mongodb");

const url = process.env.MONGO_URL;
const client = new MongoClient(url);

let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db("testdb");
    console.log("Connected to MongoDB 🚀");
  } catch (e) {
    console.log("Retry DB...");
    setTimeout(connectDB, 2000);
  }
}
connectDB();

const server = http.createServer(async (req, res) => {
  if (!db) {
    res.write("DB not ready");
    return res.end();
  }

  const collection = db.collection("users");

  if (req.url === "/add") {
    await collection.insertOne({ name: "Harsh", time: new Date() });
    res.write("User added");
  } else if (req.url === "/users") {
    const users = await collection.find().toArray();
    res.write(JSON.stringify(users));
  } else {
    res.write("API running 🚀");
  }

  res.end();
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
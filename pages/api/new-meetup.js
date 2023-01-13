import { MongoClient } from "mongodb";

async function handler(req, res) {
    if(req.method === 'POST') {
        const data = req.body;
        const { title, image, address, description } = data;

        const client = await MongoClient.connect('mongodb+srv://nathanaeld01:NvgtgTQHaBDbFHmk@cluster0.agkvnjd.mongodb.net/?retryWrites=true&w=majority');
        const db = client.db('meetups');

        const meetupsCollections = db.collection('meetups');

        const result = await meetupsCollections.insertOne(data);

        client.close();

        res.status(201).json({ message: 'Meetups inserted' });
    }
};

export default handler;
const express = require("express");
const serverless = require("serverless-http");

const { db } = require('../connection.js')

const app = express();
const router = express.Router();

async function getDocument(collectionName, documentId) {

    try {
        
        const docRef = db.collection(collectionName).doc(documentId);
        const doc = await docRef.get();
    
        if (doc.exists) {
        console.log("Document data:", doc.data());
        return doc.data();
        } else {
        console.log("No such document!");
        return null;
        }
    } catch (error) {
        
        console.log(error)

    }

}

router.get("/", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    var items = await getDocument('products', 'homepage');

    res.json({ message: items });
});

app.use('/.netlify/functions/getproducts', router); // ✨ NEW MIDDLEWARE
module.exports.handler = serverless(app);

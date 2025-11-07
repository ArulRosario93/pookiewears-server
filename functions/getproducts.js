const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

const items = [
        {
            clotheName: 'Massive Black Blue',
            imageSrc: 'https://assets.bigcartel.com/product_images/393025512/546792bc-3af4-4cf3-b8c0-77468f5f0b8a.jpg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'Massive Black Blue',
            imageSrc: 'https://assets.bigcartel.com/product_images/412610220/7fc0dfd8-e2a9-44bf-8bea-7f12d8e23174.jpeg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'WITCH WOMAN',
            imageSrc: 'https://assets.bigcartel.com/product_images/409012752/e736d14b-db3d-4404-bea7-d44635299b6d.jpeg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'Massive Black Blue',
            imageSrc: 'https://assets.bigcartel.com/product_images/393025512/546792bc-3af4-4cf3-b8c0-77468f5f0b8a.jpg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'Massive Black Blue',
            imageSrc: 'https://assets.bigcartel.com/product_images/412610220/7fc0dfd8-e2a9-44bf-8bea-7f12d8e23174.jpeg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'WITCH WOMAN',
            imageSrc: 'https://assets.bigcartel.com/product_images/409012752/e736d14b-db3d-4404-bea7-d44635299b6d.jpeg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'Massive Black Blue',
            imageSrc: 'https://assets.bigcartel.com/product_images/393025512/546792bc-3af4-4cf3-b8c0-77468f5f0b8a.jpg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'Massive Black Blue',
            imageSrc: 'https://assets.bigcartel.com/product_images/412610220/7fc0dfd8-e2a9-44bf-8bea-7f12d8e23174.jpeg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'WITCH WOMAN',
            imageSrc: 'https://assets.bigcartel.com/product_images/409012752/e736d14b-db3d-4404-bea7-d44635299b6d.jpeg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'Massive Black Blue',
            imageSrc: 'https://assets.bigcartel.com/product_images/393025512/546792bc-3af4-4cf3-b8c0-77468f5f0b8a.jpg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'Massive Black Blue',
            imageSrc: 'https://assets.bigcartel.com/product_images/412610220/7fc0dfd8-e2a9-44bf-8bea-7f12d8e23174.jpeg',
            priceSection: '22 USD',
        },
        {
            clotheName: 'WITCH WOMAN',
            imageSrc: 'https://assets.bigcartel.com/product_images/409012752/e736d14b-db3d-4404-bea7-d44635299b6d.jpeg',
            priceSection: '22 USD',
        },
];

router.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({ message: items });
});

app.use('/.netlify/functions/getproducts', router); // ✨ NEW MIDDLEWARE
module.exports.handler = serverless(app);

const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const crypto = require('crypto');
const cookie = require('cookie');
const nonce = require('nonce')();
const querystring = require('querystring');
const request = require('request-promise');

const apiKey = process.env.SHOPIFY_API_KEY;
const apiSecret = process.env.SHOPIFY_API_SECRET;
const scopes = 'read_products';
const forwardingAddress = "https://pwa-manifest.herokuapp.com"; // Replace this with your HTTPS Forwarding address

app.get('/', (req, res) => {
    var st = {
        "name": "Best Choice Products",
        "short_name": "BCP",
        "start_url": "/?standalone",
        "background_color": "#d42020",
        "theme_color": "#fff1e0",
        "display": "standalone",
        "icons": [{
            "src": "https://cdn.shopify.com/s/files/1/0636/7991/files/favicon-logo_2d5fe93a-ae57-43f8-9c1e-7293da43e2ca_110x.png?v=1556227885",
            "sizes": "192x192",
            "type": "image/png"
        }]
    };
    res.send(st);
});



app.use(express.static('public'))
app.listen(process.env.PORT || 8000, () => {
    console.log("OKIE ");
})
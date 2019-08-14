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

app.use('/images', express.static(__dirname + '/icons'));
app.get('/', (req, res) => {
    var st = {
        "name": "Best Choice Products",
        "short_name": "BCP",
        "theme_color": "#d42020",
        "background_color": "#ffffff",
        "display": "standalone",
        "Scope": "https://bestchoiceproducts.com/",
        "start_url": "https://bestchoiceproducts.com/",
        "icons": [
          {
            "src": "/apps/manifest/images/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "/apps/manifest/images/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "/apps/manifest/images/icon-128x128.png",
            "sizes": "128x128",
            "type": "image/png"
          },
          {
            "src": "/apps/manifest/images/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "/apps/manifest/images/icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png"
          },
          {
            "src": "/apps/manifest/images/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/apps/manifest/images/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "/apps/manifest/images/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ],
        "splash_pages": null
      };
    res.send(st);
});



app.use(express.static('public'))
app.listen(process.env.PORT || 8000, () => {
    console.log("OKIE ");
})
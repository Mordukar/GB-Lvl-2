const fs = require('fs')
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());

app.get('/itemslist/:page', (req, res) => {
  const page = req.params.page;
  fs.readFile(`./public/database/items${page}.json`, 'utf8', (err, data) => {
    res.send(data);
  });
});

app.post('/itemslist', (req, res) => {
  const offset = 6;
  const filePath = './public/database/items3.json'

  fs.readFile(filePath, 'utf8', (err, data) => {
    const list = JSON.parse(data || {});
    const amountOfData = Object.keys(list).length
    const newID = offset + amountOfData + 1;
    const newItem = req.body;
    newItem.id = newID;
    list[newID] = newItem;
    fs.writeFile(filePath, JSON.stringify(list), (err)=> {
      if (err) {
        console.log(err);
      }
      res.send(list);
    })
  })
})

app.post('/cartlist', (req, res) => {
  let list = {};

  const filePath = './public/database/cart.json'

  fs.readFile(filePath, 'utf8', (err, data) => {

    list = data.length > 0 ? JSON.parse(data) : {}

    const amountOfData = Object.keys(list).length
    const newID = amountOfData + 1;
    const newItem = req.body;
    newItem.id = newID;
    list[newID] = newItem;
    fs.writeFile(filePath, JSON.stringify(list), (err)=> {
      if (err) {
        console.log(err);
      }
      res.json(list)
    })
  })
  
})

app.listen(4000, () => {
  console.log('Server started');
});



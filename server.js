// const http = require('http');
const express = require('express');
const excelSchema = require("./models/excel");
const xlsx = require('xlsx');
const app = express();

require('./dbConnection');

app.use(express.json());

app.listen(3000, () => {
    console.log('Server running excel');
});

app.get('/importToMongo', async (req, res) => {

    const xlFile = xlsx.readFile("./excel.xlsx");
    const sheet = xlFile.Sheets[xlFile.SheetNames[0]];

    const json = xlsx.utils.sheet_to_json(sheet);

    await excelSchema.save(json).then((result) => {
        if (result.length > 0) {
            res.send({ msg: "success" });
        }
    });

})

app.use('/', (aya, gaya) => {
    gaya.json({ msg: 'gaya' });
});


const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Sử dụng cổng từ biến môi trường hoặc 3000 nếu không có

app.get('/data', (req, res) => {
    const jsonResponse = {
        key1: "2118806895",
        key2: "FFFFFF",
        key3: "123",
        key4: "1",
        key5: "250",
        key6: "128"
    };
    res.json(jsonResponse);
});
app.get('/data1', (req, res) => {
    const jsonResponse = {
        key2: "000000",
        key3: "501",
        key4: "867",
        key5: "628",
        key6: "994"
    };
    res.json(jsonResponse);
});
app.get('/data2', (req, res) => {
    const jsonResponse = {
        key2: "3690EA",
        key3: "80",
        key4: "30",
        key5: "207",
        key6: "157"
    };
    res.json(jsonResponse);
});
app.get('/data3', (req, res) => {
    const jsonResponse = {
        key2: "000000",
        key3: "60",
        key4: "515",
        key5: "187",
        key6: "642"
    };
    res.json(jsonResponse);
});
app.get('/data4', (req, res) => {
    const jsonResponse = {
        key2: "000000",
        key3: "660",
        key4: "6",
        key5: "787",
        key6: "133"
    };
    res.json(jsonResponse);
});
app.get('/data5', (req, res) => {
    const jsonResponse = {
        key2: "000000",
        key3: "10",
        key4: "5",
        key5: "137",
        key6: "132"
    };
    res.json(jsonResponse);
});
app.get('/data6', (req, res) => {
    const jsonResponse = {
        key2: "FFFFFF",
        key3: "328",
        key4: "113",
        key5: "455",
        key6: "240"
    };
    res.json(jsonResponse);
});
app.get('/data7', (req, res) => {
    const jsonResponse = {
        key2: "FF9600",
        key3: "561",
        key4: "14",
        key5: "688",
        key6: "141"
    };
    res.json(jsonResponse);
});
app.get('/data8', (req, res) => {
    const jsonResponse = {
        key2: "FFFFFF",
        key3: "123",
        key4: "1",
        key5: "250",
        key6: "128"
    };
    res.json(jsonResponse);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

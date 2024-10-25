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
        key3: "26",
        key4: "637",
        key5: "153",
        key6: "764"
    };
    res.json(jsonResponse);
});
app.get('/data2', (req, res) => {
    const jsonResponse = {
        key2: "FFFFFF",
        key3: "242",
        key4: "12",
        key5: "370",
        key6: "38"
    };
    res.json(jsonResponse);
});
app.get('/data3', (req, res) => {
    const jsonResponse = {
        key2: "000000",
        key3: "5",
        key4: "45",
        key5: "132",
        key6: "172"
    };
    res.json(jsonResponse);
});
app.get('/data4', (req, res) => {
    const jsonResponse = {
        key2: "FF9600",
        key3: "159",
        key4: "835",
        key5: "286",
        key6: "962"
    };
    res.json(jsonResponse);
});
app.get('/data5', (req, res) => {
    const jsonResponse = {
        key2: "000000",
        key3: "26",
        key4: "637",
        key5: "153",
        key6: "764"
    };
    res.json(jsonResponse);
});
app.get('/data6', (req, res) => {
    const jsonResponse = {
        key2: "000000",
        key3: "785",
        key4: "462",
        key5: "912",
        key6: "589"
    };
    res.json(jsonResponse);
});
app.get('/data7', (req, res) => {
    const jsonResponse = {
        key2: "FFFFFF",
        key3: "722",
        key4: "79",
        key5: "849",
        key6: "206"
    };
    res.json(jsonResponse);
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

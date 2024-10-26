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
        key2: "00756F",
        key3: "643",
        key4: "930",
        key5: "655",
        key6: "942"
    };
    res.json(jsonResponse);
});
app.get('/data2', (req, res) => {
    const jsonResponse = {
        key2: "000000",
        key3: "643",
        key4: "930",
        key5: "655",
        key6: "942"
    };
    res.json(jsonResponse);
});
app.get('/data3', (req, res) => {
    const jsonResponse = {
        key2: "FFD635",
        key3: "643",
        key4: "930",
        key5: "655",
        key6: "942"
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
app.get('/temp1', (req, res) => {
    const jsonResponse = {
        key1: "https://t.me/notpixel/app?startapp=x16_y16",
        key2: "https://t.me/notpixel/app?startapp=f1818573594_t",
        key3: "13"
    };
    res.json(jsonResponse);
});
app.get('/temp2', (req, res) => {
    const jsonResponse = {
        key1: "https://t.me/notpixel/app?startapp=x16_y16",
        key2: "https://t.me/notpixel/app?startapp=f1907686444_t",
        key3: "3"
    };
    res.json(jsonResponse);
});
app.get('/temp3', (req, res) => {
    const jsonResponse = {
        key1: "https://t.me/notpixel/app?startapp=x196_y196",
        key2: "https://t.me/notpixel/app?startapp=f1618637560_t",
        key3: "11"
    };
    res.json(jsonResponse);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

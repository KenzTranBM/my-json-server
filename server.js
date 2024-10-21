const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Sử dụng cổng từ biến môi trường hoặc 3000 nếu không có

app.get('/data', (req, res) => {
    const jsonResponse = {
        key1: "6866555261",
        key2: "6D482F",
        key3: "74",
        key4: "610",
        key5: "201",
        key6: "737"
    };
    res.json(jsonResponse);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

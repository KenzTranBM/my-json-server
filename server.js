const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Sử dụng cổng từ biến môi trường hoặc 3000 nếu không có

app.get('/data', (req, res) => {
    const jsonResponse = {
        key1: "5078381250",
        key2: "000000",
        key3: "217",
        key4: "801",
        key5: "344",
        key6: "928"
    };
    res.json(jsonResponse);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

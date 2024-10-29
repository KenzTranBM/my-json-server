const express = require('express');
const bodyParser = require('body-parser');
const updateFile = require('./update'); // Đường dẫn đến file update.js
const app = express();
const port = process.env.PORT || 3000;

// Cấu hình body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Route để hiển thị form cập nhật
app.get('/update', (req, res) => {
    res.send(`
        <form action="/submit" method="POST">
            <label for="temp1">Temp 1:</label>
            <input type="text" id="temp1" name="temp1" value="https://t.me/notpixel/app?startapp=f6847025987_t
            <label for="temp2">Temp 2:</label>
            <input type="text" id="temp2" name="temp2" value="https://t.me/notpixel/app?startapp=f6847025987_t"><br>
            <label for="temp3">Temp 3:</label>
            <input type="text" id="temp3" name="temp3" value="17"><br>
            <button type="submit">Cập nhật</button>
        </form>
    `);
});

// Route để xử lý form submit
app.post('/submit', (req, res) => {
    const { temp1, temp2, temp3 } = req.body;

    // Gọi hàm cập nhật file
    updateFile(temp1, temp2, temp3)
        .then(() => res.send('Cập nhật thành công!'))
        .catch(err => res.status(500).send('Có lỗi xảy ra: ' + err));
});

// Lắng nghe cổng
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

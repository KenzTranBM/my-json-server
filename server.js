const express = require('express');
const bodyParser = require('body-parser');
const updateFile = require('./update'); // Đường dẫn đến file update.js
const app = express();
const port = process.env.PORT || 3000;

// Cấu hình body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Giả định các temp đã được định nghĩa
let temp = [
    { id1: "0", id2: "0", id3: "0" }, // temp[0]
    { id1: "0", id2: "0", id3: "0" }, // temp[1]
    { id1: "0", id2: "0", id3: "0" }  // temp[2]
];

// Route để hiển thị form cập nhật
app.get('/update', (req, res) => {
    res.send(`
        <form action="/submit" method="POST">
            <label for="id">ID:</label>
            <input type="text" id="id" name="id" required><br>
            <label for="id1">ID1:</label>
            <input type="text" id="id1" name="id1" required><br>
            <label for="id2">ID2:</label>
            <input type="text" id="id2" name="id2" required><br>
            <label for="id3">ID3:</label>
            <input type="text" id="id3" name="id3" required><br>
            <button type="submit">Cập nhật</button>
        </form>
    `);
});

// Route để xử lý form submit
app.post('/submit', (req, res) => {
    const { id, id1, id2, id3 } = req.body;

    // Gọi hàm cập nhật file
    updateFile(id, id1, id2, id3)
        .then(() => res.send('Cập nhật thành công!'))
        .catch(err => res.status(500).send('Có lỗi xảy ra: ' + err));
});

// Route để lấy giá trị temp
app.get('/temp1', (req, res) => {
    res.json(temp[0]); // Trả về dữ liệu của temp[0]
});

app.get('/temp2', (req, res) => {
    res.json(temp[1]); // Trả về dữ liệu của temp[1]
});

app.get('/temp3', (req, res) => {
    res.json(temp[2]); // Trả về dữ liệu của temp[2]
});

// Lắng nghe cổng
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Cấu hình body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Biến để lưu trữ giá trị theo ID
let storedValues = {};

// Route để hiển thị form cập nhật
app.get('/update', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="vi">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cập nhật thông tin</title>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    background-color: #e9ecef;
                    background-image: url('https://www.transparenttextures.com/patterns/white-wall.png');
                    background-size: cover;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .container {
                    background: white;
                    padding: 30px;
                    border-radius: 10px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                    width: 450px;
                    transition: transform 0.2s;
                }
                .container:hover {
                    transform: scale(1.02);
                }
                h2 {
                    text-align: center;
                    color: #343a40;
                    margin-bottom: 20px;
                }
                label {
                    display: block;
                    margin: 10px 0 5px;
                    color: #495057;
                }
                .coordinate {
                    display: flex;
                    justify-content: space-between;
                }
                input {
                    width: 100%; /* Chiều rộng 100% cho các ô input */
                    padding: 10px;
                    margin-bottom: 15px;
                    border: 1px solid #ced4da;
                    border-radius: 5px;
                    transition: border-color 0.2s;
                    box-sizing: border-box; /* Thêm box-sizing */
                }
                .coordinate input {
                    width: calc(50% - 10px); /* Đặt chiều rộng 50% cho tọa độ X và Y */
                }
                input:focus {
                    border-color: #007bff;
                    outline: none;
                }
                button {
                    width: 100%;
                    padding: 10px;
                    background-color: #007bff;
                    border: none;
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 16px;
                    transition: background-color 0.2s;
                }
                button:hover {
                    background-color: #0056b3;
                }
                /* Popup style */
                #popup {
                    display: none;
                    position: fixed;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.6);
                    justify-content: center;
                    align-items: center;
                }
                .popup-content {
                    background: white;
                    padding: 20px;
                    border-radius: 8px;
                    text-align: center;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                }
                .close {
                    cursor: pointer;
                    color: #dc3545;
                    font-weight: bold;
                }
                .close:hover {
                    text-decoration: underline;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>Cập nhật thông tin NotPixel</h2>
                <form id="updateForm" action="/submit" method="POST">
                    <label for="id">ID:</label>
                    <input type="text" id="id" name="id" required>
                    <label>Tọa độ</label>
                    <div class="coordinate">
                        <input type="text" id="key1X" name="key1X" placeholder="X" required>
                        <input type="text" id="key1Y" name="key1Y" placeholder="Y" required>
                    </div>
                    <label for="key2">Link Temp</label>
                    <input type="text" id="key2" name="key2" required>
                    <label for="key3">Số Lần Zoom</label>
                    <input type="text" id="key3" name="key3" required>
                    <label for="key4">Color</label>
                    <input type="text" id="key4" name="key4" required> <!-- Thêm ô input cho Key4 -->
                    <button type="submit">Cập nhật</button>
                </form>
            </div>
            <div id="popup">
                <div class="popup-content">
                    <p>Cập nhật thành công!</p>
                    <span class="close" onclick="document.getElementById('popup').style.display='none'">Đóng</span>
                </div>
            </div>
            <script>
                const form = document.getElementById('updateForm');
                const idInput = document.getElementById('id');
                const key1XInput = document.getElementById('key1X');
                const key1YInput = document.getElementById('key1Y');
                const key2Input = document.getElementById('key2');
                const key3Input = document.getElementById('key3');
                const key4Input = document.getElementById('key4'); // Thêm Key4

                idInput.addEventListener('input', function() {
                    const id = this.value;
                    fetch('/getValues?id=' + id)
                        .then(response => response.json())
                        .then(data => {
                            if (data) {
                                const [key1X, key1Y] = data.Key1 ? data.Key1.split(',') : ['', ''];
                                key1XInput.value = key1X || '';
                                key1YInput.value = key1Y || '';
                                key2Input.value = data.Key2 || '';
                                key3Input.value = data.Key3 || '';
                                key4Input.value = data.Key4 || ''; // Cập nhật Key4
                            } else {
                                key1XInput.value = '';
                                key1YInput.value = '';
                                key2Input.value = '';
                                key3Input.value = '';
                                key4Input.value = ''; // Xóa Key4
                            }
                        });
                });

                form.onsubmit = function(event) {
                    event.preventDefault(); // Ngăn gửi form mặc định
                    fetch(form.action, {
                        method: 'POST',
                        body: new URLSearchParams(new FormData(form))
                    })
                    .then(response => response.text())
                    .then(text => {
                        document.getElementById('popup').style.display = 'flex'; // Hiện popup
                    });
                };
            </script>
        </body>
        </html>
    `);
});

// Route để xử lý form submit
app.post('/submit', (req, res) => {
    const { id, key1X, key1Y, key2, key3, key4 } = req.body; // Thêm Key4

    // Tạo hoặc cập nhật giá trị theo ID
    storedValues[id] = { Key1: `${key1X},${key1Y}`, Key2: key2, Key3: key3, Key4: key4 }; // Lưu Key4

    // Trả về thông báo thành công
    res.send('Cập nhật thành công!');
});

// Route để lấy giá trị theo ID
app.get('/getValues', (req, res) => {
    const id = req.query.id;
    res.json(storedValues[id] || null);
});

// Route để đọc giá trị đã lưu cho từng ID
app.get('/temp1', (req, res) => {
    res.send(storedValues['1'] || 'Không có giá trị nào cho ID = 1');
});

app.get('/temp2', (req, res) => {
    res.send(storedValues['2'] || 'Không có giá trị nào cho ID = 2');
});

app.get('/temp3', (req, res) => {
    res.send(storedValues['3'] || 'Không có giá trị nào cho ID = 3');
});

// Lắng nghe cổng
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

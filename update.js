const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Đường dẫn đến file server.js mà bạn muốn cập nhật
const filePath = path.join(__dirname, 'server.js'); // Đảm bảo đường dẫn đúng

// Hàm cập nhật file server.js
function updateFile(id, id1, id2, id3) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading file at ${filePath}:`, err);
                return reject('Không thể đọc file');
            }

            // Cập nhật nội dung dựa trên ID
            const updatedData = data
                .replace(/temp\[(\d+)\] = {.*?}/g, (match, tempId) => {
                    if (tempId === id) {
                        return `temp[${tempId}] = { id1: "${id1}", id2: "${id2}", id3: "${id3}" }`;
                    }
                    return match; // Giữ nguyên nếu không khớp ID
                });

            fs.writeFile(filePath, updatedData, 'utf8', (err) => {
                if (err) {
                    console.error(`Error writing file at ${filePath}:`, err);
                    return reject('Không thể ghi file');
                }

                // Chạy lệnh cập nhật Git
                exec('git add . && git commit -m "Update temp routes" && git push', (err, stdout, stderr) => {
                    if (err) {
                        console.error(`Error pushing to GitHub: ${stderr}`);
                        return reject('Không thể đẩy lên GitHub');
                    }
                    console.log(`Output: ${stdout}`);
                    resolve();
                });
            });
        });
    });
}

// Xuất hàm updateFile để sử dụng từ bên ngoài
module.exports = updateFile;

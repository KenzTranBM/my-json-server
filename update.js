const { exec } = require('child_process');

exec('git add . && git commit -m "Update temp routes" && git push', (err, stdout, stderr) => {
    if (err) {
        console.error(`Error: ${stderr}`);
        return;
    }
    console.log(`Output: ${stdout}`);
});

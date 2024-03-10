const fs = require('fs').promises;
const axios = require('axios');
const { URL } = require('url');

const filename = process.argv[2];

async function downloadAndSave(url) {
    try {
        const response = await axios.get(url, { responseType: 'text' });
        const parsedUrl = new URL(url);
        const outputPath = parsedUrl.hostname;
        await fs.writeFile(outputPath, response.data);
        console.log(`Wrote to ${outputPath}`);
    } catch (error) {
        console.error(`Couldn't download ${url}`);
    }
}

async function processUrls(filename) {
    try {
        const data = await fs.readFile(filename, 'utf8');
        const urls = data.split('\n').filter(line => line.trim() !== '');
        for (const url of urls) {
            await downloadAndSave(url);
        }
    } catch (err) {
        console.error(`Error reading ${filename} - ${err}`);
        process.exit(1);
    }
}

if (!filename) {
    console.error('Please provide a filename');
    process.exit(1);
} else {
    processUrls(filename);
}

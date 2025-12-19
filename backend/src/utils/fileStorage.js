const fs = require('fs');
const path = require('path');

function readJSON(filePath, fallback = []) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (e) {
    return fallback;
  }
}

function writeJSON(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (e) {
    console.error('Error writing JSON to', filePath, e);
  }
}

module.exports = { readJSON, writeJSON };

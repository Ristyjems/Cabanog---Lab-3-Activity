const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Store items in memory
let items = ["Apple", "Banana", "Orange"];

// GET route to send items as JSON
app.get('/items', (req, res) => {
    res.json(items);
});

// POST route to add new item
app.post('/add-item', (req, res) => {
    const newItem = req.body.item;

    if (newItem) {
        items.push(newItem);
    }

    res.redirect('/index.html');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/index.html`);
});
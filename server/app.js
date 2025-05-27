const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static assets from public directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// Fallback for index.html on root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

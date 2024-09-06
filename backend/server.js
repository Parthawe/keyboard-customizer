const express = require('express');
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));


// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// API route example
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

// The "catchall" handler: for any request that doesn't match the above, send back the React app's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


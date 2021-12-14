const express = require('express');
const path = require('path');

const app = express();

app.listen(3000, () => console.log('Listening on port 3000'));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	const htmlFile = path.join(__dirname, '/views/index.html');
	res.sendFile(htmlFile);
});
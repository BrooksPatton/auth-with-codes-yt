const express = require('express');
const webRoutes = require('./routes/web');

const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'hbs');

app.use('/', webRoutes);

app.listen(port, () => {
	console.log(`App listening on http://localhost:${port}`);
})

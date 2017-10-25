const express = require('express');
const bodyParser = require('body-parser');
const webRoutes = require('./routes/web');
const userRoutes = require('./routes/users');

const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', webRoutes);
app.use('/users', userRoutes);

app.listen(port, () => {
	console.log(`App listening on http://localhost:${port}`);
})

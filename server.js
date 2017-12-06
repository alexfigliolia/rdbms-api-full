import express from 'express';
import bodyParser from 'body-parser';
import knex from 'knex';
import config from './knexfile';
import api from './api/Routes/apiRouter';

knex(config.development);

const app = express();
app.use(bodyParser.json());
app.use('/api', api);


app.listen(3000, () => {
	console.log('app running on port 3000');
});
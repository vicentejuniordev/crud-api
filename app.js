import express, { json } from 'express';
import 'dotenv/config';
import routes from './routes';
const app = express();

app.use(json());
app.use(routes);

export default app
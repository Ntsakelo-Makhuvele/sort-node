import express from 'express';
import routes from './src/routes/index.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/',routes());
const PORT = process.env.PORT || 7009;

app.listen(PORT,() => {
    console.log('app running at 7009')
})
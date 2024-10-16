import express from 'expres';
import cors from 'cors';

const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

app.use(express.json());
app.use(cors());

app.use('/api/todos', todoRoutes);

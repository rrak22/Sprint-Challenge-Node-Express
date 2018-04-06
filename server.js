const express = require ('express');
const cors = require('cors');
const port = 5000;
const server = express();

const projectRouter = require('./data/routers/projectRouter.js');
const actionRouter = require('./data/routers/actionRouter.js');

const logger = (req, res, next) => {
  console.log(req.body);
  next();
}

server.use(express.json());
server.use(cors());
server.use(logger);

server.use('/api/projects', projectRouter);
server.use('/api/projects/:id/actions', actionRouter);

server.get('/', (req, res) => {
  res.send({ api: 'Running...' });
});

server.listen(port, () => console.log('API Running on port 5000'));

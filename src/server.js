const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://zetta:zetta@clusterzetta-mcozz.mongodb.net/mercadozetta?retryWrites=true&w=majority', {
    useUnifiedTopology: true, useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(process.event.PORT || 3333);
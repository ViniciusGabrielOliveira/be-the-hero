const express = require('express');

const OngControler = require('./Conntroller/OngController');
const Incidentconntroler = require('./Conntroller/IncidentController');
const ProfileController = require('./Conntroller/ProfileController');
const SessionController = require('./Conntroller/SessionController');

const routes = express.Router();

routes.get('/ongs', OngControler.index);

routes.post('/sessions',  SessionController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', Incidentconntroler.index);
routes.post('/incidents', Incidentconntroler.create);
routes.delete('/incidents/:id', Incidentconntroler.delete);

routes.post('/ongs', OngControler.create);
module.exports = routes;
'use strict';

//webpack assets
require('./scss/main.scss');

//require angular
const angular = require('angular');
//create angular module
angular.module('ngAdventure', []);

//require services
require('./service/map-service.js');
require('./service/player-service.js');
//require components

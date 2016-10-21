'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);
function mapService($log){
  $log.debug('init mapService');

  let service = {};

  service.mapData = {
    'Winterfell': {
      desc: 'You are in Winterfell, House Stark, where Nymeria was last seen',
      north: null,
      south: 'Casterly Rock',
      east: null,
      west: null,
    },
    'Casterly Rock': {
      desc: 'You are in Casterly Rock, House Lanister',
      north: 'Winterfell',
      south: 'Riverrun',
      east: 'House Baratheon',
      west: null,
    },
    'Riverrun': {
      desc: 'You are in Riverrun, House Tully',
      north: 'Casterly Rock',
      south: null,
      east: 'Highgarden',
      west: null,
    },
    'Dragonstone': {
      desc: 'You are in Dragonstone, House Baratheon',
      north: null,
      south: 'Highgarden',
      east: null,
      west: 'Casterly Rock',
    },
    'Highgarden': {
      desc: 'You are in Highgarden, House Tyrell',
      north: 'Dragonstone',
      south: null,
      east: 'The Iron Islands',
      west: 'Riverrun',
    },
    'The Iron Islands': {
      desc: 'You are at The Iron Islands, House Greyjoy',
      north: null,
      south: 'Sunspear',
      east: null,
      west: 'Highgarden',
    },
    'Sunspear': {
      desc: 'You are in Sunspear, House Martell',
      north: 'The Iron Islands',
      south: null,
      east: null,
      west: null,
    },
  };
  return service;
}

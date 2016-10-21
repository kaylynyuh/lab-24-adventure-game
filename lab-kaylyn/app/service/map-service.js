'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);
function mapService($log){
  $log.debug('init mapService');

  let service = {};

  service.mapData = {
    'House Stark': {
      desc: 'You are in House Stark, where Nymeria was last seen',
      north: null,
      south: 'House Lanister',
      east: null,
      west: null,
    },
    'House Lanister': {
      desc: 'You are in House Lanister',
      north: 'HouseStark',
      south: 'HouseArryn',
      east: 'House Baratheon',
      west: null,
    },
    'House Arryn': {
      desc: 'You are in House Arryn',
      north: 'House Lanister',
      south: null,
      east: 'House Tyrell',
      west: null,
    },
    'House Baratheon': {
      desc: 'You are in House Baratheon',
      north: null,
      south: 'House Tyrell',
      east: null,
      west: 'House Lanister',
    },
    'House Tyrell': {
      desc: 'You are in House Tyrell',
      north: 'House Baratheon',
      south: null,
      east: 'House Targaryen',
      west: 'House Arryn',
    },
    'House Targaryen': {
      desc: 'You are in House Targaryen',
      north: null,
      south: 'House Martell',
      east: null,
      west: 'House Tyrell',
    },
    'House Martell': {
      desc: 'You are in House Martell',
      north: 'House Targaryen',
      south: null,
      east: null,
      west: null,
    },
  };
  return service;
}

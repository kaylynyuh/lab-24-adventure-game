'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('mapService', ['$log', mapService]);
function mapService($log){
  $log.debug('init mapService');

  let service = {};

  service.mapData = {
    HouseStark: {
      desc: 'You are in House Stark',
      north: null,
      south: 'House Lanister',
      east: null,
      west: null,
    },
    HouseLanister: {
      desc: 'You are in House Lanister',
      north: 'House Stark',
      south: 'House Arryn',
      east: 'House Baratheon',
      west: null,
    },
    HouseArryn: {
      desc: 'You are in House Arryn',
      north: 'House Lanister',
      south: null,
      east: 'House Tyrell',
      west: null,
    },
    HouseBaratheon: {
      desc: 'You are in House Baratheon',
      north: null,
      south: 'House Tyrell',
      east: null,
      west: 'House Lanister',
    },
    HouseTyrell: {
      desc: 'You are in House Tyrell',
      north: 'House Baratheon',
      south: null,
      east: 'House Targaryen',
      west: 'House Arryn',
    },
    HouseTargaryen: {
      desc: 'You are in House Targaryen',
      north: null,
      south: 'House Martell',
      east: null,
      west: 'House Tyrell',
    },
    HouseMartell: {
      desc: 'You are in House Martell',
      north: 'House Targaryen',
      south: null,
      east: null,
      west: null,
    },
  };
}

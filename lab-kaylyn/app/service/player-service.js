'use strict';

const angular = require('angular');
const ngAdventure = angular.module('ngAdventure');

ngAdventure.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService){
  $log.debug('init playerService');

  let service = {};

  let turn = 0;

  let player = service.player = {
    name: 'Arya Stark',
    location: 'Winterfell',
    healthPoints: 10,
  };

  let history = service.history = [
    {
      turn,
      desc: 'It\'s nearing the end of the long summer and winter is coming. Help Arya find her Direwolf, Nymeria.',
      // location: 'House Stark',
      healthPoints: player.healthPoints,
    },
  ];

  service.movePlayer = function(direction){
    return new $q((resolve, reject) => {
      turn++;
      let currentLocation = player.location;
      let newLocation = mapService.mapData[currentLocation][direction];
      if(!newLocation){
        history.unshift({
          turn,
          desc: 'It appears you have hit a wall',
          location: player.location,
          healthPoints: player.healthPoints,
        });
        console.log('history', history);
        return reject('There is no House in that direction');
      }
      history.unshift({
        turn,
        location: player.location,
        desc: mapService.mapData[newLocation].desc,
        healthPoints: player.healthPoints,
      });
      console.log('history', history);
      player.location = newLocation;
      return resolve(player.location);
    });
  };
  return service;
}
